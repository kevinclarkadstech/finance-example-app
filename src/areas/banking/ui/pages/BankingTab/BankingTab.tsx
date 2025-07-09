import {
  IonButton,
  IonButtons,
  IonCard,
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
import { add, cashOutline, chevronUp } from "ionicons/icons";
import { ZelleIcon } from "@banking/ui/components/SendWithZelleButton/ZelleIcon/ZelleIcon";
import { SendWithZelleButton } from "@banking/ui/components/SendWithZelleButton/SendWithZelleButton";

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
        <IonCard color="lightest">
          <IonChip color="dark">
            <ZelleIcon />
            <IonText style={{ fontSize: "0.8rem" }}>
              Send money with Zelle
            </IonText>
          </IonChip>
          <IonButton
            size="small"
            fill="solid"
            shape="round"
            style={{
              "--padding-start": "8px",
              "--padding-end": "8px",
              "--background": "#7c10b2",
              "--color": "#fff",
              fontSize: "0.7rem",
            }}
          >
            <ZelleIcon width="20px" height="20px" />
            Send money with Zelle
          </IonButton>

          <SendWithZelleButton shape="round" size="small" />
        </IonCard>
        <IonCard>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
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

          <IonButton
            size="small"
            fill="outline"
            color="primary"
            shape="round"
            style={{ fontSize: "0.7rem", float: "right", marginRight: "10px" }}
          >
            Manage spending
          </IonButton>
        </IonCard>
        <IonFab slot="fixed" horizontal="end" vertical="bottom">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonButton
              size="small"
              style={{ marginLeft: "-40px", fontSize: "0.7rem" }}
              color="secondary"
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
