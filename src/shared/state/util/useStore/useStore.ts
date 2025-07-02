import { useSyncExternalStore } from "react";
import { Store } from "../store/store";

export function useStore<T>(store: Store<T>) {
  useSyncExternalStore<T>(store.subscribe.bind(store), () => store.state);
  return store;
}
