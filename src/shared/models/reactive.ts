import { ReactiveObject } from "./reactive-object";
import { ReactiveObjectArray } from "./reactive-object-array";
import { ReactivePrimitive } from "./reactive-primitive";
import { ReactivePrimitiveArray } from "./reactive-primitive-array";

export type Reactive<T> =
  | ReactiveObject<T extends Record<string, any> ? T : never>
  | (T extends string | number | boolean ? ReactivePrimitive<T> : never)
  | ReactiveObjectArray<T extends Record<string, any> ? T : never>
  | (T extends string | number | boolean ? ReactivePrimitiveArray<T> : never);
