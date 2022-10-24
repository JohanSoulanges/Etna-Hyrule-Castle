import combats from '../combat/combat';
import { allMobs, Entite } from '../constructor/init_entite';
import newChosen from '../constructor/select_entite';
import {
  affRenBoss, affRencFirst, affRencNew, affStage, victoire,
} from '../dialogue/dialogue';

const stage = (tour: number, player: Entite, enemis: Entite[]) => {
  let nb: number = 0;
  // boucle de stage
  for (let i = 0; i < tour + 1; i += 1) {
    if (player.hp > 0) {
      if (i === 0) {
        console.log('=== Bienvenue dans le château d\'Hyrule ===\n');
      }
      affStage(i + 1);
      if (i === 0) {
        affRencFirst(enemis[nb].name);
      } else if (i === tour) {
        affRenBoss(enemis[1].name);
      }
      // Initialise un nouvelle enemie
      if (enemis[nb].hp <= 0) {
        enemis[0] = newChosen(allMobs);
        if (i === tour) {
          nb = 1;
        }
      }
      if (nb === 0 && i !== 0) {
        affRencNew(enemis[nb].name);
      }
      console.log(`=== Fight ${i + 1} ====\n`);
      combats(player, enemis[nb]);
      if (enemis[1].hp <= 0 && player.hp >= 0) {
        victoire();
      }
    }
  }
};

export default stage;
