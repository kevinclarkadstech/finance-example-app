export class Store<T> {
  private _state: T;
  private subscribers: {
    [subscriberId: string]: () => void;
  } = {};

  constructor(initialState: T) {
    this._state = initialState;
  }

  get state(): T {
    return this._state;
  }

  setState(newState: T): void {
    this._state = newState;
    this.publish();
  }

  subscribe(callback: () => void): () => void {
    const subscriberId = Math.random().toString(36).substring(2, 15);
    this.subscribers[subscriberId] = callback;
    const unsubscribe = () => {
      delete this.subscribers[subscriberId];
    };
    return unsubscribe;
  }

  publish(): void {
    Object.values(this.subscribers).forEach((callback) => callback());
  }
}
