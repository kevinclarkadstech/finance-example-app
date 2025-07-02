import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { home, cash, barChart, card, ribbon } from "ionicons/icons";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AppTabs.css";
import { LoansTab } from "@loans/ui/pages/LoansTab/LoansTab";
import { CreditCardTab } from "@credit-card/ui/pages/CreditCardTab/CreditCardTab";
import { BankingTab } from "@banking/ui/pages/BankingTab/BankingTab";
import { HomeTab } from "@home/ui/pages/HomeTab/HomeTab";
import { InvestTab } from "@invest/ui/pages/InvestTab/InvestTab";

export function AppTabs() {
  const [selectedTab, setSelectedTab] = useState<
    ("home" | "invest" | "banking" | "credit-card" | "loans") | undefined
  >();
  const location = useLocation();

  useEffect(() => {
    const path = location?.pathname;
    if (path.startsWith("/home")) {
      setSelectedTab("home");
    } else if (path.startsWith("/invest")) {
      setSelectedTab("invest");
    } else if (path.startsWith("/loans")) {
      setSelectedTab("loans");
    } else if (path.startsWith("/banking")) {
      setSelectedTab("banking");
    } else if (path.startsWith("/credit-card")) {
      setSelectedTab("credit-card");
    } else {
      setSelectedTab(undefined);
    }
  }, [location]);

  return (
    <IonTabs>
      <IonRouterOutlet style={{ marginTop: "36px" }}>
        <Route exact path="/home">
          <HomeTab />
        </Route>
        <Route exact path="/invest">
          <InvestTab />
        </Route>
        <Route path="/banking">
          <BankingTab />
        </Route>
        <Route path="/credit-card">
          <CreditCardTab />
        </Route>
        <Route path="/loans">
          <LoansTab />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" selectedTab={selectedTab}>
        <IonTabButton tab="home" href="/home" selected={selectedTab === "home"}>
          <IonIcon aria-hidden="true" icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="banking"
          href="/banking"
          selected={selectedTab === "banking"}
        >
          <IonIcon aria-hidden="true" icon={cash} />
          <IonLabel>Banking</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="credit-card"
          href="/credit-card"
          selected={selectedTab === "credit-card"}
        >
          <IonIcon aria-hidden="true" icon={card} />
          <IonLabel>Credit Card</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="invest"
          href="/invest"
          selected={selectedTab === "invest"}
        >
          <IonIcon aria-hidden="true" icon={barChart} />
          <IonLabel>Invest</IonLabel>
        </IonTabButton>
        <IonTabButton
          tab="loans"
          href="/loans"
          selected={selectedTab === "loans"}
        >
          <IonIcon aria-hidden="true" icon={ribbon} />
          <IonLabel>Loans</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
