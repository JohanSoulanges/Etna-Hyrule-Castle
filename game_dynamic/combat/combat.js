"use strict";
exports.__esModule = true;
// Import
// import { attack, heal } from '../action/global_action';
var tour_action_1 = require("../action/tour_action");
var consLog_1 = require("../Design/consLog");
// Require
var readline = require('readline-sync');
// Intalisation d'un combat
var combats = function (player, enemis) {
    // Array d'action réalisable
    var action = ['attack', 'heal'];
    // Boucle de combat
    while (enemis.hp > 0 && player.hp > 0) {
        (0, consLog_1.lifeBar)(player, enemis);
        console.log('------- Option ---------');
        // Demande d'action du joueur
        var answer = readline.keyInSelect(action, 'Do you want to attack or heal ?\n');
        if (action[answer] === 'attack') {
            (0, tour_action_1.tourAttack)(player, enemis);
        }
        else if (action[answer] === 'heal') {
            (0, tour_action_1.tourHeal)(player, enemis);
        }
        else if (action[answer] === undefined) {
            (0, tour_action_1.tourNeutre)(player, enemis);
        }
        // Affichage du resultat du combats
        if (enemis.hp <= 0) {
            (0, consLog_1.lifeBar)(player, enemis);
            console.log("=== Vous avez battu ".concat(enemis.name, " ===\n"));
            // pris en compte de la possibilité d'une égalité
            if (player.hp <= 0) {
                console.log('=== vous avez perdu ===');
                process.exit();
            }
            readline.question('=== appuyer sur un enter pour continue === ');
            // Affichage de la mort du player
        }
        else if (player.hp <= 0) {
            (0, consLog_1.lifeBar)(player, enemis);
            console.log('=== vous avez perdu ===');
        }
    }
};
// Export
exports["default"] = combats;
