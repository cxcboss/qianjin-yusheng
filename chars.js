// 角色头像：统一骨架 viewBox 0 0 240 262
// 绘制顺序：后发 → 身体 → 脖子 → 衣领 → 耳朵 → 头 → 前发 → 五官 → 道具
const INK = '#1F1A17';
const SW = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;
const SW2 = `stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
const BODY = 'M30 262 C34 226 70 206 120 206 C170 206 206 226 210 262 Z';
const HEAD_ROUND = 'M62 124 C62 74 88 46 120 46 C152 46 178 74 178 124 C178 164 154 190 120 190 C86 190 62 164 62 124 Z';
const HEAD_SQUARE = 'M62 122 C62 72 88 46 120 46 C152 46 178 72 178 122 C178 152 168 178 146 186 C134 191 106 191 94 186 C72 178 62 152 62 122 Z';

const BG = { zhou: '#DCEBFF', lu: '#E6E0FF', han: '#FFF0BF', shen: '#D9F3E8', xu: '#DDE5FF', song: '#FFE2CC', cao: '#D2F0F0', lin: '#FFE0EA', npc: '#ECEAE6' };

function neck(k, sh) {
  return `<path d="M104 176 L104 210 Q120 218 136 210 L136 176 Z" fill="${k}" ${SW}/>
  <path d="M106 186 Q120 200 134 186 L134 197 Q120 208 106 197 Z" fill="${sh}"/>`;
}
function ears(k) {
  return `<ellipse cx="60" cy="130" rx="10" ry="14" fill="${k}" ${SW}/><path d="M61 123 q-5 7 0 14" ${SW2} fill="none"/>
  <ellipse cx="180" cy="130" rx="10" ry="14" fill="${k}" ${SW}/><path d="M179 123 q5 7 0 14" ${SW2} fill="none"/>`;
}
function head(k, shape = HEAD_ROUND) { return `<path d="${shape}" fill="${k}" ${SW}/>`; }
function blush(c = '#FF8F7A', o = 0.45) {
  return `<ellipse cx="86" cy="156" rx="9" ry="5" fill="${c}" opacity="${o}"/><ellipse cx="154" cy="156" rx="9" ry="5" fill="${c}" opacity="${o}"/>`;
}
function nose() { return `<path d="M120 142 Q115 151 122 153" ${SW} stroke-width="3" fill="none"/>`; }
function dotEyes(rx = 5.5, ry = 7, y = 134) {
  return `<ellipse cx="100" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}"/><circle cx="102" cy="${y - 3}" r="2" fill="#fff"/>
  <ellipse cx="140" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}"/><circle cx="142" cy="${y - 3}" r="2" fill="#fff"/>`;
}
function happyEyes(y = 136) { return `<path d="M92 ${y} Q100 ${y - 9} 108 ${y} M132 ${y} Q140 ${y - 9} 148 ${y}" ${SW} fill="none"/>`; }
function smile() { return `<path d="M107 166 Q120 175 133 166" ${SW} fill="none"/>`; }
function grin(y = 162, d = 22) {
  return `<path d="M101 ${y} Q120 ${y + d * 2} 139 ${y} Z" fill="#A63A2E" ${SW}/><path d="M106 ${y + 3} H134" stroke="#fff" stroke-width="5"/>`;
}
function wrap(inner) { return `<svg viewBox="0 0 240 262" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`; }

