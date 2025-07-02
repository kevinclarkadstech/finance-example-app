export function reactiveObjectArray<T>(initialValue: T[]) {
  let value: T[] = initialValue;
  const subscribers: {
    [subscriberId: string]: () => void;
  } = {};
  function publish() {
    Object.values(subscribers).forEach((callback) => callback());
  }

  return {
    get value() {
      return value as Readonly<T[]>;
    },
    set(newValue: T[]) {
      value = newValue;
      publish();
    },
    subscribe(callback: () => void) {
      const subscriberId = Math.random().toString(36).substring(2, 15);
      subscribers[subscriberId] = callback;
      return () => {
        delete subscribers[subscriberId];
      };
    },
    /**
     * Similar to Array.unshift()
     * @param value The value to add
     */
    addToBeginning(
      v: T,
      ignoreIfExistsFilter?: (value: T, index: number, array: T[]) => boolean
    ) {
      if (!ignoreIfExistsFilter) {
        value.unshift(v);
        publish();
      } else {
        const index = value.findIndex(ignoreIfExistsFilter);
        if (index === -1) {
          value.unshift(v);
          publish();
        }
      }
    },

    /**
     * Similar to Array.push()
     * @param value The value to add
     */
    addToEnd(
      v: T,
      ignoreIfExistsFilter?: (value: T, index: number, array: T[]) => boolean
    ) {
      if (!ignoreIfExistsFilter) {
        value.push(v);
        publish();
      } else {
        const index = value.findIndex(ignoreIfExistsFilter);
        if (index === -1) {
          value.push(v);
          publish();
        }
      }
    },

    /**
     * Removes first item, similar to Array.shift()
     */
    removeFromBeginning() {
      value.shift();
      publish();
    },

    /**
     * Removes last item, similar to Array.pop()
     */
    removeFromEnd() {
      value.pop();
      publish();
    },

    /**
     * Update one value
     * @param query find query to find first element
     * @param value value to update with
     */
    updateOne(
      query: (v: T, index: number, array: T[]) => boolean,
      v: T | Partial<T> | ((current: T) => T)
    ): T | null {
      let index = value.findIndex(query);
      if (index >= 0) {
        if (typeof v === "function" && v instanceof Function) {
          value[index] = (v as (current: T) => T)(value[index]);
        } else {
          value[index] = { ...value[index], ...v };
        }
        publish();
        return value[index] as T;
      }
      return null;
    },

    /**
     * Update one value, THIS WILL THROW IF CAN'T FIND ELEMENT!
     * @param query find query to find first element
     * @param value value to update with
     */
    updateOneOrThrow(
      query: (v: T, index: number, array: T[]) => boolean,
      v: T | Partial<T>
    ): T {
      let index = value.findIndex(query);
      if (index === -1) {
        throw new Error();
      }
      // for (let key in value) {
      //     (one as any)[key] = value[key];
      // }
      value[index] = { ...value[index], ...v };
      publish();
      return value[index];
    },

    /**
     * Update multiple values
     * @param filter filter query to find all elements matching
     * @param value value to update with
     */
    updateWhere(
      filter: (v: T, index: number, array: T[]) => boolean,
      v: T | Partial<T>
    ) {
      value.filter(filter).forEach((d) => {
        d = { ...d, ...v };
      });
      publish();
    },

    /**
     * Update a single element at specified index
     * @param index Index of element to update
     * @param value value to update with
     * @returns value removed
     */
    updateAt(index: number, v: T | Partial<T>): T {
      if (!value[index]) {
        throw new Error();
      }
      value[index] = { ...value[index], ...v };
      publish();
      return value[index];
    },

    upsertOne(
      predicate: (v: T, index: number, array: T[]) => boolean,
      v: T,
      position?: "beginning" | "end"
    ) {
      console.log("upserting");
      console.log(v);
      const index = value.findIndex(predicate);
      console.log(index);
      if (index >= 0) {
        value[index] = v;
      } else {
        if (!position || position === "beginning") {
          value.unshift(v);
        } else {
          value.push(v);
        }
      }
      publish();
    },

    /**
     * Remove matching elements
     * @param filter filter query to find all elements matching
     */
    removeWhere(filter: (v: T, index: number, array: T[]) => boolean) {
      value = value.filter((v, i, arr) => !filter(v, i, arr));
      publish();
    },

    /**
     * Remove one value or null
     * @param query find query to find first element
     */
    removeOne(query: (v: T, index: number, array: T[]) => boolean): T | null {
      let index = value.findIndex(query);
      // if (index === -1) {
      //     throw new Error();
      // }
      if (index >= 0) {
        const removed = value.splice(index, 1);
        publish();
        return removed[0];
      }
      return null;
    },

    /**
     * Remove an item at the index and publishes the updates
     * @param index The index of the item
     */
    removeAt(index: number): T {
      const removed = value.splice(index, 1);
      publish();
      return removed[0];
    },
  };
}
