import { ReactivePrimitive } from "@shared/models/reactive-primitive";

export const currentTheme$ = new ReactivePrimitive<"dark" | "light">("dark");
