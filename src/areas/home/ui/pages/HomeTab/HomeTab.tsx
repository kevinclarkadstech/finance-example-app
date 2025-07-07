import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { NotificationsButton } from "@shared/ui/components/NotificationsButton/NotificationsButton";

import "./HomeTab.css";
import { mockCurrentUser } from "@shared/mocks/mock-current-user";

export const HomeTab: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <NotificationsButton
              badgeCount={192}
              onClick={() => router.push("/home/notifications")}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeLg="6" sizeXl="6">
              <IonRow>
                <IonCol
                  size="6"
                  sizeLg="4"
                  sizeXl="4"
                  className="ion-text-center"
                >
                  <IonCard color="light">
                    <IonCardContent>
                      <h3>Good afternoon, {mockCurrentUser.displayName}!</h3>
                      {/* <h4>{user$.get().name}</h4> */}
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol
                  size="6"
                  sizeLg="4"
                  sizeXl="4"
                  className="ion-text-center"
                >
                  <IonCard color="primary">
                    <IonCardContent>
                      <IonText color="dark">
                        <h3>Available Funds</h3>
                      </IonText>
                      <h4
                        style={{
                          fontWeight: "bold",
                          marginTop: "8px",
                          fontSize: "1.1rem",
                        }}
                      >
                        $2,032.55
                      </h4>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol
                  size="6"
                  sizeLg="4"
                  sizeXl="4"
                  className="ion-text-center"
                ></IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="12" sizeLg="6" sizeXl="6"></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
