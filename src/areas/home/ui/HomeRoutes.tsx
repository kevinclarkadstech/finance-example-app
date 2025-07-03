import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { HomeTab } from "./pages/HomeTab/HomeTab";
import { NotificationsListPage } from "./pages/NotificationsListPage/NotificationsListPage";

export function HomeRoutes() {
  return (
    <IonRouterOutlet>
      <Route path="/home" component={HomeTab} exact={true} />
      <Route
        path="/home/notifications"
        component={NotificationsListPage}
        exact={true}
      />
    </IonRouterOutlet>
  );
}
