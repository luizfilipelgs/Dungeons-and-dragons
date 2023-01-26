import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _P1: Fighter;
  private _P2: Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this._P1 = p1;
    this._P2 = p2;
  }

  fight(): number {
    while (this._P1.lifePoints > 0 && this._P2.lifePoints > 0) {
      this.player.attack(this._P2);
      this._P2.attack(this.player);
    }

    return super.fight();
  }
}