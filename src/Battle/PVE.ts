import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  protected _enemy: (Monster | SimpleFighter)[];
  
  constructor(protected player: Fighter, enemy: (Monster | SimpleFighter)[]) { 
    super(player);
    this._enemy = enemy;
  }

  get enemy(): (Monster | SimpleFighter)[] {
    return this._enemy;
  }

  private fightEnemy(enemy: Monster | SimpleFighter): void {
    while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
      this.player.attack(enemy);
      if (enemy.lifePoints > 0) {
        enemy.attack(this.player);
      }
    }
  }

  fight(): number {
    this._enemy.forEach(enemy => this.fightEnemy(enemy));
    return this.player.lifePoints > 0 ? 1 : -1;
  }
}

export default PVE;