// 1. 盖盖茨比
function zhou(age = 55, mood = 'normal') {
  const K = '#F4D6BC', SH = '#E4BC9C';
  const hairC = { 55: '#5A4636', 65: '#8E857A', 75: '#C9C2B6', 85: '#F1ECE3' }[age] || '#5A4636';
  const receding = age >= 75;
  const hair = receding
    ? (age >= 85
      ? `M57 120 C52 74 86 38 122 38 C158 38 190 72 184 120 L177 120 C176 98 170 86 162 78 Q156 70 150 74 Q144 64 136 68 Q128 58 120 64 Q112 58 104 68 Q96 64 90 72 Q84 70 78 78 C70 86 66 100 66 120 Z`
      : `M57 120 C52 74 86 38 122 38 C158 38 190 72 184 120 L177 120 C176 102 170 90 162 82 Q156 76 150 80 Q144 72 136 76 Q128 68 120 74 Q112 68 104 76 Q96 72 90 80 Q84 76 78 82 C70 90 66 102 66 120 Z`)
    : `M57 120 C52 74 86 36 122 36 C158 36 190 70 184 120 L177 120 C177 107 173 100 167 95 C147 101 116 95 100 75 C92 87 79 99 71 111 L65 120 Z`;
  const brow = age >= 75 ? '#8A8378' : INK;
  const brows = {
    normal: `M89 114 Q100 108 111 113 M129 113 Q140 108 151 114`,
    happy: `M89 112 Q100 106 111 111 M129 111 Q140 106 151 112`,
    shock: `M88 106 Q100 98 112 104 M128 104 Q140 98 152 106`,
    sad: `M90 113 Q101 113 111 106 M129 106 Q139 113 150 113`,
  }[mood];
  const eyes = { normal: dotEyes(), happy: happyEyes(), sad: dotEyes(5, 6.5, 136),
    shock: `<circle cx="100" cy="134" r="7.5" fill="#fff" ${SW2}/><circle cx="100" cy="134" r="3" fill="${INK}"/><circle cx="140" cy="134" r="7.5" fill="#fff" ${SW2}/><circle cx="140" cy="134" r="3" fill="${INK}"/>` }[mood];
  const mouth = { normal: smile(), happy: grin(),
    shock: `<ellipse cx="120" cy="170" rx="8" ry="10" fill="#A63A2E" ${SW}/>`,
    sad: `<path d="M107 172 Q120 163 133 172" ${SW} fill="none"/>` }[mood];
  const extra = mood === 'shock' ? `<path d="M190 84 q-8 13 0 17 q8 -4 0 -17 Z" fill="#7EC8FF" ${SW2}/>`
    : mood === 'sad' ? `<path d="M150 149 q-6 10 0 14 q6 -4 0 -14 Z" fill="#7EC8FF" ${SW2}/>` : '';
  const lines = (age >= 65 ? `<path d="M108 ${receding ? 96 : 104} Q120 ${receding ? 93 : 101} 132 ${receding ? 96 : 104}" ${SW2} fill="none"/>` : '')
    + (receding ? `<path d="M104 88 Q120 85 136 88" ${SW2} fill="none"/><path d="M78 136 l-6 -3 M78 141 l-6 2 M162 136 l6 -3 M162 141 l6 2" ${SW2}/>` : '');
  return wrap(`
  <path d="${BODY}" fill="#3557A8" ${SW}/>
  ${neck(K, SH)}
  <path d="M92 207 L120 248 L148 207 Z" fill="#26438A" ${SW}/>
  <path d="M100 207 L120 238 L140 207 Z" fill="#CFE4FF" ${SW2}/>
  <path d="M103 207 L113 224 L104 225 Z M137 207 L127 224 L136 225 Z" fill="#fff" ${SW2}/>
  ${ears(K)}${head(K)}
  ${blush()}
  <path d="${hair}" fill="${hairC}" ${SW}/>
  ${receding ? `<path d="M84 56 C100 47 142 47 158 56" stroke="#000" stroke-opacity=".15" stroke-width="2.5" fill="none" stroke-linecap="round"/>` : `<path d="M100 75 C103 60 108 47 114 39" ${SW2} fill="none"/><path d="M130 46 C146 48 162 58 170 72" stroke="#000" stroke-opacity=".18" stroke-width="2.5" fill="none" stroke-linecap="round"/>`}
  ${age === 55 ? `<path d="M62 108 C62 101 64 95 67 91 M178 108 C178 101 176 95 173 91" stroke="#9C8E7E" stroke-width="3.5" fill="none" stroke-linecap="round"/>` : ''}
  ${lines}
  <path d="${brows}" stroke="${brow}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  ${eyes}
  <ellipse cx="100" cy="134" rx="17" ry="14" fill="#fff" fill-opacity=".3" stroke="${INK}" stroke-width="3"/>
  <ellipse cx="140" cy="134" rx="17" ry="14" fill="#fff" fill-opacity=".3" stroke="${INK}" stroke-width="3"/>
  <path d="M117 133 Q120 129 123 133 M83 131 L69 125 M157 131 L171 125" ${SW2} fill="none"/>
  ${nose()}${mouth}${extra}`);
}

