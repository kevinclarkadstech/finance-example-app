import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export const LoansTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Loans</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest"></IonContent>
    </IonPage>
  );
};
