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

export function MakeBankingTransferPage({ backPath }: { backPath?: string }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <BackButton defaultHref={backPath || "/banking"} />
          </IonButtons>
          <IonTitle>Make Banking Transfer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest" class="ion-padding">
        <p>
          Use this page to make a banking transfer between your accounts or to
          another bank account.
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
