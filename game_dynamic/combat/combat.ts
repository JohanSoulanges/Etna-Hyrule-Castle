// Import
// import { attack, heal } from '../action/global_action';
import { tourAttack, tourHeal, tourNeutre } from '../action/tour_action';
import { Entite } from '../constructor/init_entite';
import { lifeBar } from '../Design/consLog';
// Require
const readline = require('readline-sync');

// Intalisation d'un combat
const combats = (player: Entite, enemis: Entite) => {
  // Array d'action réalisable
  const action: string[] = ['attack', 'heal'];

  // Boucle de combat
  while (enemis.hp > 0 && player.hp > 0) {
    lifeBar(player, enemis);
    console.log('------- Option ---------');
    // Demande d'action du joueur
    const answer = readline.keyInSelect(action, 'Do you want to attack or heal ?\n');
    if (action[answer] === 'attack') {
      tourAttack(player, enemis);
    } else if (action[answer] === 'heal') {
      tourHeal(player, enemis);
    } else if (action[answer] === undefined) {
      tourNeutre(player, enemis);
    }

    // Affichage du resultat du combats
    if (enemis.hp <= 0) {
      lifeBar(player, enemis);
      console.log(`=== Vous avez battu ${enemis.name} ===\n`);
      // pris en compte de la possibilité d'une égalité
      if (player.hp <= 0) {
        console.log('=== vous avez perdu ===');
        process.exit();
      }
      readline.question('=== appuyer sur un enter pour continue === ');
      // Affichage de la mort du player
    } else if (player.hp <= 0) {
      lifeBar(player, enemis);
      console.log('=== vous avez perdu ===');
    }
  }
};

// Export
export default combats;
