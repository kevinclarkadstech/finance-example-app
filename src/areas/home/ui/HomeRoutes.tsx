import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { HomeTab } from "./pages/HomeTab/HomeTab";
import { NotificationsListPage } from "./pages/NotificationsListPage/NotificationsListPage";
import { SendMoneyWithZellePage } from "@banking/ui/pages/SendMoneyWIthZellePage/SendMoneyWithZellePage";
import { MakeBankingTransferPage } from "@banking/ui/pages/MakeBankingTransferPage/MakeBankingTransferPage";

export function HomeRoutes() {
  return (
    <IonRouterOutlet>
      <Route path="/home" component={HomeTab} exact={true} />
      <Route
        path="/home/notifications"
        component={NotificationsListPage}
        exact={true}
      />
      <Route
        path="/home/notifications/:notificationId"
        component={NotificationsListPage}
        exact={true}
      />
      <Route path="/home/banking/send-money-with-zelle" exact={true}>
        <SendMoneyWithZellePage />
      </Route>
      <Route path="/home/banking/transfers" exact={true}>
        <MakeBankingTransferPage />
      </Route>
    </IonRouterOutlet>
  );
}
