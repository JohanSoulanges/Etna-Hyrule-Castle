"use strict";
exports.__esModule = true;
exports.tourNeutre = exports.tourHeal = exports.tourAttack = void 0;
var global_action_1 = require("./global_action");
var tourAttack = function (player, enemie) {
    (0, global_action_1.attack)(player, enemie);
    if (enemie.hp > 0) {
        (0, global_action_1.attack)(enemie, player);
        console.log("\n".concat(enemie.name, " vous attaque et vous inflige ").concat(enemie.str, " dommage\n"));
    }
    console.log("\nVous avez attaquer le ".concat(enemie.name, " et vous lui infliger ").concat(player.str, " dommage\n"));
};
exports.tourAttack = tourAttack;
var tourHeal = function (player, enemie) {
    (0, global_action_1.heal)(player);
    (0, global_action_1.attack)(enemie, player);
    console.log("\nVous vous Heal de ".concat(player.max_hp / 2, " hp\n"));
    console.log("\n".concat(enemie.name, " vous attaque et vous inflige ").concat(enemie.str, " dommage\n"));
};
exports.tourHeal = tourHeal;
var tourNeutre = function (player, enemie) {
    (0, global_action_1.attack)(enemie, player);
    console.log("\n".concat(enemie.name, " vous attaque et vous inflige ").concat(enemie.str, " dommage, contre attaquer!!!\n"));
};
exports.tourNeutre = tourNeutre;
