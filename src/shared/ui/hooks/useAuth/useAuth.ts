import { CurrentUser } from "@shared/models/current-user";
import { ReactiveObject } from "@shared/models/reactive-object";
import { AuthState, authState$ } from "@shared/state/global/auth-state";
import { useReactive } from "../useReactive/useReactive";

export function useAuth() {
  useReactive<AuthState>(authState$);

  return {
    ...authState$.value,
    logIn: (currentUser: CurrentUser) => {
      const currentUser$ = new ReactiveObject<CurrentUser>(currentUser);
      authState$.set({
        isLoggedIn: true,
        currentUser: currentUser$,
      });
    },
    logOut: () => {
      authState$.set({
        isLoggedIn: false,
        currentUser: null,
      });
    },
  };
}
