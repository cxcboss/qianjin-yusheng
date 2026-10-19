// 物品素材：96×96，墨线描边 + 多色平涂 + 高光，配合分类色底块使用
const IK = '#1F1A17';
const O = `stroke="${IK}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"`;
const O2 = `stroke="${IK}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
const C = { white: '#FFFFFF', light: '#E9EDF2', gray: '#B7C1CC', slate: '#5E6B78', red: '#FF5A4E', dred: '#D63C33', gold: '#FFB800', dgold: '#E09A00',
  orange: '#FF8A3D', leaf: '#3CC48A', dleaf: '#14936E', mint: '#14B39A', sky: '#7CC4FF', blue: '#4C8DFF', navy: '#2E4378', purple: '#8B6CFF',
  pink: '#FF6FA5', brown: '#9A6234', sand: '#FFD98A', cream: '#FFF3D6', grass: '#9BE28E' };
const sv = (inner) => `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
const shadow = (cx = 48, cy = 86, rx = 30) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="4" fill="${IK}" opacity=".12"/>`;

const ITEMS = {
  // ── 享受 ──
  jet: sv(`
    <path d="M2 40 h8 M4 48 h5" ${O2} fill="none"/>
    <path d="M12 56 C12 49 18 45 28 45 L68 45 C80 45 88 49 91 54 C88 59 80 61 68 61 L28 61 C18 61 12 60 12 56 Z" fill="${C.white}" ${O}/>
    <path d="M14 47 L9 28 L19 28 L32 45 Z" fill="${C.red}" ${O}/>
    <rect x="22" y="38" width="16" height="8" rx="4" fill="${C.light}" ${O}/>
    <path d="M16 56 H80" stroke="${C.blue}" stroke-width="3"/>
    ${[40, 48, 56, 64].map((x) => `<circle cx="${x}" cy="51" r="2.4" fill="${C.sky}" ${O2} stroke-width="1.5"/>`).join('')}
    <path d="M78 48.5 C82 49 86 51 88 53 L79 53 Z" fill="${C.navy}"/>
    <path d="M40 57 L56 76 L65 76 L57 57 Z" fill="${C.light}" ${O}/>
    <path d="M8 80 a6 6 0 0 1 10 -4 a7 7 0 0 1 13 2 a5 5 0 0 1 -1 10 H10 a5 5 0 0 1 -2 -8 Z" fill="${C.white}" ${O2}/>`),
  yacht: sv(`
    <path d="M2 84 q7 -5 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0" stroke="${C.blue}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M6 58 L90 58 L80 74 L16 74 Z" fill="${C.white}" ${O}/>
    <path d="M12 66 H84" stroke="${C.navy}" stroke-width="4"/>
    <path d="M22 58 L28 46 L72 46 L80 58 Z" fill="${C.white}" ${O}/>
    <path d="M32 51 H70" stroke="${C.navy}" stroke-width="5" stroke-linecap="round"/>
    <path d="M34 46 L39 36 L62 36 L67 46 Z" fill="${C.white}" ${O}/>
    <path d="M43 41 H58" stroke="${C.navy}" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 36 V22" ${O} fill="none"/>
    <path d="M50 23 L61 26 L50 30 Z" fill="${C.red}" ${O2}/>`),
  supercar: sv(`
    ${shadow(48, 82, 40)}
    <path d="M2 46 h7 M4 54 h4" ${O2} fill="none"/>
    <path d="M6 66 C6 58 14 54 26 52 L40 43 C47 38 62 38 70 42 L82 50 C88 52 92 56 92 62 L92 68 C92 70 90 72 88 72 L10 72 C7 72 6 70 6 66 Z" fill="${C.red}" ${O}/>
    <path d="M42 46 C48 42 60 42 67 45 L76 52 L36 52 Z" fill="${C.navy}" ${O2}/>
    <path d="M50 45 L46 51 M58 44 L54 51" stroke="${C.white}" stroke-width="2" opacity=".7"/>
    <path d="M14 61 C30 59 60 59 86 61" stroke="${C.dred}" stroke-width="3" fill="none"/>
    <path d="M84 55 L91 57 L90 60 L84 59 Z" fill="${C.gold}" ${O2} stroke-width="1.5"/>
    <circle cx="26" cy="72" r="10" fill="${IK}"/><circle cx="26" cy="72" r="4.5" fill="${C.gray}"/>
    <circle cx="72" cy="72" r="10" fill="${IK}"/><circle cx="72" cy="72" r="4.5" fill="${C.gray}"/>`),
  island: sv(`
    <circle cx="20" cy="18" r="8" fill="${C.gold}" ${O}/>
    <ellipse cx="48" cy="72" rx="42" ry="13" fill="${C.sky}" ${O}/>
    <path d="M14 78 q4 -3 8 0 M68 80 q4 -3 8 0" stroke="${C.white}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M20 70 C28 58 68 58 76 70 Z" fill="${C.sand}" ${O}/>
    <path d="M50 66 C47 52 49 40 56 30" stroke="${IK}" stroke-width="9.5" fill="none" stroke-linecap="round"/>
    <path d="M50 66 C47 52 49 40 56 30" stroke="${C.brown}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M56 30 C48 20 36 20 28 28 C38 27 46 28 56 30 Z M56 30 C60 18 72 14 82 18 C72 20 64 24 56 30 Z M56 30 C66 26 78 30 82 40 C72 34 64 32 56 30 Z M56 30 C50 34 44 42 44 50 C48 42 52 36 56 30 Z" fill="${C.leaf}" ${O}/>
    <circle cx="53" cy="34" r="3" fill="${C.brown}" ${O2}/><circle cx="59" cy="34" r="3" fill="${C.brown}" ${O2}/>`),
  painting: sv(`
    <path d="M30 74 L24 90 M66 74 L72 90 M48 74 V88" ${O} fill="none"/>
    <rect x="14" y="14" width="68" height="60" rx="4" fill="${C.gold}" ${O}/>
    <rect x="19" y="19" width="58" height="50" rx="2" fill="${C.dgold}"/>
    <rect x="23" y="23" width="50" height="42" fill="#DCEBFF" ${O2}/>
    <circle cx="62" cy="34" r="6" fill="${C.orange}"/>
    <path d="M30 36 a5 5 0 0 1 9 -2 a4 4 0 0 1 4 6 H31 a3 3 0 0 1 -1 -4 Z" fill="${C.white}"/>
    <path d="M24 56 C32 46 42 48 50 54 C58 46 66 46 72 52 L72 64 L24 64 Z" fill="${C.leaf}"/>
    ${[[16.5, 16.5], [79.5, 16.5], [16.5, 71.5], [79.5, 71.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.2" fill="${C.white}"/>`).join('')}`),

  // ── 体验 ──
  everest: sv(`
    ${shadow(48, 86, 40)}
    <circle cx="78" cy="20" r="7" fill="${C.gold}" ${O}/>
    <path d="M46 84 L68 44 L90 84 Z" fill="#9FB1C6" ${O}/>
    <path d="M6 84 L38 24 L70 84 Z" fill="#C9D4E2" ${O}/>
    <path d="M27 45 L38 24 L49 45 L44 41 L38 47 L32 41 Z" fill="${C.white}" ${O2}/>
    <path d="M61 57 L68 44 L75 57 L71 54 L68 58 L65 54 Z" fill="${C.white}" ${O2}/>
    <path d="M38 24 V8" ${O} fill="none"/>
    <path d="M38 9 L50 12 L38 16 Z" fill="${C.red}" ${O2}/>
    <path d="M22 70 L30 62 M50 74 L56 66" stroke="#9FB1C6" stroke-width="2.4" stroke-linecap="round"/>`),
  rocket: sv(`
    <path d="M-4 98 C20 76 76 76 100 98 Z" fill="${C.sky}" ${O}/>
    <path d="M24 88 c4 -6 12 -6 14 -2 c-4 4 -10 6 -14 2 Z" fill="${C.leaf}" ${O2}/>
    <path d="M14 18 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 Z M80 30 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 Z" fill="${C.gold}"/>
    <circle cx="70" cy="12" r="1.8" fill="${IK}"/><circle cx="24" cy="44" r="1.5" fill="${IK}"/>
    <g transform="rotate(30 48 44)">
      <path d="M42 56 L48 74 L54 56 Z" fill="${C.gold}" ${O2}/><path d="M45 56 L48 66 L51 56 Z" fill="${C.orange}"/>
      <path d="M39 46 L30 58 L39 56 Z M57 46 L66 58 L57 56 Z" fill="${C.red}" ${O}/>
      <path d="M48 10 C60 20 62 42 57 56 H39 C34 42 36 20 48 10 Z" fill="${C.white}" ${O}/>
      <path d="M48 10 C54 14 57 20 58 26 H38 C39 20 42 14 48 10 Z" fill="${C.red}" ${O}/>
      <circle cx="48" cy="38" r="6" fill="${C.sky}" ${O2}/><path d="M45 36 a3 3 0 0 1 3 -2" stroke="${C.white}" stroke-width="1.8" fill="none"/>
    </g>`),
  submarine: sv(`
    <path d="M14 54 L0 46 L0 62 Z" fill="${C.cream}"/>
    <circle cx="72" cy="22" r="3.5" fill="${C.white}" ${O2}/><circle cx="78" cy="12" r="2.5" fill="${C.white}" ${O2}/><circle cx="66" cy="30" r="2" fill="${C.white}" ${O2}/>
    <path d="M34 38 L37 26 H52 L56 38 Z" fill="${C.gold}" ${O}/>
    <path d="M46 26 V16 H54" ${O} fill="none"/>
    <ellipse cx="44" cy="52" rx="32" ry="17" fill="${C.gold}" ${O}/>
    <path d="M22 44 C26 40 32 38 38 38" stroke="${C.white}" stroke-width="3" fill="none" opacity=".85" stroke-linecap="round"/>
    <circle cx="34" cy="53" r="6" fill="${C.sky}" ${O2}/><circle cx="52" cy="53" r="6" fill="${C.sky}" ${O2}/>
    <path d="M76 52 L85 44 L85 60 Z" fill="${C.slate}" ${O2}/>
    <path d="M0 88 C20 82 40 86 60 84 C76 82 88 86 96 88 V96 H0 Z" fill="${C.sand}"/><path d="M0 88 C20 82 40 86 60 84 C76 82 88 86 96 88" fill="none" ${O}/>
    <path d="M18 86 C14 78 22 74 18 66 M84 86 C88 80 82 76 86 70" stroke="${C.mint}" stroke-width="4" fill="none" stroke-linecap="round"/>`),
  aurora: sv(`
    <path d="M6 32 C20 16 34 34 48 20 C60 8 72 24 90 14" stroke="${C.mint}" stroke-width="8" fill="none" stroke-linecap="round" opacity=".9"/>
    <path d="M6 46 C22 32 36 48 52 34 C64 24 74 36 90 30" stroke="${C.purple}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>
    <circle cx="20" cy="12" r="1.6" fill="${IK}"/><circle cx="76" cy="40" r="1.6" fill="${IK}"/>
    <path d="M0 76 C20 68 40 72 56 70 C72 68 86 72 96 74 V96 H0 Z" fill="${C.white}"/><path d="M0 76 C20 68 40 72 56 70 C72 68 86 72 96 74" fill="none" ${O}/>
    <ellipse cx="62" cy="66" rx="12" ry="16" fill="${IK}"/>
    <ellipse cx="62" cy="70" rx="7.5" ry="11" fill="${C.white}"/>
    <circle cx="65" cy="57" r="2.4" fill="${C.white}"/><circle cx="65.6" cy="57" r="1.1" fill="${IK}"/>
    <path d="M70 60 L77 62 L70 64 Z" fill="${C.orange}" ${O2} stroke-width="1.2"/>
    <path d="M56 82 h6 M64 82 h6" stroke="${C.orange}" stroke-width="3.2" stroke-linecap="round"/>`),
  globe: sv(`
    <circle cx="46" cy="50" r="30" fill="${C.sky}" ${O}/>
    <path d="M30 34 C36 28 46 30 46 38 C46 44 38 44 36 50 C34 56 26 54 24 48 C22 42 26 38 30 34 Z" fill="${C.leaf}" ${O2}/>
    <path d="M54 54 C60 50 68 54 68 62 C66 70 58 72 54 66 C50 62 50 58 54 54 Z" fill="${C.leaf}" ${O2}/>
    <path d="M56 30 c4 -2 8 0 7 4 c-3 2 -6 1 -7 -4 Z" fill="${C.leaf}" ${O2}/>
    <path d="M28 36 C32 30 38 28 44 28" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".7" stroke-linecap="round"/>
    <ellipse cx="48" cy="50" rx="44" ry="15" transform="rotate(-18 48 50)" fill="none" stroke="${IK}" stroke-width="2" stroke-dasharray="4 5"/>
    <g transform="translate(74 24) rotate(-22)"><path d="M0 0 L15 0 L19 2.5 L15 5 L0 5 Z" fill="${C.white}" ${O2}/><path d="M6 2.5 L2 11 L7 11 L11 2.5 Z" fill="${C.red}" ${O2}/><path d="M1 0 L-2 -5 L2 -5 L5 0" fill="${C.red}" ${O2}/></g>`),
  memoir: sv(`
    <path d="M8 32 V80 C22 76 38 76 48 82 C58 76 74 76 88 80 V32" fill="${C.red}" ${O}/>
    <path d="M48 30 C38 24 24 24 12 28 V74 C24 70 38 70 48 76 Z" fill="${C.white}" ${O}/>
    <path d="M48 30 C58 24 72 24 84 28 V74 C72 70 58 70 48 76 Z" fill="${C.white}" ${O}/>
    <path d="M20 38 H40 M20 46 H40 M20 54 H34 M56 46 H72 M56 54 H66" stroke="${C.gray}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M70 26 V42 L74 38 L78 42 V26" fill="${C.gold}" ${O2}/>
    <path d="M58 68 L82 44" stroke="${IK}" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M58 68 L82 44" stroke="${C.navy}" stroke-width="4" stroke-linecap="round"/>
    <path d="M58 68 L53 73" stroke="${C.gold}" stroke-width="3.5" stroke-linecap="round"/>`),

  // ── 投资 ──
  land: sv(`
    <path d="M48 36 L88 56 L48 76 L8 56 Z" fill="${C.grass}" ${O}/>
    <path d="M28 56 l2 -4 l2 4 M62 60 l2 -4 l2 4 M50 46 l2 -4 l2 4 M38 64 l2 -4 l2 4" stroke="${C.dleaf}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M48 52 V30" ${O} fill="none"/>
    <rect x="31" y="14" width="34" height="18" rx="3" fill="${C.white}" ${O2}/>
    <text x="48" y="27.5" font-size="11" text-anchor="middle" font-family="PingFang SC" font-weight="700" fill="${IK}">空地</text>
    <path d="M14 59 v-8 M24 64 v-8 M34 69 v-8 M44 74 v-8 M54 73 v-8 M64 68 v-8 M74 63 v-8 M84 58 v-8" stroke="${C.brown}" stroke-width="3" stroke-linecap="round"/>
    <path d="M14 55 L44 70 M54 69 L84 54" stroke="${C.brown}" stroke-width="2.4"/>`),
  football: sv(`
    ${shadow(44, 84, 24)}
    <circle cx="44" cy="54" r="26" fill="${C.white}" ${O}/>
    <path d="M44 44 L53 50.5 L49.5 61 L38.5 61 L35 50.5 Z" fill="${IK}"/>
    <path d="M44 44 V31 M53 50.5 L65 46 M49.5 61 L57 71 M38.5 61 L31 71 M35 50.5 L23 46" stroke="${IK}" stroke-width="2.4"/>
    <path d="M38 29 L50 29 L44 33 Z M66 52 L69 62 L64 58 Z M20 52 L24 58 L19 62 Z" fill="${IK}"/>
    <path d="M70 30 H86 V38 C86 44 82 48 78 48 C74 48 70 44 70 38 Z" fill="${C.gold}" ${O2}/>
    <path d="M70 33 C64 33 64 41 70 41 M86 33 C92 33 92 41 86 41 M78 48 V55" ${O2} fill="none"/>
    <rect x="72" y="55" width="12" height="5" rx="1" fill="${C.gold}" ${O2}/>`),
  winery: sv(`
    ${shadow(54, 88, 34)}
    <path d="M24 34 c6 -8 16 -6 18 -2 c-6 2 -12 4 -18 2 Z" fill="${C.leaf}" ${O2}/>
    ${[[22, 46], [32, 46], [17, 55], [27, 55], [37, 55], [22, 64], [32, 64], [27, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.2" fill="${C.purple}" ${O2}/>`).join('')}
    <path d="M50 22 H60 V34 C66 38 68 44 68 50 V82 C68 85 66 86 64 86 H46 C44 86 42 85 42 82 V50 C42 44 44 38 50 34 Z" fill="${C.dleaf}" ${O}/>
    <rect x="49" y="16" width="12" height="8" rx="2" fill="${C.dred}" ${O2}/>
    <rect x="45" y="56" width="20" height="16" rx="2" fill="${C.cream}" ${O2}/>
    <path d="M49 62 H61 M51 67 H59" stroke="${C.dred}" stroke-width="2"/>
    <path d="M46 44 C47 40 49 38 52 37" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".6" stroke-linecap="round"/>
    <path d="M73 52 H91 C91 62 87 68 82 68 C77 68 73 62 73 52 Z" fill="${C.white}" ${O2}/>
    <path d="M74.5 57 H89.5 C88.5 63 85.5 66 82 66 C78.5 66 75.5 63 74.5 57 Z" fill="${C.dred}"/>
    <path d="M82 68 V80 M76 81 H88" ${O2} fill="none"/>`),
  oldshop: sv(`
    ${shadow(48, 86, 38)}
    <rect x="14" y="30" width="68" height="52" fill="${C.cream}" ${O}/>
    <path d="M6 32 C14 30 20 26 24 18 H72 C76 26 82 30 90 32 Z" fill="${C.dred}" ${O}/>
    <path d="M28 22 H68" stroke="${C.gold}" stroke-width="2.4"/>
    <rect x="28" y="35" width="40" height="13" rx="2" fill="${C.navy}" ${O2}/>
    <text x="48" y="45" font-size="9.5" text-anchor="middle" font-family="PingFang SC" font-weight="700" fill="${C.gold}">老字号</text>
    <ellipse cx="20" cy="42" rx="4" ry="5" fill="${C.red}" ${O2}/><ellipse cx="76" cy="42" rx="4" ry="5" fill="${C.red}" ${O2}/>
    <rect x="20" y="56" width="14" height="12" fill="${C.sky}" ${O2}/><rect x="62" y="56" width="14" height="12" fill="${C.sky}" ${O2}/>
    <path d="M27 56 V68 M69 56 V68" stroke="${IK}" stroke-width="1.6"/>
    <rect x="40" y="56" width="16" height="26" fill="${C.brown}" ${O2}/><circle cx="52" cy="70" r="1.5" fill="${C.gold}"/>`),
  fund: sv(`
    <rect x="10" y="14" width="64" height="56" rx="6" fill="${C.white}" ${O}/>
    <path d="M18 56 H66 M18 42 H66 M18 28 H66" stroke="${C.light}" stroke-width="2"/>
    <rect x="21" y="48" width="8" height="15" fill="#DCEBFF" ${O2}/><rect x="35" y="44" width="8" height="19" fill="#DCEBFF" ${O2}/><rect x="49" y="38" width="8" height="25" fill="#DCEBFF" ${O2}/>
    <path d="M18 56 L30 48 L42 52 L54 36 L66 26" stroke="${C.mint}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M59 25 H67 V33" stroke="${C.mint}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${[0, 1, 2, 3].map((i) => `<ellipse cx="76" cy="${84 - i * 6}" rx="13" ry="5" fill="${C.gold}" ${O2}/>`).join('')}
    <ellipse cx="76" cy="66" rx="6" ry="2" fill="none" stroke="${C.dgold}" stroke-width="1.8"/>`),

  // ── 公益 ──
  foundation: sv(`
    <rect x="12" y="74" width="72" height="9" rx="1" fill="${C.light}" ${O}/>
    ${[20, 35, 51, 66].map((x) => `<rect x="${x}" y="47" width="10" height="27" fill="${C.white}" ${O2}/>`).join('')}
    <rect x="14" y="42" width="68" height="6" fill="${C.light}" ${O2}/>
    <path d="M10 42 L48 16 L86 42 Z" fill="${C.white}" ${O}/>
    <path d="M48 31 C45 26 38 27 39 32 C40 36 48 40 48 40 C48 40 56 36 57 32 C58 27 51 26 48 31 Z" fill="${C.pink}" ${O2}/>`),
  school: sv(`
    ${shadow(48, 84, 36)}
    <path d="M48 20 V5" ${O} fill="none"/><path d="M48 6 L60 9 L48 13 Z" fill="${C.red}" ${O2}/>
    <rect x="16" y="40" width="64" height="42" fill="${C.cream}" ${O}/>
    <path d="M10 42 L48 20 L86 42 Z" fill="${C.red}" ${O}/>
    <circle cx="48" cy="34" r="5" fill="${C.white}" ${O2}/><path d="M48 31 V34 H50" ${O2} fill="none" stroke-width="1.5"/>
    <rect x="22" y="50" width="14" height="12" fill="${C.sky}" ${O2}/><rect x="60" y="50" width="14" height="12" fill="${C.sky}" ${O2}/>
    <path d="M29 50 V62 M22 56 H36 M67 50 V62 M60 56 H74" stroke="${IK}" stroke-width="1.5"/>
    <path d="M41 82 V68 a7 7 0 0 1 14 0 V82 Z" fill="${C.brown}" ${O2}/>`),
  prize: sv(`
    <path d="M34 6 L44 40 L52 40 L42 6 Z" fill="${C.blue}" ${O}/>
    <path d="M62 6 L52 40 L44 40 L54 6 Z" fill="${C.red}" ${O}/>
    <circle cx="48" cy="62" r="24" fill="${C.gold}" ${O}/>
    <circle cx="48" cy="62" r="17" fill="none" stroke="${C.dgold}" stroke-width="3"/>
    <path d="M48 50 L51.5 58 L60 58.5 L53.5 64 L55.5 72.5 L48 68 L40.5 72.5 L42.5 64 L36 58.5 L44.5 58 Z" fill="${C.white}" ${O2}/>
    <path d="M32 54 C34 48 38 44 44 42" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".7" stroke-linecap="round"/>`),
  research: sv(`
    ${[[16, 44, C.pink], [30, 36, C.mint], [44, 48, C.sky]].map(([x, top, col]) => `<path d="M${x} 24 V64 a5 5 0 0 0 10 0 V24 Z" fill="${C.white}" ${O2}/><path d="M${x + 0.8} ${top} V64 a4.2 4.2 0 0 0 8.4 0 V${top} Z" fill="${col}"/><path d="M${x - 2} 24 H${x + 12}" ${O2}/>`).join('')}
    <rect x="10" y="52" width="50" height="8" rx="2" fill="${C.brown}" ${O}/>
    <path d="M70 14 C86 24 62 34 78 44 C94 54 70 64 86 74" stroke="${C.blue}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M86 14 C70 24 94 34 78 44 C62 54 86 64 70 74" stroke="${C.mint}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M73 19 H83 M72 30 H84 M72 58 H84 M73 69 H83" stroke="${IK}" stroke-width="2" stroke-linecap="round"/>`),

  // ── 健康 ──
  doctor: sv(`
    ${shadow(42, 82, 30)}
    <path d="M32 36 V28 H52 V36" ${O} fill="none"/>
    <rect x="14" y="36" width="56" height="42" rx="8" fill="${C.white}" ${O}/>
    <path d="M42 46 V68 M31 57 H53" stroke="${C.red}" stroke-width="7" stroke-linecap="round"/>
    <path d="M70 30 C88 36 88 60 76 70 C68 76 60 74 58 66" stroke="${IK}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="58" cy="64" r="6" fill="${C.gray}" ${O2}/>
    <circle cx="70" cy="29" r="2.5" fill="${IK}"/>`),
  checkup: sv(`
    <rect x="20" y="16" width="52" height="68" rx="6" fill="${C.white}" ${O}/>
    <rect x="36" y="10" width="20" height="12" rx="3" fill="${C.gray}" ${O2}/>
    <path d="M26 46 H37 L41 36 L48 58 L54 40 L58 46 H66" stroke="${C.red}" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 66 H60 M28 74 H50" stroke="${C.light}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="72" cy="76" r="11" fill="${C.mint}" ${O2}/>
    <path d="M66.5 76 L70.5 80 L78 72" stroke="${C.white}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),

  // ── 家族 ──
  trust: sv(`
    <path d="M48 8 L80 20 V46 C80 66 66 80 48 88 C30 80 16 66 16 46 V20 Z" fill="${C.purple}" ${O}/>
    <path d="M48 16 L72 25 V46 C72 61 62 72 48 79" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".35"/>
    <path d="M32 52 L48 37 L64 52 V68 H32 Z" fill="${C.white}" ${O2}/>
    <rect x="44" y="57" width="8" height="11" fill="${C.gold}" ${O2}/>
    <path d="M58 41 V35 H62 V45" fill="${C.white}" ${O2}/>`),
  insurance: sv(`
    <circle cx="28" cy="74" r="5" fill="${C.gold}" ${O2}/><circle cx="68" cy="78" r="5" fill="${C.gold}" ${O2}/><circle cx="60" cy="66" r="4" fill="${C.gold}" ${O2}/>
    <path d="M48 52 V78 C48 84 40 84 40 78" stroke="${IK}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M10 52 C10 30 28 14 48 14 C68 14 86 30 86 52 C80 48 74 48 68 52 C62 48 54 48 48 52 C42 48 34 48 28 52 C22 48 16 48 10 52 Z" fill="${C.mint}" ${O}/>
    <path d="M48 14 C38 24 30 38 28 52 M48 14 C58 24 66 38 68 52 M48 14 V52" stroke="${IK}" stroke-width="2" fill="none"/>
    <path d="M22 34 C26 26 32 22 38 20" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".7" stroke-linecap="round"/>
    <path d="M48 14 V8" ${O} fill="none"/>`),

  // ── 奇葩 ──
  milktea: sv(`
    <path d="M54 24 L64 4" stroke="${IK}" stroke-width="7.5" stroke-linecap="round"/><path d="M54 24 L64 4" stroke="${C.pink}" stroke-width="4" stroke-linecap="round"/>
    <path d="M26 30 H70 L64 86 H32 Z" fill="${C.cream}" ${O}/>
    <path d="M28 44 H68 L63.5 84 H32.5 Z" fill="#E8B887"/>
    ${[[37, 77], [45, 80], [53, 78], [60, 80], [41, 70], [56, 71], [49, 73]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.3" fill="${IK}"/>`).join('')}
    <path d="M29.6 52 H66.4 L65 64 H31 Z" fill="${C.red}" ${O2}/>
    <path d="M48 61 C45 57 40 58 41 61.5 C42 64 48 66 48 66 C48 66 54 64 55 61.5 C56 58 51 57 48 61 Z" fill="${C.white}" transform="translate(0 -3)"/>
    <path d="M26 30 H70 L64 86 H32 Z" fill="none" ${O}/>
    <path d="M22 30 C22 18 74 18 74 30 Z" fill="${C.white}" ${O}/>
    <rect x="19" y="28" width="58" height="5" rx="2.5" fill="${C.white}" ${O2}/>`),
  catpalace: sv(`
    ${shadow(48, 86, 36)}
    <path d="M48 31 V17" ${O} fill="none"/><circle cx="48" cy="15" r="3.5" fill="${C.gold}" ${O2}/>
    <rect x="18" y="46" width="60" height="38" fill="#FFE0EA" ${O}/>
    <path d="M18 46 C18 26 78 26 78 46 Z" fill="${C.pink}" ${O}/>
    <path d="M28 40 C30 34 36 30 42 29" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".7" stroke-linecap="round"/>
    <rect x="23" y="54" width="10" height="13" rx="5" fill="${C.white}" ${O2}/><rect x="63" y="54" width="10" height="13" rx="5" fill="${C.white}" ${O2}/>
    <path d="M37 84 V66 a11 11 0 0 1 22 0 V84 Z" fill="${C.purple}" ${O2}/>
    <path d="M41 72 L41 64 L46 69 Z M55 72 L55 64 L50 69 Z" fill="${C.orange}" ${O2}/>
    <circle cx="48" cy="75" r="8" fill="${C.orange}" ${O2}/>
    <circle cx="45" cy="74" r="1.3" fill="${IK}"/><circle cx="51" cy="74" r="1.3" fill="${IK}"/>
    <path d="M47 77 L48 78 L49 77" stroke="${IK}" stroke-width="1.4" fill="none"/>`),
  desertski: sv(`
    <circle cx="80" cy="18" r="8" fill="${C.gold}" ${O}/>
    <path d="M50 22 V38 M43 26 L57 34 M57 26 L43 34" stroke="${C.blue}" stroke-width="3" stroke-linecap="round"/>
    <path d="M0 72 C20 58 40 64 56 70 C72 62 86 64 96 68 V96 H0 Z" fill="${C.sand}"/><path d="M0 72 C20 58 40 64 56 70 C72 62 86 64 96 68" fill="none" ${O}/>
    <path d="M28 72 C28 48 72 48 72 72 Z" fill="#DCEBFF" ${O}/>
    <path d="M34 68 C42 56 54 54 64 62" stroke="${C.white}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M14 74 V50 a4 4 0 0 1 8 0 V74" fill="${C.leaf}" ${O2}/>
    <path d="M14 60 H10 V53" ${O2} fill="none"/>
    <path d="M10 82 q6 -4 12 0 M60 84 q6 -4 12 0" stroke="${C.dgold}" stroke-width="2" fill="none" stroke-linecap="round"/>`),
  themepark: sv(`
    <path d="M48 42 L34 86 M48 42 L62 86 M26 86 H70" stroke="${IK}" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="48" cy="42" r="28" fill="none" stroke="${IK}" stroke-width="3"/>
    <circle cx="48" cy="42" r="21" fill="none" stroke="${C.pink}" stroke-width="3"/>
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const r = (a * Math.PI) / 180; return `<path d="M48 42 L${(48 + 28 * Math.cos(r)).toFixed(1)} ${(42 + 28 * Math.sin(r)).toFixed(1)}" stroke="${IK}" stroke-width="1.6"/>`; }).join('')}
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => { const r = (a * Math.PI) / 180; const col = [C.pink, C.gold, C.sky, C.mint][i % 4]; return `<rect x="${(48 + 28 * Math.cos(r) - 5).toFixed(1)}" y="${(42 + 28 * Math.sin(r) - 3).toFixed(1)}" width="10" height="9" rx="2.5" fill="${col}" ${O2}/>`; }).join('')}
    <circle cx="48" cy="42" r="5" fill="${C.gold}" ${O2}/>`),
  // ── 场景插画（300×170）与发家史小图 ──
  garageScene: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="150" cy="156" rx="140" ry="6" fill="${IK}" opacity=".1"/>
    <circle cx="268" cy="26" r="12" fill="${C.gold}" ${O}/>
    <path d="M270 120 V150" stroke="${C.brown}" stroke-width="7" stroke-linecap="round"/>
    <circle cx="270" cy="102" r="24" fill="${C.leaf}" ${O}/><path d="M258 96 a10 10 0 0 1 12 -10" stroke="${C.white}" stroke-width="3" fill="none" opacity=".6" stroke-linecap="round"/>
    <path d="M30 150 V72 L95 36 L160 72 V150 Z" fill="#FFE2CC" ${O}/>
    <path d="M22 76 L95 30 L168 76" stroke="${IK}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 76 L95 30 L168 76" stroke="${C.red}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="50" y="86" width="90" height="64" fill="${IK}"/>
    <rect x="54" y="106" width="82" height="44" fill="#FFD27A"/>
    <rect x="62" y="130" width="54" height="6" fill="${C.brown}" ${O2}/>
    <path d="M66 136 V150 M112 136 V150" ${O2}/>
    <path d="M72 130 L76 118 H96 L100 130 Z" fill="${C.slate}" ${O2}/><path d="M79 121 H93 V127 H78 Z" fill="${C.sky}"/>
    <rect x="48" y="84" width="94" height="22" rx="2" fill="${C.light}" ${O}/>
    <path d="M50 91 H140 M50 98 H140" stroke="${C.gray}" stroke-width="2"/>
    <circle cx="95" cy="60" r="7" fill="${C.gold}" ${O2}/>
    <path d="M196 64 a14 14 0 1 1 20 0 c-3 3 -4 6 -4 9 h-12 c0 -3 -1 -6 -4 -9 Z" fill="#FFF3B0" ${O}/>
    <rect x="200" y="73" width="12" height="7" rx="2" fill="${C.gray}" ${O2}/>
    <path d="M206 30 V24 M184 40 l-5 -4 M228 40 l5 -4 M180 58 h-6 M232 58 h6" stroke="${C.gold}" stroke-width="3" stroke-linecap="round"/>
    <path d="M0 150 H300" stroke="${IK}" stroke-width="3"/>
  </svg>`,
  metroScene: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="150" cy="156" rx="140" ry="6" fill="${IK}" opacity=".1"/>
    <rect x="186" y="38" width="10" height="112" fill="${C.gold}" ${O}/>
    <path d="M186 50 L196 62 M186 74 L196 86 M186 98 L196 110 M186 122 L196 134" stroke="${IK}" stroke-width="2"/>
    <rect x="150" y="32" width="120" height="10" fill="${C.gold}" ${O}/>
    <rect x="152" y="42" width="22" height="16" fill="${C.slate}" ${O2}/>
    <path d="M250 42 V82" stroke="${IK}" stroke-width="2.4"/>
    <rect x="242" y="82" width="16" height="12" rx="2" fill="${C.orange}" ${O2}/>
    <path d="M24 98 H136 L126 84 H34 Z" fill="${C.red}" ${O}/>
    <rect x="58" y="60" width="44" height="22" rx="4" fill="${C.white}" ${O2}/>
    <text x="80" y="76" font-size="14" text-anchor="middle" font-family="PingFang SC" font-weight="800" fill="${C.dred}">地铁</text>
    <path d="M34 98 V150 M126 98 V150" ${O}/>
    <path d="M42 150 V112 H118 V150 Z" fill="${C.slate}" ${O}/>
    <path d="M42 122 H118 M42 132 H118 M42 142 H118" stroke="${C.gray}" stroke-width="3"/>
    <path d="M226 150 V132 M262 150 V136" stroke="${C.brown}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="226" cy="120" r="16" fill="${C.leaf}" ${O}/><circle cx="262" cy="124" r="14" fill="${C.mint}" ${O}/>
    <rect x="236" y="140" width="22" height="5" rx="2" fill="${C.brown}" ${O2}/>
    <circle cx="150" cy="70" r="11" fill="${C.gold}" ${O}/><rect x="146" y="66" width="8" height="8" fill="${C.white}" ${O2} stroke-width="1.6"/>
    <path d="M140 54 l-4 -4 M162 54 l4 -4 M150 50 v-6" stroke="${C.gold}" stroke-width="3" stroke-linecap="round"/>
    <path d="M0 150 H300" stroke="${IK}" stroke-width="3"/>
  </svg>`,
  story1: sv(`
    <rect x="12" y="14" width="72" height="50" rx="5" fill="${C.navy}" ${O}/>
    <rect x="18" y="20" width="60" height="38" rx="2" fill="${C.sky}"/>
    <path d="M28 30 l-5 5 5 5 M68 30 l5 5 -5 5" stroke="${C.white}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34 32 H58 M34 39 H62 M34 46 H50" stroke="${C.navy}" stroke-width="3" stroke-linecap="round"/>
    <path d="M40 64 L36 76 H60 L56 64" fill="${C.gray}" ${O}/>
    <rect x="16" y="80" width="64" height="8" rx="3" fill="${C.light}" ${O2}/>`),
  story2: sv(`
    <path d="M10 82 V40 L48 18 L86 40 V82 Z" fill="#FFE2CC" ${O}/>
    <path d="M6 42 L48 16 L90 42" stroke="${C.red}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="24" y="48" width="48" height="34" fill="${IK}"/>
    <rect x="27" y="60" width="42" height="22" fill="#FFD27A"/>
    <rect x="23" y="47" width="50" height="13" rx="2" fill="${C.light}" ${O2}/>
    <path d="M36 82 V72 M60 82 V72" stroke="${C.slate}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="36" cy="68" r="4" fill="${C.slate}"/><circle cx="60" cy="68" r="4" fill="${C.slate}"/>
    <circle cx="48" cy="34" r="4.5" fill="${C.gold}" ${O2}/>`),
  story3: sv(`
    <rect x="10" y="22" width="76" height="62" rx="4" fill="${C.cream}" ${O}/>
    <rect x="18" y="34" width="24" height="50" rx="2" fill="${C.brown}" ${O2}/>
    <circle cx="37" cy="60" r="2.2" fill="${C.gold}"/>
    <rect x="52" y="34" width="26" height="26" fill="${C.sky}" ${O2}/>
    <path d="M65 34 V60 M52 47 H78" stroke="${IK}" stroke-width="2"/>
    <path d="M52 34 C56 40 56 52 52 60" fill="${C.pink}" ${O2}/>
    <path d="M58 70 a10 10 0 0 1 20 0" fill="${C.gold}" ${O2}/>
    <path d="M68 62 v-4 M58 66 l-3 -3 M78 66 l3 -3" stroke="${C.orange}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M6 22 H90" stroke="${IK}" stroke-width="4" stroke-linecap="round"/>`),
  story4: sv(`
    ${shadow(48, 88, 26)}
    <path d="M26 14 H70 V34 C70 50 60 60 48 60 C36 60 26 50 26 34 Z" fill="${C.gold}" ${O}/>
    <path d="M26 20 C12 20 12 40 28 42 M70 20 C84 20 84 40 68 42" ${O} fill="none"/>
    <text x="48" y="44" font-size="22" text-anchor="middle" font-family="Songti SC" font-weight="900" fill="${IK}">1</text>
    <path d="M34 22 C36 18 40 16 44 16" stroke="${C.white}" stroke-width="3" fill="none" opacity=".7" stroke-linecap="round"/>
    <path d="M48 60 V70" ${O}/>
    <rect x="32" y="70" width="32" height="12" rx="3" fill="${C.dgold}" ${O}/>`),

};

document.querySelectorAll('[data-item]').forEach((el) => { el.innerHTML = ITEMS[el.dataset.item] || ''; });
