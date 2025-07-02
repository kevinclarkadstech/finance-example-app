import { ReactiveBase } from "./reactive-base";

export class ReactivePrimitiveArray<
  T extends number | boolean | string
> extends ReactiveBase {
  protected _value: T[];

  public constructor(input: T[] | (() => T[]) = []) {
    super();
    this._value = Array.isArray(input) ? input : input();
  }

  public get value(): Readonly<T[]> {
    return this._value;
  }

  public set(newValue: T[]) {
    this._value = newValue;
    this.publish(); // Notify subscribers
  }
}