// 2. 马克克
function lu() {
  const K = '#F2D2B6', SH = '#DDB496';
  return wrap(`
  <path d="${BODY}" fill="#33302D" ${SW}/>
  ${neck(K, SH)}
  <path d="M104 208 Q120 222 136 208" ${SW} fill="none"/>
  <path d="M30 262 C34 226 70 206 102 206 L114 262 Z" fill="#2E4378" ${SW}/>
  <path d="M210 262 C206 226 170 206 138 206 L126 262 Z" fill="#2E4378" ${SW}/>
  <path d="M102 206 L94 230 L108 236 Z M138 206 L146 230 L132 236 Z" fill="#3D5594" ${SW2}/>
  <circle cx="168" cy="240" r="10" fill="#FF5A4E" ${SW2}/><path d="M164 244 L168 233 L172 244 Z" fill="#fff"/>
  ${ears(K)}${head(K, HEAD_SQUARE)}
  ${blush('#F08A72', 0.3)}
  <path d="M60 118 C56 84 64 56 84 44 C90 32 106 26 122 28 C140 24 158 32 166 44 C184 56 186 90 180 118 L174 118 C173 104 169 96 162 89 C148 95 132 92 120 84 C108 92 92 95 78 90 C72 98 68 106 66 118 Z" fill="#3B2D24" ${SW}/>
  <path d="M92 52 C102 42 114 38 126 40 M134 44 C146 44 156 50 160 58" stroke="#6A5545" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M88 115 L112 118 M128 118 L152 115" ${SW} stroke-width="5" fill="none"/>
  ${dotEyes(5, 6)}
  ${nose()}
  <path d="M106 166 Q122 172 136 161" ${SW} fill="none"/><path d="M136 161 l3 -2" ${SW2}/>`);
}

// 3. 巴菲菲
function han() {
  const K = '#F3D3B5', SH = '#E0B898', W = '#F4EFE7';
  return wrap(`
  <path d="${BODY}" fill="#5D6E86" ${SW}/>
  ${neck(K, SH)}
  <path d="M98 207 L120 244 L142 207 Z" fill="#fff" ${SW2}/>
  <path d="M116 212 L124 212 L129 250 L120 260 L111 250 Z" fill="#FF5A4E" ${SW2}/>
  <path d="M96 207 L110 244 M144 207 L130 244" ${SW} fill="none"/>
  ${ears(K)}${head(K)}
  ${blush('#FF8F7A', 0.5)}
  <path d="M57 120 C52 76 86 40 120 40 C154 40 188 76 183 120 L176 120 C176 100 170 88 162 80 Q156 72 149 76 Q143 66 135 70 Q128 62 120 68 Q112 62 105 70 Q97 66 91 76 Q84 72 78 80 C70 88 64 100 64 120 Z" fill="${W}" ${SW}/>
  <path d="M86 56 C102 48 138 48 154 56 M98 64 l-3 6 M120 58 l0 7 M142 64 l3 6" stroke="#CFC7BA" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M100 90 Q120 86 140 90 M104 98 Q120 95 136 98" ${SW2} fill="none"/>
  <path d="M86 117 C88 105 106 102 114 111 C104 111 95 113 86 117 Z M154 117 C152 105 134 102 126 111 C136 111 145 113 154 117 Z" fill="${W}" ${SW2}/>
  ${happyEyes(138)}
  <rect x="84" y="123" width="32" height="25" rx="8" fill="#fff" fill-opacity=".3" stroke="${INK}" stroke-width="5.5"/>
  <rect x="124" y="123" width="32" height="25" rx="8" fill="#fff" fill-opacity=".3" stroke="${INK}" stroke-width="5.5"/>
  <path d="M116 133 L124 133" stroke="${INK}" stroke-width="5"/><path d="M84 131 L67 126 M156 131 L173 126" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
  <path d="M78 142 l-7 -2 M78 147 l-7 3 M162 142 l7 -2 M162 147 l7 3" ${SW2}/>
  <path d="M120 145 Q111 157 124 158" ${SW} stroke-width="3" fill="none"/>
  ${grin(164)}
  <path d="M90 158 Q93 168 99 172 M150 158 Q147 168 141 172" ${SW2} fill="none"/>
  <rect x="182" y="198" width="26" height="42" rx="6" fill="#E8322B" ${SW}/>
  <rect x="185" y="193" width="20" height="7" rx="2" fill="#D7D2CA" ${SW2}/>
  <path d="M182 214 Q195 206 208 216" stroke="#fff" stroke-width="4" fill="none"/>
  <path d="M178 236 C178 226 186 222 196 224 C206 222 214 228 212 238 C212 248 202 252 192 250 C182 250 178 244 178 236 Z" fill="${K}" ${SW}/>
  <path d="M186 231 h14 M186 238 h14" ${SW2}/>`);
}

