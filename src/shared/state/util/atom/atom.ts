export type Atom<T> = {
  get value(): Readonly<T>;
  set: (newValue: T) => void;
  subscribe: (callback: () => void) => () => void;
};

export function atom<T>(initialValue: T): Atom<T> {
  let value = initialValue;
  const subscribers: {
    [subscriberId: string]: () => void;
  } = {};
  function publish() {
    Object.values(subscribers).forEach((callback) => callback());
  }
  return {
    get value(): Readonly<T> {
      return value;
    },
    set: (newValue: T) => {
      value = newValue;
      publish();
    },
    subscribe: (callback: () => void) => {
      const subscriberId = Math.random().toString(36).substring(2, 15);
      subscribers[subscriberId] = callback;
      return () => {
        delete subscribers[subscriberId];
      };
    },
  };
}
