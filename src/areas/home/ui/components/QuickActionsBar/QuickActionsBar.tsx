import { MakeBankingTransferButton } from "@banking/ui/components/MakeBankingTransferButton/MakeBankingTransferButton";
import { SendWithZelleButton } from "@banking/ui/components/SendWithZelleButton/SendWithZelleButton";
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { HorizontalScrollingContainer } from "@shared/ui/components/HorizontalScrollingContainer/HorizontalScrollingContainer";
import { cardOutline, createOutline } from "ionicons/icons";

export function QuickActionsBar() {
  return (
    <div
      style={{
        backgroundColor: "var(--ion-color-lightest)",
        color: "var(--ion-color-lightest-contrast)",
        paddingTop: "0px",
        paddingBottom: "8px",
      }}
    >
      <IonToolbar
        color="lightest"
        style={{
          paddingLeft: "16px",
          marginBottom: "8px",
          borderBottom: "1px solid var(--ion-color-lightest-shade)",
        }}
      >
        <IonText
          color="medium"
          style={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        >
          Quick Actions
        </IonText>
        <IonButtons slot="end">
          <IonButton
            fill="clear"
            size="small"
            color="medium"
            routerLink="/home/banking/send-money-with-zelle"
          >
            <IonIcon icon={createOutline} />
            <span style={{ marginTop: "3px" }}>Edit</span>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <HorizontalScrollingContainer spaceBetweenItems="12px">
        <SendWithZelleButton routerLink="/home/banking/send-money-with-zelle" />
        <MakeBankingTransferButton routerLink="/home/banking/transfers" />
        <IonButton
          color="light"
          fill="solid"
          size="small"
          routerLink="/home/banking/transactions"
          shape="round"
          style={{ "--padding-start": "16px", "--padding-end": "16px" }}
        >
          <IonIcon slot="start" icon={cardOutline} color="medium" />
          <span style={{ marginTop: "3px" }}>Pay Credit Card</span>
        </IonButton>
      </HorizontalScrollingContainer>
    </div>
  );
}
