// Require
const fs = require('fs');

// Interface Entité
interface Entite {
  id: number;
  name: string;
  hp: number;
  max_hp: number;
  str: number;
  rarity: number
}

// Appelle des Json
const allHeros : Entite[] = JSON.parse(fs.readFileSync('../json/players.json', 'utf-8'));
const allMobs : Entite[] = JSON.parse(fs.readFileSync('../json/enemies.json', 'utf-8'));
const allBoss : Entite[] = JSON.parse(fs.readFileSync('../json/bosses.json', 'utf-8'));

// ajout d'un nouvelle valeur dans chaque Json hp_max
for (const element of allHeros) {
  element.max_hp = element.hp;
}
for (const element of allMobs) {
  element.max_hp = element.hp;
}
for (const element of allBoss) {
  element.max_hp = element.hp;
}

// console.log(allMobs);
export {
  allHeros, allMobs, allBoss, Entite,
};
