import { IonContent, IonItem, IonList, IonMenu } from "@ionic/react";
import { useLocation } from "react-router";

export function AppMenu() {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay" color="dark" swipeGesture={false}>
      <IonContent color="dark">
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "var(--ion-color-dark-shade)",
            height: "90%",
            width: "80%",
            margin: "20px auto",
          }}
        >
          <IonList>
            <IonItem
              routerLink="/home"
              color={location.pathname === "/home" ? "primary" : "light"}
            >
              Home
            </IonItem>
            <IonItem routerLink="/crypto" color="light">
              Crypto
            </IonItem>
            <IonItem routerLink="/settings" color="light">
              Settings
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonMenu>
  );
}
