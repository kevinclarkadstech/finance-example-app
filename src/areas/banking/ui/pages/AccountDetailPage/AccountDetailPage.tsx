import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BackButton } from "@shared/ui/components/BackButton/BackButton";

export function AccountDetailPage({ accountId }: { accountId: string }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <BackButton defaultHref="/banking" />
          </IonButtons>
          <IonTitle>Account Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest"></IonContent>
    </IonPage>
  );
}
