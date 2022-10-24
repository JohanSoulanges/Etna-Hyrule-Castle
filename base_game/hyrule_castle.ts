// Import
import Entite from './constructor/init_entite';
import stage from './stage/stage';

// Initialisation de Entité pour le jeux
const player: Entite = new Entite(1, 'hero');
const enemis: Entite = new Entite(2, 'mob');
const boss: Entite = new Entite(3, 'boss');

// Creation du tableau d'enemies
const enemiss: Entite[] = [enemis, boss];

// Initialisation des stages
stage(9, player, enemiss);
