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
import { mockCurrentUser } from "@shared/mocks/mock-current-user";
import { useAuth } from "@shared/ui/hooks/useAuth/useAuth";
import { wait } from "@shared/util/wait/wait";
import { useState } from "react";
import "./LogInPage.css";
import { BackButton } from "@shared/ui/components/BackButton/BackButton";

export function LogInPage() {
  const auth = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <IonPage>
      <IonLoading isOpen={loading} message="Logging in..." />
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Log In</IonTitle>
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
                  value={
                    Object.keys(mockCurrentUser.emails)[0] || "test@test.com"
                  } // Use the first key of mockCurrentUser as email
                />
              </IonItem>
              <IonItem color="lightest">
                <IonInput
                  type="password"
                  label="Password"
                  labelPlacement="floating"
                  value="password123"
                />
              </IonItem>
              <IonButton
                expand="block"
                color="primary"
                className="ion-margin-top"
                onClick={async () => {
                  setLoading(true);
                  await wait(1500); // Simulate network delay
                  auth.logIn(mockCurrentUser);
                  setLoading(false);
                }}
              >
                Log In
              </IonButton>
              <IonButton
                expand="block"
                size="small"
                color="primary"
                fill="clear"
                className="ion-margin-top"
                routerLink="/auth/register"
              >
                Register
              </IonButton>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
