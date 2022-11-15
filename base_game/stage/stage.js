"use strict";
exports.__esModule = true;
var combat_1 = require("../combat/combat");
var dialogue_1 = require("../dialogue/dialogue");
var stage = function (tour, player, enemis) {
    var nb = 0;
    for (var i = 0; i < tour + 1; i += 1) {
        if (player.hp > 0) {
            if (i === tour) {
                nb = 1;
            }
            else if (i === 0) {
                console.log('=== Bienvenue dans le château d\'Hyrule ===\n');
            }
            (0, dialogue_1.affStage)(i + 1);
            if (i === 0) {
                (0, dialogue_1.affRencFirst)(enemis[nb].name);
            }
            else if (i === tour) {
                (0, dialogue_1.affRenBoss)(enemis[1].name);
            }
            else {
                (0, dialogue_1.affRencNew)(enemis[nb].name);
            }
            console.log("=== Fight ".concat(i + 1, " ====\n"));
            if (enemis[nb].hp <= 0) {
                enemis[nb].hp = enemis[nb].max_hp;
            }
            (0, combat_1["default"])(player, enemis[nb]);
            if (enemis[1].hp <= 0 && player.hp > 0) {
                console.log('CONGRATULATION!');
            }
        }
    }
};
exports["default"] = stage;
