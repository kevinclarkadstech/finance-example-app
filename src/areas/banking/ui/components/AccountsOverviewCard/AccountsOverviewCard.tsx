import {
  IonCard,
  IonCardHeader,
  IonToolbar,
  IonTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import "./AccountsOverviewCard.css";

export function AccountsOverviewCard() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonToolbar>
          <IonTitle>Accounts Overview</IonTitle>
        </IonToolbar>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem detail>
            <IonLabel style={{ fontSize: "0.7rem" }}>PRIMARY CHECKING</IonLabel>
            <IonLabel slot="end">$2,503.81</IonLabel>
          </IonItem>
          <IonItem detail>
            <IonLabel style={{ fontSize: "0.7rem" }}>PRIMARY SAVINGS</IonLabel>
            <IonLabel slot="end">$6,978.23</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
