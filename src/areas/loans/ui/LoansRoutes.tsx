import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { LoansTab } from "./pages/LoansTab/LoansTab";

export function LoansRoutes() {
  return (
    <IonRouterOutlet id="loans-router">
      <Route path="/loans" exact>
        <LoansTab />
      </Route>
      <Route path="/loans/apply" exact>
        <div>Replace with Loan Application Page</div>
      </Route>
      <Route path="/loans/:loanId" exact>
        <div>Replace with Loan Detail Page</div>
      </Route>
      <Route path="/loans/settings" exact>
        <div>Replace with Loan Settings Page</div>
      </Route>
    </IonRouterOutlet>
  );
}
