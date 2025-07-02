export function reactiveObject<T extends Record<string, any>>(initialValue: T) {
  let value: T = initialValue;
  const subscribers: {
    [subscriberId: string]: () => void;
  } = {};
  function publish() {
    Object.values(subscribers).forEach((callback) => callback());
  }
  return {
    get value(): Readonly<T> {
      return value as Readonly<T>;
    },
    set(newValue: T) {
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
    updateAtPath<K extends keyof T>(path: K, value: T[K]) {
      if (value) {
        value[path] = value;
        publish();
      }
    },
    update(value: T | Partial<T>) {
      console.log("got update request");
      value = { value, ...value } as T;
      publish();
    },
  };
}
