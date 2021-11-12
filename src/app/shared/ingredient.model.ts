/* export class Ingredient {
  public name: string;
  public amount: number;
  public units: string

  constructor(name: string, amount: number, units: string) {
    this.name = name;
    this.amount = amount;
    this.units = units;
  }
} */

export class Ingredient {
  constructor(public name: string, public amount: number, public units: string) {}
}
