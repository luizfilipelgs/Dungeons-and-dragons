import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  public get energyType(): EnergyType { return this._energyType; }
}