// Import
import { Entite } from '../constructor/init_entite';

// Function de la mecanique d'attaque
const attack = (attacker: Entite, defender: Entite) => {
  defender.hp -= attacker.str;
};

// Function de la mecanique de heal
const heal = (target: Entite) => {
  target.hp += (target.max_hp / 2);
  if (target.hp > target.max_hp) {
    target.hp = target.max_hp;
  }
};

// Export
export { attack, heal };
