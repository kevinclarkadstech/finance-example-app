import { MakeBankingTransferButton } from "@banking/ui/components/MakeBankingTransferButton/MakeBankingTransferButton";
import { SendWithZelleButton } from "@banking/ui/components/SendWithZelleButton/SendWithZelleButton";
import { IonListHeader, IonText } from "@ionic/react";
import { HorizontalScrollingContainer } from "@shared/ui/components/HorizontalScrollingContainer/HorizontalScrollingContainer";

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
      <IonListHeader
        lines="inset"
        style={{ paddingLeft: "16px", marginBottom: "8px" }}
      >
        <IonText
          color="medium"
          style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}
        >
          Quick Actions
        </IonText>
      </IonListHeader>
      <HorizontalScrollingContainer>
        <SendWithZelleButton routerLink="/home/banking/send-money-with-zelle" />
        <MakeBankingTransferButton routerLink="/home/banking/transfers" />
      </HorizontalScrollingContainer>
    </div>
  );
}
