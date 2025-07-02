// import { ValueStore } from "../../models/shared/value-store";

// type ReactiveNumber = ValueStore<number> & {
//   subscribe(callback: () => void): () => void;
// };

// type ReactiveBoolean = ValueStore<boolean> & {
//   subscribe(callback: () => void): () => void;
// };

// type ReactiveString = ValueStore<string> & {
//   subscribe(callback: () => void): () => void;
// };

// export type ReactiveObjectArray<T extends Record<string, any>[]> =
//   ValueStore<T> & {
//     subscribe(callback: () => void): () => void;
//     addToBeginning(
//       value: T[number],
//       ignoreIfExistsFilter?: (
//         value: T[number],
//         index: number,
//         array: T
//       ) => boolean
//     ): void;
//   };

// type ReactiveObject<T extends Record<string, any>> = ValueStore<T> & {
//   subscribe(callback: () => void): () => void;
//   updateAtPath<K extends keyof T>(path: K, value: T[K]): void;
//   update(value: Partial<T>): void;
// };

// export function reactive(initialValue: number): ReactiveNumber;
// export function reactive(initialValue: boolean): ReactiveBoolean;
// export function reactive(initialValue: string): ReactiveString;
// export function reactive<T extends Record<string, any>[]>(
//   initialValue: T
// ): ReactiveObjectArray<T>;
// export function reactive<T extends Record<string, any>>(
//   initialValue: T
// ): ReactiveObject<T>;
// export function reactive<T>(initialValue: T): any {
//   let value = initialValue;
//   const subscribers: {
//     [subscriberId: string]: () => void;
//   } = {};
//   function publish() {
//     Object.values(subscribers).forEach((callback) => callback());
//   }

//   if (typeof value === "number") {
//     return {
//       get value() {
//         return value as Readonly<number>;
//       },
//       set: (newValue: number) => {
//         if (typeof newValue === "number" && !isNaN(newValue)) {
//           value = newValue as T;
//           publish();
//         } else {
//           throw new Error("Invalid number value");
//         }
//       },
//       subscribe: (callback: () => void) => {
//         const subscriberId = Math.random().toString(36).substring(2, 15);
//         subscribers[subscriberId] = callback;
//         return () => {
//           delete subscribers[subscriberId];
//         };
//       },
//     };
//   }
//   if (typeof value === "boolean") {
//     return {
//       get value() {
//         return value as Readonly<boolean>;
//       },
//       set: (newValue: boolean) => {
//         value = newValue as T;
//         publish();
//       },
//       subscribe: (callback: () => void) => {
//         const subscriberId = Math.random().toString(36).substring(2, 15);
//         subscribers[subscriberId] = callback;
//         return () => {
//           delete subscribers[subscriberId];
//         };
//       },
//     };
//   }
//   if (typeof value === "string") {
//     return {
//       get value() {
//         return value as Readonly<string>;
//       },
//       set: (newValue: string) => {
//         value = newValue as T;
//         publish();
//       },
//       subscribe: (callback: () => void) => {
//         const subscriberId = Math.random().toString(36).substring(2, 15);
//         subscribers[subscriberId] = callback;
//         return () => {
//           delete subscribers[subscriberId];
//         };
//       },
//     };
//   }
//   if (Array.isArray(value)) {
//     type U = T extends Array<infer R>
//       ? R extends Record<string, any>
//         ? R
//         : never
//       : never;
//     return {
//       get value() {
//         return value as Readonly<T>;
//       },
//       set: (newValue: T) => {
//         value = newValue;
//         publish();
//       },
//       addToBeginning(
//         item: U,
//         ignoreIfExistsFilter?: (value: U, index: number, array: U[]) => boolean
//       ) {
//         if (!ignoreIfExistsFilter) {
//           (value as U[]).unshift(item);
//           publish();
//         } else {
//           const index = (value as U[]).findIndex(ignoreIfExistsFilter);
//           if (index === -1) {
//             (value as U[]).unshift(item);
//             publish();
//           }
//         }
//       },
//       subscribe: (callback: () => void) => {
//         const subscriberId = Math.random().toString(36).substring(2, 15);
//         subscribers[subscriberId] = callback;
//         return () => {
//           delete subscribers[subscriberId];
//         };
//       },
//     };
//   }
//   return {
//     get value() {
//       return value as Readonly<T>;
//     },
//     set: (newValue: T) => {
//       value = newValue;
//       publish();
//     },
//     update(updates: Partial<T>) {
//       console.log("got update request");
//       value = { ...value, ...updates } as T;
//       publish();
//     },
//     updateAtPath<K extends keyof T>(path: K, v: T[K]) {
//       (value as any)[path] = v;
//       publish();
//     },
//     subscribe: (callback: () => void) => {
//       const subscriberId = Math.random().toString(36).substring(2, 15);
//       subscribers[subscriberId] = callback;
//       return () => {
//         delete subscribers[subscriberId];
//       };
//     },
//   };
// }
