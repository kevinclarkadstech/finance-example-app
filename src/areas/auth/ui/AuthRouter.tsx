import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, useLocation } from "react-router";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { useAuth } from "@shared/ui/hooks/useAuth/useAuth";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

export function AuthRouter() {
  const auth = useAuth();
  const location = useLocation();
  if (auth.isLoggedIn && location.pathname.startsWith("/auth")) {
    // Redirect to home if user is logged in and tries to access auth routes
    return <Redirect to="/home" />;
  }
  if (!auth.isLoggedIn && !location.pathname.startsWith("/auth")) {
    // Redirect to login if user is not logged in and tries to access non-auth routes
    return <Redirect to="/auth/login" />;
  }

  if (auth.isLoggedIn) {
    return null;
  }
  return (
    <IonRouterOutlet id="auth-router" style={{ marginTop: "48px" }}>
      <Route path="/auth/login" component={LogInPage} exact={true} />
      <Route path="/auth/register" component={RegisterPage} exact={true} />
      <Route exact path="/">
        <Redirect to="/auth/login" />
      </Route>
    </IonRouterOutlet>
  );
}
