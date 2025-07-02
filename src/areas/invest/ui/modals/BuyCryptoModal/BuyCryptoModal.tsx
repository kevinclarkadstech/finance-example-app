import {
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export function BuyCryptoModal({
  isOpen,
  onDismissed,
}: {
  isOpen: boolean;
  onDismissed: () => any;
}) {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDismissed}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buy Crypto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </IonModal>
  );
}
