import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { BankingTab } from "./pages/BankingTab/BankingTab";

export function BankingRoutes() {
  return (
    <IonRouterOutlet id="banking-router">
      <Route path="/banking" exact>
        <BankingTab />
      </Route>
      <Route path="/banking/settings" exact>
        <div>Replace</div>
      </Route>
      <Route path="/banking/:accountId" exact>
        <div>Replace</div>
      </Route>
      <Route path="/banking/:accountId/transactions" exact>
        <div>Replace</div>
      </Route>
      <Route path="/banking/:accountId/transactions/:transactionId" exact>
        <div>Replace</div>
      </Route>
    </IonRouterOutlet>
  );
}
