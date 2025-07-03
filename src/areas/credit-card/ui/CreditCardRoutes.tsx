import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router-dom";
import { CreditCardTab } from "./pages/CreditCardTab/CreditCardTab";
import { CreditCardDetailPage } from "./pages/CreditCardDetailPage/CreditCardDetailPage";

export function CreditCardRoutes() {
  return (
    <IonRouterOutlet>
      <Route path="/credit-card" component={CreditCardTab} exact={true} />
      <Route
        path="/credit-card/:cardId/details"
        component={CreditCardDetailPage}
        exact={true}
      />
    </IonRouterOutlet>
  );
}
