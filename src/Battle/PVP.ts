import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

export default class PVP extends Battle {
  private player1: Fighter;
  private player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      if (this.player2.lifePoints > 0) {
        this.player2.attack(this.player1);
      }
    }
    return super.fight();
  }
}