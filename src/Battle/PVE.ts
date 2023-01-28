import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _P1: Fighter;
  private _monster: SimpleFighter[];

  constructor(p1: Fighter, monster: SimpleFighter[]) {
    super(p1);
    this._P1 = p1;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((e) => {
      while (this._P1.lifePoints > 0 && e.lifePoints > 0) {
        this._P1.attack(e);
        e.attack(this._P1);
      }
    });
    return super.fight();
  }
}