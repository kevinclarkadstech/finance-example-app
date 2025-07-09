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
import { QuickActionsBar } from "@home/ui/components/QuickActionsBar/QuickActionsBar";
import { useEffect, useState } from "react";

export const HomeTab: React.FC = () => {
  const router = useIonRouter();
  const [numNewNotifications, setNumNewNotifications] = useState<number>(0);
  // Simulate fetching new notifications count
  // In a real application, this would be fetched from an API or state management solution

  useEffect(() => {
    const fetchNewNotificationsCount = async () => {
      // Simulate an API call
      const newNotificationsCount = await new Promise<number>((resolve) =>
        setTimeout(() => resolve(5), 1000)
      );
      setNumNewNotifications(newNotificationsCount);
    };
    fetchNewNotificationsCount();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <NotificationsButton
              badgeCount={numNewNotifications}
              onClick={() => {
                setNumNewNotifications(0);
                router.push("/home/notifications");
              }}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <QuickActionsBar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            flexWrap: "wrap",
            marginTop: "16px",
            gap: "8px",
            padding: "0 8px",
          }}
        >
          <IonCard color="light" style={{ margin: "0" }}>
            <IonCardContent style={{ padding: "12px" }}>
              <h3 style={{ fontSize: "1.0rem", marginBottom: "8px" }}>
                Good afternoon, {mockCurrentUser.displayName}!
              </h3>
              <p style={{ fontSize: "0.8rem" }}>You have 5 new messages.</p>
              <p style={{ fontSize: "0.8rem" }}>
                <strong>Last login:</strong> 2 days ago
              </p>
            </IonCardContent>
          </IonCard>
          <IonCard color="tertiary" style={{ margin: "0" }}>
            <IonCardContent>
              <h3
                style={{
                  fontSize: "0.8rem",
                  marginBottom: "8px",
                  color: "var(--ion-color-light-shade)",
                }}
              >
                Your Net Worth
              </h3>
              <h3 style={{ fontSize: "1.3rem" }}>$10,046.32</h3>
            </IonCardContent>
          </IonCard>
        </div>
        {/* <IonGrid>
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
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};
