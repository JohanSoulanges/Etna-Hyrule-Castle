"use strict";
exports.__esModule = true;
var combat_1 = require("../combat/combat");
var init_entite_1 = require("../constructor/init_entite");
var select_entite_1 = require("../constructor/select_entite");
var dialogue_1 = require("../dialogue/dialogue");
var stage = function (tour, player, enemis) {
    var nb = 0;
    // boucle de stage
    for (var i = 0; i < tour + 1; i += 1) {
        if (player.hp > 0) {
            if (i === 0) {
                console.log('=== Bienvenue dans le château d\'Hyrule ===\n');
            }
            (0, dialogue_1.affStage)(i + 1);
            if (i === 0) {
                (0, dialogue_1.affRencFirst)(enemis[nb].name);
            }
            else if (i === tour) {
                (0, dialogue_1.affRenBoss)(enemis[1].name);
            }
            // Initialise un nouvelle enemie
            if (enemis[nb].hp <= 0) {
                enemis[0] = (0, select_entite_1["default"])(init_entite_1.allMobs);
                if (i === tour) {
                    nb = 1;
                }
            }
            if (nb === 0 && i !== 0) {
                (0, dialogue_1.affRencNew)(enemis[nb].name);
            }
            console.log("=== Fight ".concat(i + 1, " ====\n"));
            (0, combat_1["default"])(player, enemis[nb]);
            if (enemis[1].hp <= 0 && player.hp >= 0) {
                (0, dialogue_1.victoire)();
            }
        }
    }
};
exports["default"] = stage;
