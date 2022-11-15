"use strict";
exports.__esModule = true;
// Import
var init_entite_1 = require("./constructor/init_entite");
var stage_1 = require("./stage/stage");
// Initialisation de Entité pour le jeux
var player = new init_entite_1["default"](1, 'hero');
var enemis = new init_entite_1["default"](2, 'mob');
var boss = new init_entite_1["default"](3, 'boss');
// Creation du tableau d'enemies
var enemiss = [enemis, boss];
// Initialisation des stages
(0, stage_1["default"])(9, player, enemiss);
