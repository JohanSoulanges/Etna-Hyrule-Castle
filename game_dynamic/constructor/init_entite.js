"use strict";
exports.__esModule = true;
exports.allBoss = exports.allMobs = exports.allHeros = void 0;
// Require
var fs = require('fs');
// Appelle des Json
var allHeros = JSON.parse(fs.readFileSync('/home/damiot/Examen/19_22Octobre/game_dynamic/json/players.json', 'utf-8'));
exports.allHeros = allHeros;
var allMobs = JSON.parse(fs.readFileSync('/home/damiot/Examen/19_22Octobre/game_dynamic/json/enemies.json', 'utf-8'));
exports.allMobs = allMobs;
var allBoss = JSON.parse(fs.readFileSync('/home/damiot/Examen/19_22Octobre/game_dynamic/json/bosses.json', 'utf-8'));
exports.allBoss = allBoss;
// ajout d'un nouvelle valeur dans chaque Json hp_max
for (var _i = 0, allHeros_1 = allHeros; _i < allHeros_1.length; _i++) {
    var element = allHeros_1[_i];
    element.max_hp = element.hp;
}
for (var _a = 0, allMobs_1 = allMobs; _a < allMobs_1.length; _a++) {
    var element = allMobs_1[_a];
    element.max_hp = element.hp;
}
for (var _b = 0, allBoss_1 = allBoss; _b < allBoss_1.length; _b++) {
    var element = allBoss_1[_b];
    element.max_hp = element.hp;
}
