export function reactivePrimitive<T extends string | number | boolean>(
  initialValue: T
) {
  let value: T = initialValue;
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
    set(newValue: T) {
      value = newValue;
      console.log("Setting new value:", newValue);
      console.log("Current value:", value);
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
