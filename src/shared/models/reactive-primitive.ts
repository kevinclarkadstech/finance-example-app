import { ReactiveBase } from "./reactive-base";

export class ReactivePrimitive<
  T extends string | number | boolean
> extends ReactiveBase {
  protected _value: T;
  constructor(input: T | (() => T)) {
    super();
    this._value = input instanceof Function ? input() : input;
  }

  public get value(): Readonly<T> {
    return this._value;
  }

  public set(newValue: T) {
    this._value = newValue;
    this.publish(); // Notify subscribers
  }
}