// 4. 罗琳琳（刘海和两侧发束是同一块，轮廓连续）
function shen() {
  const K = '#F6DCC6', SH = '#E8C3A6', H = '#C26A3A';
  return wrap(`
  <path d="M84 168 L156 168 L152 214 L88 214 Z" fill="${H}" ${SW}/>
  <path d="${BODY}" fill="#22A88F" ${SW}/>
  ${neck(K, SH)}
  <path d="M100 207 L120 232 L140 207 Z" fill="#fff" ${SW2}/>
  <path d="M96 202 Q120 216 144 202 L150 220 Q120 236 90 220 Z" fill="#FFB800" ${SW}/>
  <path d="M126 224 L138 254 L118 250 Z" fill="#FFB800" ${SW}/>
  ${head(K)}
  ${blush('#FF8F7A', 0.5)}
  <path d="M74 250 C60 222 52 190 54 150 C50 70 84 32 122 32 C162 32 196 74 186 150 C188 190 180 222 166 250 L146 250 C154 222 162 196 170 170 L174 126 C172 102 165 86 151 76 C141 92 117 104 93 106 C82 108 72 116 68 128 L70 170 C78 196 86 222 94 250 Z" fill="${H}" ${SW}/>
  <path d="M120 42 C136 44 154 56 162 72" stroke="#E08A55" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M90 115 Q100 110 110 114 M130 114 Q140 110 150 115" stroke="#8A4A2A" stroke-width="3" fill="none" stroke-linecap="round"/>
  ${dotEyes(5, 6.5)}
  <path d="M95 130 l-5 -3 M145 130 l5 -3" ${SW2}/>
  ${nose()}${smile()}
  <g transform="rotate(-10 58 236)"><rect x="34" y="220" width="46" height="34" rx="3" fill="#FF5A4E" ${SW}/><path d="M42 231 h30 M42 239 h22" stroke="#fff" stroke-width="2.5"/></g>
  <path d="M176 250 L196 222" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><path d="M196 222 L201 214" stroke="#FFB800" stroke-width="4" stroke-linecap="round"/>`);
}

// 5. 扎克伯伯
function xu() {
  const K = '#F8E1CF', SH = '#ECC9AE';
  const curls = [[86, 64], [100, 56], [116, 53], [132, 54], [146, 60], [92, 74], [108, 68], [124, 66], [140, 70], [152, 76], [78, 80]]
    .map(([x, y]) => `M${x} ${y} q4 -6 8 0`).join(' ');
  return wrap(`
  <path d="${BODY}" fill="#A9AFB6" ${SW}/>
  ${neck(K, SH)}
  <path d="M102 207 Q120 224 138 207" ${SW} stroke-width="5" fill="none"/>
  ${ears(K)}${head(K)}
  ${blush('#FF8F7A', 0.35)}
  <path d="M62 118 C58 76 86 42 120 42 C154 42 182 76 178 118 L172 118 C172 104 168 92 160 86 C146 82 132 84 120 82 C108 84 94 82 80 86 C72 92 68 104 68 118 Z" fill="#5C3D29" ${SW}/>
  <path d="${curls}" stroke="#3D281B" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M90 116 L110 116 M130 116 L150 116" ${SW} stroke-width="3" fill="none"/>
  ${dotEyes(6.5, 7.5)}
  ${nose()}
  <path d="M110 167 Q120 171 130 167" ${SW} fill="none"/>
  <rect x="166" y="210" width="48" height="24" rx="10" fill="#2B2F3A" ${SW}/>
  <rect x="172" y="216" width="36" height="11" rx="5" fill="#7CC4FF"/>
  <path d="M174 238 C174 230 182 228 190 230 C200 228 208 232 208 240 C208 250 198 254 188 252 C180 252 174 246 174 238 Z" fill="${K}" ${SW}/>`);
}

