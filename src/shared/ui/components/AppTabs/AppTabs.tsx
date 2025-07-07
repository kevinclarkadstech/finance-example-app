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
import { HomeRoutes } from "@home/ui/HomeRoutes";
import { useAuth } from "@shared/ui/hooks/useAuth/useAuth";
import { CreditCardRoutes } from "@credit-card/ui/CreditCardRoutes";
import { InvestRoutes } from "@invest/ui/InvestRoutes";
import { LoansRoutes } from "@loans/ui/LoansRoutes";
import { BankingRoutes } from "@banking/ui/BankingRoutes";

export function AppTabs() {
  const auth = useAuth();
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

  if (auth.isLoggedIn && location.pathname.startsWith("/auth")) {
    return <Redirect to="/home" />;
  }

  if (!auth.isLoggedIn && !location.pathname.startsWith("/auth")) {
    console.log("Redirecting to login");
    return <Redirect to="/auth/login" />;
  }

  if (!auth.isLoggedIn) {
    return null;
  }

  return (
    <IonTabs>
      <IonRouterOutlet style={{ marginTop: "48px" }}>
        <Route path="/home" component={HomeRoutes} />
        <Route path="/banking" component={BankingRoutes} />
        <Route path="/credit-card" component={CreditCardRoutes} />
        <Route path="/invest" component={InvestRoutes} />
        <Route path="/loans" component={LoansRoutes} />
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
