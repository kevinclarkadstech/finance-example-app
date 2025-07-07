import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export const AccountDetailPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Account Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest"></IonContent>
    </IonPage>
  );
};
