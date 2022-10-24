import { Entite } from './init_entite';

const newChosen = (groupe: Entite[]) => {
  const cal = Math.floor(99 * Math.random());
  let rar = 0;
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
  const arrayChosen: Entite[] = [] as Entite[];
  for (const element of groupe) {
    if (element.rarity === rar) {
      arrayChosen.push(element);
    }
  }
  // Selectionne un entité
  const chosen : Entite = arrayChosen[Math.floor(arrayChosen.length * Math.random())];
  // reinitialise les hp de l'entité
  chosen.hp = chosen.max_hp;
  return chosen;
};
export default newChosen;
