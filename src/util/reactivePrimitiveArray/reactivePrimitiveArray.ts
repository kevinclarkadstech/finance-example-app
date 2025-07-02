export function reactivePrimitiveArray<T extends string | number | boolean>(
  initialValue: T[]
) {
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
  };
}
