import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useAuth } from "@shared/ui/hooks/useAuth/useAuth";
import { useState } from "react";
import "./RegisterPage.css";
import { createToastMessage } from "@shared/util/createToastMessage/createToastMessage";
import { BackButton } from "@shared/ui/components/BackButton/BackButton";

export function RegisterPage() {
  const auth = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <IonPage>
      <IonLoading isOpen={loading} message="Logging in..." />
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <BackButton defaultHref="/auth/login" />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonCard color="lightest">
          <IonCardHeader>
            <h2> Welcome to Finance App!</h2>
          </IonCardHeader>
          <IonCardContent class="ion-padding" color="lightest">
            <IonList
              lines="inset"
              style={{
                backgroundColor: "var(--ion-color-lightest)",
              }}
            >
              <IonItem color="lightest">
                <IonInput
                  type="email"
                  label="Email"
                  labelPlacement="floating"
                  autofocus
                  value="" // Use the first key of mockCurrentUser as email
                />
              </IonItem>
              <IonItem color="lightest">
                <IonInput
                  type="password"
                  label="Password"
                  labelPlacement="floating"
                  value=""
                />
              </IonItem>
              <IonItem color="lightest">
                <IonInput
                  type="password"
                  label="Confirm Password"
                  labelPlacement="floating"
                  value=""
                />
              </IonItem>
              <IonButton
                expand="block"
                color="tertiary"
                className="ion-margin-top"
                onClick={async () => {
                  await createToastMessage(
                    "Registration functionality is not implemented yet."
                  );
                }}
              >
                Register
              </IonButton>
              <IonButton
                expand="block"
                size="small"
                color="primary"
                fill="clear"
                className="ion-margin-top"
                routerLink="/auth/login"
              >
                Log In
              </IonButton>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
