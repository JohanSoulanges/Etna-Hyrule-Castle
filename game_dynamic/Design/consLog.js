"use strict";
exports.__esModule = true;
exports.logColor = exports.style = exports.lifeBar = void 0;
// Tableau pour le style des logs
var style = {
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
    BgWhite: '\x1b[47m'
};
exports.style = style;
// Function log personnalisable
var logColor = function (msg, extra) {
    console.log("".concat(extra).concat(msg, "\u001B[0m"));
};
exports.logColor = logColor;
// Function qui affiche les barre de vie
var lifeBar = function (player, enemie) {
    // Evite d'afficher un nombre negatif
    if (player.hp <= 0) {
        player.hp = 0;
    }
    if (enemie.hp <= 0) {
        enemie.hp = 0;
    }
    logColor(player.name, style.FgGreen);
    console.log("HP : ".concat('⬜'.repeat(player.hp)).concat('⬛'.repeat(player.max_hp - player.hp), " ").concat(player.hp, "\\").concat(player.max_hp, " \n"));
    logColor(enemie.name, style.FgRed);
    console.log("HP : ".concat('⬜'.repeat(enemie.hp)).concat('⬛'.repeat(enemie.max_hp - enemie.hp), " ").concat(enemie.hp, "\\").concat(enemie.max_hp, " \n"));
};
exports.lifeBar = lifeBar;
