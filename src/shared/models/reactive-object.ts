import { ReactiveBase } from "./reactive-base";

export class ReactiveObject<
  T extends Record<string, any>
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

  public updateAtPath<K extends keyof T>(path: K, value: T[K]) {
    if (this.value) {
      console.log(`Updating path ${String(path)} with value`, value);
      this._value[path] = value;
      this._value = { ...this.value } as T; // Create a new object reference
      this.publish();
    }
  }

  public update(value: T | Partial<T>) {
    console.log("got update request");
    this._value = { ...this.value, ...value } as T;
    this.publish();
  }
}