// 6. 贝佐佐
function song() {
  const K = '#F0CBA9', SH = '#DDB08C';
  return wrap(`
  <path d="${BODY}" fill="#CFE4FF" ${SW}/>
  ${neck(K, SH)}
  <path d="M100 206 L113 224 L104 229 Z M140 206 L127 224 L136 229 Z" fill="#fff" ${SW2}/>
  <path d="M30 262 C34 226 70 206 98 206 L106 262 Z" fill="#FF8A3D" ${SW}/>
  <path d="M210 262 C206 226 170 206 142 206 L134 262 Z" fill="#FF8A3D" ${SW}/>
  <path d="M42 238 H100 M140 238 H198 M38 252 H102 M138 252 H202" stroke="#E06A20" stroke-width="2.5"/>
  ${ears(K)}${head(K)}
  <path d="M64 128 C63 112 66 100 72 92 L78 95 C73 104 71 116 71 128 Z M176 128 C177 112 174 100 168 92 L162 95 C167 104 169 116 169 128 Z" fill="#B99A7E" opacity=".28"/>
  <ellipse cx="100" cy="72" rx="17" ry="7" transform="rotate(-24 100 72)" fill="#fff" opacity=".6"/>
  <ellipse cx="122" cy="61" rx="4" ry="2.6" transform="rotate(-10 122 61)" fill="#fff" opacity=".6"/>
  ${blush('#FF8F7A', 0.55)}
  <path d="M88 112 Q100 104 112 110 M128 110 Q140 104 152 112" ${SW} stroke-width="4" fill="none"/>
  ${happyEyes(134)}
  ${nose()}
  <path d="M99 160 Q120 190 141 160 Z" fill="#A63A2E" ${SW}/>
  <ellipse cx="120" cy="169" rx="9" ry="4" fill="#E8776B"/>
  <path d="M104 163 H136" stroke="#fff" stroke-width="5"/>
  <path d="M190 78 l10 -8 M194 94 l12 -2 M50 78 l-10 -8" ${SW} fill="none"/>`);
}

// 7. 拉里里
function cao() {
  const K = '#D9A47E', SH = '#C38A63', W = '#E9E5DE';
  return wrap(`
  <path d="${BODY}" fill="#1F3B73" ${SW}/>
  ${neck(K, SH)}
  <path d="M98 207 L120 240 L142 207 Z" fill="#fff" ${SW2}/>
  <path d="M96 207 L110 246 M144 207 L130 246" ${SW} fill="none"/>
  <path d="M162 228 v14 M156 234 h12 M155 238 q7 7 14 0" stroke="#FFB800" stroke-width="3" fill="none" stroke-linecap="round"/>
  ${ears(K)}${head(K)}
  <path d="M60 120 C56 76 86 40 120 40 C154 40 184 76 180 120 L174 120 C174 106 170 95 163 89 C150 93 136 93 120 91 C104 93 90 93 77 89 C70 95 66 106 66 120 Z" fill="${W}" ${SW}/>
  <path d="M96 76 L94 88 M110 74 L109 90 M126 74 L126 90 M142 76 L143 88" stroke="#BEB8AE" stroke-width="2" fill="none" stroke-linecap="round"/>
  <rect x="88" y="56" width="26" height="14" rx="6" fill="${INK}"/><rect x="126" y="56" width="26" height="14" rx="6" fill="${INK}"/>
  <path d="M114 62 H126" stroke="${INK}" stroke-width="3"/><path d="M94 60 h7 M132 60 h7" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  <path d="M88 116 L111 113 M129 113 L152 116" stroke="#8F897F" stroke-width="4" fill="none" stroke-linecap="round"/>
  ${dotEyes(5, 5.5)}
  ${nose()}
  <path d="M66 140 C68 172 92 194 120 194 C148 194 172 172 174 140 C168 160 152 172 140 170 C132 178 108 178 100 170 C88 172 72 160 66 140 Z" fill="${W}" ${SW2}/>
  <path d="M104 160 Q120 153 136 160 Q120 166 104 160 Z" fill="${W}" ${SW2}/>
  <path d="M110 169 Q122 173 132 166" ${SW} stroke-width="3" fill="none"/>`);
}

