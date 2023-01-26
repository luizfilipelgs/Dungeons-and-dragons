import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this.name;
  }

  public get special(): number {
    return this.special;
  }

  public get cost(): number {
    return this.cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}