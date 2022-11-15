"use strict";
exports.__esModule = true;
// Import
var stage_1 = require("./stage/stage");
var init_entite_1 = require("./constructor/init_entite");
var select_entite_1 = require("./constructor/select_entite");
// Initialisation de Entité pour le jeux
var player = (0, select_entite_1["default"])(init_entite_1.allHeros);
var enemis = (0, select_entite_1["default"])(init_entite_1.allMobs);
var boss = (0, select_entite_1["default"])(init_entite_1.allBoss);
// Creation du tableau d'enemies
var enemiss = [enemis, boss];
// Initialisation des stages
(0, stage_1["default"])(9, player, enemiss);
