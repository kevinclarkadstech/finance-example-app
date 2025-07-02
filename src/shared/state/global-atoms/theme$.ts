import { atom } from "../util/atom/atom";

export const theme$ = atom<"dark" | "light">("dark");
