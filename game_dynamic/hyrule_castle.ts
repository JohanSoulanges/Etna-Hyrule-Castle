// Import
import stage from './stage/stage';
import {
  allBoss, allHeros, allMobs, Entite,
} from './constructor/init_entite';
import newChosen from './constructor/select_entite';

// Initialisation de Entité pour le jeux
const player: Entite = newChosen(allHeros);
const enemis: Entite = newChosen(allMobs);
const boss: Entite = newChosen(allBoss);

// Creation du tableau d'enemies

const enemiss: Entite[] = [enemis, boss];

// Initialisation des stages
stage(9, player, enemiss);
