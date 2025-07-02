import { ReactiveBase } from "./reactive-base";

export class ReactiveObjectArray<
  T extends Record<string, any>
> extends ReactiveBase {
  protected _value: T[];

  constructor(input: T[] | (() => T[]) = []) {
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

  /**
   * Similar to Array.unshift()
   * @param value The value to add
   */
  public addToBeginning(
    value: T,
    ignoreIfExistsFilter?: (value: T, index: number, array: T[]) => boolean
  ) {
    if (!ignoreIfExistsFilter) {
      this._value.unshift(value);
      this.publish();
    } else {
      const index = this._value.findIndex(ignoreIfExistsFilter);
      if (index === -1) {
        this._value.unshift(value);
        this.publish();
      }
    }
  }

  /**
   * Similar to Array.push()
   * @param value The value to add
   */
  public addToEnd(
    value: T,
    ignoreIfExistsFilter?: (value: T, index: number, array: T[]) => boolean
  ) {
    if (!ignoreIfExistsFilter) {
      this._value.push(value);
      this.publish();
    } else {
      const index = this._value.findIndex(ignoreIfExistsFilter);
      if (index === -1) {
        this._value.push(value);
        this.publish();
      }
    }
  }

  /**
   * Removes first item, similar to Array.shift()
   */
  public removeFromBeginning() {
    this._value.shift();
    this.publish();
  }

  /**
   * Removes last item, similar to Array.pop()
   */
  public removeFromEnd() {
    this._value.pop();
    this.publish();
  }

  /**
   * Update one value
   * @param query find query to find first element
   * @param value value to update with
   */
  public updateOne(
    query: (value: T, index: number, array: T[]) => boolean,
    value: T | Partial<T> | ((current: T) => T)
  ): T | null {
    let index = this._value.findIndex(query);
    if (index >= 0) {
      this._value[index] =
        typeof value === "function"
          ? value(this._value[index])
          : { ...this._value[index], ...value };
      this.publish();
      return this._value[index] as T;
    }
    return null;
  }

  /**
   * Update one value, THIS WILL THROW IF CAN'T FIND ELEMENT!
   * @param query find query to find first element
   * @param value value to update with
   */
  public updateOneOrThrow(
    query: (value: T, index: number, array: T[]) => boolean,
    value: T | Partial<T>
  ): T {
    let index = this._value.findIndex(query);
    if (index === -1) {
      throw new Error();
    }
    // for (let key in value) {
    //     (one as any)[key] = value[key];
    // }
    this._value[index] = { ...this._value[index], ...value };
    this.publish();
    return this._value[index];
  }

  /**
   * Update multiple values
   * @param filter filter query to find all elements matching
   * @param value value to update with
   */
  public updateWhere(
    filter: (value: T, index: number, array: T[]) => boolean,
    value: T | Partial<T>
  ) {
    this._value.filter(filter).forEach((d) => {
      d = { ...d, ...value };
    });
    this.publish();
  }

  /**
   * Update a single element at specified index
   * @param index Index of element to update
   * @param value value to update with
   * @returns value removed
   */
  public updateAt(index: number, value: T | Partial<T>): T {
    if (!this._value[index]) {
      throw new Error();
    }
    this._value[index] = { ...this._value[index], ...value };
    this.publish();
    return this._value[index];
  }

  public upsertOne(
    predicate: (value: T, index: number, array: T[]) => boolean,
    value: T,
    position?: "beginning" | "end"
  ) {
    console.log("upserting");
    console.log(this._value);
    const index = this._value.findIndex(predicate);
    console.log(index);
    if (index >= 0) {
      this._value[index] = value;
    } else {
      if (!position || position === "beginning") {
        this._value.unshift(value);
      } else {
        this._value.push(value);
      }
    }
    this.publish();
  }

  /**
   * Remove matching elements
   * @param filter filter query to find all elements matching
   */
  public removeWhere(filter: (value: T, index: number, array: T[]) => boolean) {
    this._value = this._value.filter((v, i, arr) => !filter(v, i, arr));
    this.publish();
  }

  /**
   * Remove one value or null
   * @param query find query to find first element
   */
  public removeOne(
    query: (value: T, index: number, array: T[]) => boolean
  ): T | null {
    let index = this._value.findIndex(query);
    // if (index === -1) {
    //     throw new Error();
    // }
    if (index >= 0) {
      const removed = this._value.splice(index, 1);
      this.publish();
      return removed[0];
    }
    return null;
  }

  /**
   * Remove an item at the index and publishes the updates
   * @param index The index of the item
   */
  public removeAt(index: number): T {
    const removed = this._value.splice(index, 1);
    this.publish();
    return removed[0];
  }
}
