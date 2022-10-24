import { Entite } from '../constructor/init_entite';
import { attack, heal } from './global_action';

const tourAttack = (player: Entite, enemie: Entite) => {
  attack(player, enemie);
  // empeche l'enemie d'attaquer si il meurt de l'attaque du player
  if (enemie.hp > 0) {
    attack(enemie, player);
    console.log(`\n${enemie.name} vous attaque et vous inflige ${enemie.str} dommage\n`);
  }
  console.log(`\nVous avez attaquer le ${enemie.name} et vous lui infliger ${player.str} dommage\n`);
};

const tourHeal = (player: Entite, enemie: Entite) => {
  heal(player);
  attack(enemie, player);
  console.log(`\nVous vous Heal de ${player.max_hp / 2} hp\n`);
  console.log(`\n${enemie.name} vous attaque et vous inflige ${enemie.str} dommage\n`);
};

const tourNeutre = (player: Entite, enemie: Entite) => {
  attack(enemie, player);
  console.log(`\n${enemie.name} vous attaque et vous inflige ${enemie.str} dommage, contre attaquer!!!\n`);
};

export { tourAttack, tourHeal, tourNeutre };
