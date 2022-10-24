const affStage = (num : number) => {
  console.log(`=== Vous s'etes actuellement au stage numero ${num} ====\n`);
};

const affRencFirst = (name: string) => {
  console.log('=== Votre faite face a un enemie ===\n');
  console.log(`=== Vous rencontré ${name} ===\n`);
};

const affRencNew = (name : string) => {
  console.log('=== Votre faite face a un nouvelle enemie ===\n');
  console.log(`=== Vous rencontré ${name} ===\n`);
};

const affRenBoss = (name: string) => {
  console.log('=== Votre faite face au Boss ===\n');
  console.log(`=== Vous rencontré ${name} ===\n`);
};

const victoire = () => {
  console.log('CONGRATULATION!');
};

export {
  affStage, affRencFirst, affRencNew, victoire, affRenBoss,
};
