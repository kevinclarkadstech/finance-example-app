import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { InvestTab } from "./pages/InvestTab/InvestTab";

export function InvestRoutes() {
  return (
    <IonRouterOutlet id="invest-router">
      <Route path="/invest" exact>
        <InvestTab />
      </Route>
      <Route path="/invest/crypto" exact>
        <InvestTab />
      </Route>
      <Route path="/invest/stocks" exact>
        <InvestTab />
      </Route>
      <Route path="/invest/etfs" exact>
        <InvestTab />
      </Route>
    </IonRouterOutlet>
  );
}
