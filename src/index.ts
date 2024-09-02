import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

console.log(Character);
const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

console.log(player1);
console.log(player2);
console.log(player3);

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

console.log(monster1);
console.log(monster2);

const pvp = new PVP(player2, player3);
console.log(pvp);

const pve = new PVE(player1, [monster1, monster2]);
console.log(pve);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pve, pvp, runBattles };