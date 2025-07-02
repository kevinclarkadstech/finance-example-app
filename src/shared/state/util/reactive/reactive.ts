export type ValueStore<T> = {
  get value(): Readonly<T>;
  set(newValue: T): void;
};

export type ReactiveNumber = ValueStore<number> & {
  subscribe(callback: () => void): () => void;
};

export type ReactiveBoolean = ValueStore<boolean> & {
  subscribe(callback: () => void): () => void;
};

export type ReactiveString = ValueStore<string> & {
  subscribe(callback: () => void): () => void;
};

export type ReactivePrimitiveArray<T extends (string | number | boolean)[]> =
  ValueStore<T> & {
    subscribe(callback: () => void): () => void;
  };

export type ReactiveObjectArray<T extends Record<string, any>[]> =
  ValueStore<T> & {
    subscribe(callback: () => void): () => void;
    addToBeginning(
      value: T[number],
      ignoreIfExistsFilter?: (
        value: T[number],
        index: number,
        array: T
      ) => boolean
    ): void;
    addToEnd(
      value: T[number],
      ignoreIfExistsFilter?: (
        value: T[number],
        index: number,
        array: T
      ) => boolean
    ): void;
    removeFromBeginning(
      ignoreIfExistsFilter?: (
        value: T[number],
        index: number,
        array: T
      ) => boolean
    ): void;
    removeFromEnd(
      ignoreIfExistsFilter?: (
        value: T[number],
        index: number,
        array: T
      ) => boolean
    ): void;
    removeAtIndex(index: number): void;
    removeWhere(
      filter: (value: T[number], index: number, array: T) => boolean
    ): void;
    removeOne(
      query: (value: T[number], index: number, array: T) => boolean
    ): T[number] | null;
    removeOneOrThrow(
      query: (value: T[number], index: number, array: T) => boolean
    ): T[number];
    updateOne(
      query: (value: T[number], index: number, array: T) => boolean,
      value:
        | T[number]
        | Partial<T[number]>
        | ((current: T[number]) => T[number])
    ): T[number] | null;
    updateOneOrThrow(
      query: (value: T[number], index: number, array: T) => boolean,
      value: T[number] | Partial<T[number]>
    ): T[number];
    updateAt(
      index: number,
      value: T[number] | Partial<T[number]>
    ): T[number] | null;
    upsertOne(
      predicate: (value: T[number], index: number, array: T) => boolean,
      value: T[number],
      position?: "beginning" | "end"
    ): void;
  };

export type ReactiveObject<T extends Record<string, any>> = ValueStore<T> & {
  subscribe(callback: () => void): () => void;
  updateAtPath<K extends keyof T>(path: K, value: T[K]): void;
  update(value: Partial<T>): void;
};

export type Reactive<T> = ValueStore<T> & {
  subscribe(callback: () => void): () => void;
};

export function reactive<T>(initialValue: T): Reactive<T> {
  let value = initialValue;
  const subscribers: {
    [subscriberId: string]: () => void;
  } = {};

  function publish() {
    Object.values(subscribers).forEach((callback) => callback());
  }

  return {
    get value() {
      return value;
    },
    set(newValue: T) {
      if (value !== newValue) {
        value = newValue;
        publish();
      }
    },
    subscribe(callback: () => void): () => void {
      const subscriberId = Math.random().toString(36).substring(2, 15);
      subscribers[subscriberId] = callback;
      return () => {
        delete subscribers[subscriberId];
      };
    },
  };
}

/**
 * a) pass union type to reactive to make it easier to determine the type of the reactive object
 * b) or create smaller reactive functions for each type
 */
