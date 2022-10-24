// Interface Entité
interface Entite {
  id: number;
  name: string;
  hp: number;
  max_hp: number;
  str: number;
}

// Class Entité
// Initialise une Entité en fonction du nom donner
class Entite {
  constructor(nb: number, name: string) {
    this.id = nb;
    if (name === 'hero') {
      this.name = 'Link';
      this.hp = 60;
      this.max_hp = 60;
      this.str = 15;
    }
    if (name === 'mob') {
      this.name = 'Bokoblin';
      this.hp = 30;
      this.max_hp = 30;
      this.str = 5;
    }
    if (name === 'boss') {
      this.name = 'Ganon';
      this.hp = 150;
      this.max_hp = 150;
      this.str = 20;
    }
  }
}

export default Entite;
