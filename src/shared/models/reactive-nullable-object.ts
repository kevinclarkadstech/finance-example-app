import { ReactiveBase } from "./reactive-base";

export class ReactiveNullableObject<
  T extends Record<string, any>
> extends ReactiveBase {
  protected _value: T | null;

  constructor(input: T | (() => T) | null) {
    super();
    this._value = input instanceof Function ? input() : input;
  }

  public get value(): Readonly<T> | null {
    return this._value;
  }

  public set(newValue: T | null) {
    this._value = newValue;
    this.publish(); // Notify subscribers
  }

  /**
   * Updates a specific path in the object with a new value.
   * If the current value is null, it logs a warning.
   * @param path The key of the object to update.
   * @param value The new value to set at the specified path.
   */
  public updateAtPath<K extends keyof T>(path: K, value: T[K]) {
    if (this._value === null) {
      console.warn("Cannot update a null value");
    } else {
      console.log(`Updating path ${String(path)} with value`, value);
      this._value[path] = value;
      this._value = { ...this._value } as T; // Create a new object reference
      this.publish();
    }
  }

  /**
   * Updates the object with a new value or partial value.
   * If the current value is null, it logs a warning.
   * @param value The new value or partial value to update.
   */
  public update(value: T | Partial<T>) {
    if (this._value === null) {
      console.warn("Cannot update a null value");
    } else {
      console.log("got update request");
      this._value = { ...this.value, ...value } as T;
      this.publish();
    }
  }
}
