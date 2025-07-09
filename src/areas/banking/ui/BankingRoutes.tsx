import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { BankingTab } from "./pages/BankingTab/BankingTab";
import { AccountDetailPage } from "./pages/AccountDetailPage/AccountDetailPage";
import { SendMoneyWithZellePage } from "./pages/SendMoneyWIthZellePage/SendMoneyWithZellePage";

export function BankingRoutes() {
  return (
    <IonRouterOutlet id="banking-router">
      <Route path="/banking" exact>
        <BankingTab />
      </Route>
      <Route path="/banking/settings" exact>
        <div>Replace</div>
      </Route>
      <Route
        path="/banking/accounts/:accountId"
        exact
        render={(props) => (
          <AccountDetailPage accountId={props.match.params.accountId} />
        )}
      />
      <Route path="/banking/accounts/:accountId/transactions" exact>
        <div>Replace</div>
      </Route>
      <Route
        path="/banking/accounts/:accountId/transactions/:transactionId"
        exact
      >
        <div>Replace</div>
      </Route>
      <Route path="/banking/send-money-with-zelle" exact>
        <SendMoneyWithZellePage />
      </Route>
    </IonRouterOutlet>
  );
}
