import combats from '../combat/combat';
import Entite from '../constructor/init_entite';
import {
  affRenBoss, affRencFirst, affRencNew, affStage,
} from '../dialogue/dialogue';

const stage = (tour: number, player: Entite, enemis: Entite[]) => {
  let nb: number = 0;

  for (let i = 0; i < tour + 1; i += 1) {
    if (player.hp > 0) {
      if (i === tour) {
        nb = 1;
      } else if (i === 0) {
        console.log('=== Bienvenue dans le château d\'Hyrule ===\n');
      }
      affStage(i + 1);
      if (i === 0) {
        affRencFirst(enemis[nb].name);
      } else if (i === tour) {
        affRenBoss(enemis[1].name);
      } else {
        affRencNew(enemis[nb].name);
      }
      console.log(`=== Fight ${i + 1} ====\n`);
      if (enemis[nb].hp <= 0) {
        enemis[nb].hp = enemis[nb].max_hp;
      }
      combats(player, enemis[nb]);
      if (enemis[1].hp <= 0 && player.hp > 0) {
        console.log('CONGRATULATION!');
      }
    }
  }
};

export default stage;
