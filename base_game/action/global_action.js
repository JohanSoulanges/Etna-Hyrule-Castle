"use strict";
exports.__esModule = true;
exports.heal = exports.attack = void 0;
// Function de la mecanique d'attaque
var attack = function (attacker, defender) {
    defender.hp -= attacker.str;
};
exports.attack = attack;
// Function de la mecanique de heal
var heal = function (target) {
    target.hp += (target.max_hp / 2);
    if (target.hp > target.max_hp) {
        target.hp = target.max_hp;
    }
};
exports.heal = heal;
