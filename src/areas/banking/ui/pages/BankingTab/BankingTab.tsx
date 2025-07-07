import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./BankingTab.css";
import { AccountsOverviewCard } from "@banking/ui/components/AccountsOverviewCard/AccountsOverviewCard";

export const BankingTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Banking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AccountsOverviewCard />
      </IonContent>
    </IonPage>
  );
};
