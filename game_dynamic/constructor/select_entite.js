"use strict";
exports.__esModule = true;
var newChosen = function (groupe) {
    var cal = Math.floor(99 * Math.random());
    var rar = 0;
    // Selectionne un rarity en fonction des pourcetages
    switch (true) {
        case cal >= 0 && cal <= 49:
            rar = 1;
            break;
        case cal >= 50 && cal <= 79:
            rar = 2;
            break;
        case cal >= 80 && cal <= 94:
            rar = 3;
            break;
        case cal >= 95 && cal <= 98:
            rar = 4;
            break;
        default:
            rar = 5;
            break;
    }
    // Ajoute tous les entité de la rarity selectionné dans un tableau
    var arrayChosen = [];
    for (var _i = 0, groupe_1 = groupe; _i < groupe_1.length; _i++) {
        var element = groupe_1[_i];
        if (element.rarity === rar) {
            arrayChosen.push(element);
        }
    }
    // Selectionne un entité
    var chosen = arrayChosen[Math.floor(arrayChosen.length * Math.random())];
    // reinitialise les hp de l'entité
    chosen.hp = chosen.max_hp;
    return chosen;
};
exports["default"] = newChosen;
