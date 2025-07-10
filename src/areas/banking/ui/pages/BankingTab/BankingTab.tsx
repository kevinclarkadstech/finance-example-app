import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./BankingTab.css";
import { AccountsOverviewCard } from "@banking/ui/components/AccountsOverviewCard/AccountsOverviewCard";
import { add, cashOutline, chevronUp, helpOutline } from "ionicons/icons";
import { ZelleIcon } from "@banking/ui/components/SendWithZelleButton/ZelleIcon/ZelleIcon";
import { SendWithZelleButton } from "@banking/ui/components/SendWithZelleButton/SendWithZelleButton";
import { QuickActionsCard } from "@banking/ui/components/QuickActionsCard/QuickActionsCard";

export const BankingTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Banking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AccountsOverviewCard />
        {/* <QuickActionsCard /> */}
        <IonCard>
          <IonCardContent style={{ padding: "0 8px 8px 8px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: " 5px 10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <IonText color="darkest">
                  <h4 style={{ fontSize: "1.1rem" }}>
                    Track your spending habits
                  </h4>
                </IonText>
                <p style={{ fontSize: "0.8rem" }}>
                  See where your money is going, and analyze how you can improve
                </p>
              </div>

              <IonImg
                src="/images/money.png"
                style={{ width: "100px", height: "100px", marginRight: "10px" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "end" }}>
              <IonButton
                size="small"
                fill="outline"
                color="primary"
                shape="round"
                style={{
                  fontSize: "0.7rem",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Manage spending
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonFab slot="fixed" horizontal="end" vertical="bottom">
          <IonFabButton color="secondary">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonButton
              size="small"
              style={{ marginLeft: "-40px", fontSize: "0.7rem" }}
              color="dark"
              fill="outline"
            >
              <IonIcon icon={helpOutline} />
              Get Help
            </IonButton>
            <IonButton
              size="small"
              style={{ marginLeft: "-40px", fontSize: "0.7rem" }}
              color="primary"
            >
              <IonIcon icon={cashOutline} />
              New Account
            </IonButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
