import { Reactive } from "@shared/models/reactive";
import { useEffect, useState } from "react";

// import { reactive } from "../reactive/reactive";

export function useReactive<T>(reactive$: Reactive<T>): void {
  const [, updateUi] = useState<{}>();

  useEffect(() => {
    reactive$.subscribe(() => {
      updateUi({});
    });
  }, []);
}
