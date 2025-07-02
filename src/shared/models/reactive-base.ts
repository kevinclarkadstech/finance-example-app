export class ReactiveBase {
  protected _subscribers: {
    [subscriberId: string]: () => void;
  } = {};

  public subscribe(callback: () => void): () => void {
    const subscriberId = Math.random().toString(36).substring(2, 15);
    this._subscribers[subscriberId] = callback;
    console.log("Subscriber added:", subscriberId);

    const unsubscribe = () => {
      delete this._subscribers[subscriberId];
    };
    return unsubscribe;
  }

  public publish() {
    console.log("Current subscribers:", Object.keys(this._subscribers));
    Object.values(this._subscribers).forEach((callback) => callback());
  }
}
