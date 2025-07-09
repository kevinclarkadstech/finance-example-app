import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import { BackButton } from "@shared/ui/components/BackButton/BackButton";

export function SendMoneyWithZellePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <BackButton defaultHref="/banking" />
          </IonButtons>
          <IonTitle>Send Money With Zelle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest" class="ion-padding">
        <p>
          Zelle allows you to send money to friends and family directly from
          your bank account.
        </p>
        <IonList>
          <IonItem>
            <IonLabel>Amount to send:</IonLabel>
            <IonInput type="number" placeholder="Enter amount" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
