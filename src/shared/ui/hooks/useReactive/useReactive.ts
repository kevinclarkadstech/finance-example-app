import { useEffect, useState } from "react";

export function useReactive<T>(reactive$: {
  subscribe: (callback: () => void) => () => void;
  get value(): Readonly<T>;
}): void {
  const [, updateUi] = useState<{}>();

  useEffect(() => {
    reactive$.subscribe(() => {
      updateUi({});
    });
  }, []);
}
