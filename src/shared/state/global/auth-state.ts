import { CurrentUser } from "@shared/models/current-user";
import { ReactiveObject } from "@shared/models/reactive-object";

export type AuthState =
  | {
      isLoggedIn: true;
      currentUser: ReactiveObject<CurrentUser>;
    }
  | {
      isLoggedIn: false;
      currentUser: null;
    };

export const authState$ = new ReactiveObject<AuthState>({
  isLoggedIn: false,
  currentUser: null,
});
