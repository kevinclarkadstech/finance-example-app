import { useEffect, useState } from "react";
import { Atom } from "../atom/atom";

export function useAtom<T>(atom$: Atom<T>): void {
  const [, updateUi] = useState<{}>();

  useEffect(() => {
    atom$.subscribe(() => {
      updateUi({});
    });
  }, []);
}