// 8. 奥普拉拉
function lin() {
  const K = '#B97B55', SH = '#A0623F', H = '#2A1E19';
  return wrap(`
  <path d="M44 142 C30 104 44 56 80 38 C100 22 144 22 164 38 C200 56 210 104 196 142 C206 170 194 198 172 206 C160 216 140 214 132 206 L108 206 C100 214 80 216 68 206 C46 198 34 170 44 142 Z" fill="${H}" ${SW}/>
  <path d="${BODY}" fill="#E0457B" ${SW}/>
  ${neck(K, SH)}
  <path d="M100 207 L120 236 L140 207 Z" fill="${K}" ${SW2}/>
  ${ears(K)}${head(K)}
  ${blush('#E2705F', 0.4)}
  <path d="M60 126 C54 76 84 40 122 40 C160 40 188 74 180 126 L174 126 C172 104 164 88 150 80 C138 88 112 94 92 90 C80 98 70 110 66 126 Z" fill="${H}"/>
  <path d="M174 126 C172 104 164 88 150 80 C138 88 112 94 92 90 C80 98 70 110 66 126" ${SW} fill="none"/>
  <path d="M96 56 C110 50 130 50 146 58" stroke="#4A3A32" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <circle cx="60" cy="152" r="9" fill="none" stroke="${INK}" stroke-width="7"/><circle cx="60" cy="152" r="9" fill="none" stroke="#FFB800" stroke-width="3.5"/>
  <circle cx="180" cy="152" r="9" fill="none" stroke="${INK}" stroke-width="7"/><circle cx="180" cy="152" r="9" fill="none" stroke="#FFB800" stroke-width="3.5"/>
  <path d="M90 115 Q100 109 110 113 M130 113 Q140 109 150 115" ${SW} stroke-width="3" fill="none"/>
  ${dotEyes(5, 6.5)}
  <path d="M95 130 l-5 -3 M145 130 l5 -3" ${SW2}/>
  <path d="M120 142 Q114 151 122 153" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
  ${grin(162)}
  <path d="M180 262 L193 226" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="196" cy="214" rx="11" ry="13" fill="#9AA3AD" ${SW}/><path d="M188 210 h16 M187 217 h18" stroke="${INK}" stroke-width="1.6"/>
  <ellipse cx="189" cy="240" rx="12" ry="10" fill="${K}" ${SW}/>`);
}

// 路人：车库里的年轻人
function npc() {
  const K = '#F1CFAE', SH = '#DDB28E';
  return wrap(`
  <path d="${BODY}" fill="#8FD3C1" ${SW}/>
  ${neck(K, SH)}
  <path d="M104 208 Q120 222 136 208" ${SW} fill="none"/>
  <rect x="150" y="232" width="18" height="14" rx="2" fill="#FFB800" ${SW2}/>
  ${ears(K)}${head(K)}
  ${blush('#FF8F7A', 0.5)}
  <path d="M58 118 C52 80 70 46 100 38 C112 30 130 30 142 38 C170 46 188 80 182 118 L176 118 C174 104 170 94 164 88 L157 98 L150 86 L140 97 L132 85 L122 97 L112 85 L103 97 L95 86 L86 97 L78 88 C72 96 68 106 66 118 Z" fill="#6B4A32" ${SW}/>
  <path d="M90 115 Q100 110 110 114 M130 114 Q140 110 150 115" ${SW} stroke-width="3" fill="none"/>
  ${dotEyes(5.5, 7)}
  ${nose()}${smile()}`);
}

const CHARS = { zhou, lu, han, shen, xu, song, cao, lin, npc };
document.querySelectorAll('[data-char]').forEach((el) => {
  const key = el.dataset.char;
  el.innerHTML = CHARS[key](+el.dataset.age || 55, el.dataset.mood || 'normal');
  if (el.hasAttribute('data-bg') || el.matches('.por,.art,.av,.a')) el.style.backgroundColor = BG[key];
});
