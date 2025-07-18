import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export const CreditCardTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Credit Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest"></IonContent>
    </IonPage>
  );
};
