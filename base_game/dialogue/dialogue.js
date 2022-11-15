"use strict";
exports.__esModule = true;
exports.affRenBoss = exports.victoire = exports.affRencNew = exports.affRencFirst = exports.affStage = void 0;
var affStage = function (num) {
    console.log("=== Vous s'etes actuellement au stage numero ".concat(num, " ====\n"));
};
exports.affStage = affStage;
var affRencFirst = function (name) {
    console.log('=== Votre faite face a un enemie ===\n');
    console.log("=== Vous rencontr\u00E9 ".concat(name, " ===\n"));
};
exports.affRencFirst = affRencFirst;
var affRencNew = function (name) {
    console.log('=== Votre faite face a un nouvelle enemie ===\n');
    console.log("=== Vous rencontr\u00E9 ".concat(name, " ===\n"));
};
exports.affRencNew = affRencNew;
var affRenBoss = function (name) {
    console.log('=== Votre faite face au Boss ===\n');
    console.log("=== Vous rencontr\u00E9 ".concat(name, " ===\n"));
};
exports.affRenBoss = affRenBoss;
var victoire = function () {
    console.log('CONGRATULATION!');
};
exports.victoire = victoire;
