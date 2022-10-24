// Import
import Entite from '../constructor/init_entite';

// Tableau pour le style des logs
const style = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

// Function log personnalisable
const logColor = (msg: string, extra: string) => {
  console.log(`${extra}${msg}\x1b[0m`);
};

// Function qui affiche les barre de vie
const lifeBar = (player: Entite, enemie: Entite) => {
  // Evite d'afficher un nombre negatif
  if (player.hp <= 0) {
    player.hp = 0;
  }
  if (enemie.hp <= 0) {
    enemie.hp = 0;
  }
  logColor(player.name, style.FgRed);
  console.log(`HP : ${'⬜'.repeat(player.hp)}${'⬛'.repeat(player.max_hp - player.hp)} ${player.hp}\\${player.max_hp} \n`);
  logColor(enemie.name, style.FgGreen);
  console.log(`HP : ${'⬜'.repeat(enemie.hp)}${'⬛'.repeat(enemie.max_hp - enemie.hp)} ${enemie.hp}\\${enemie.max_hp} \n`);
};

// Export
export {
  lifeBar, style, logColor,
};
