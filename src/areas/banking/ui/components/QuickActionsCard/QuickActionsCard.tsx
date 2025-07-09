import { IonCard, IonChip, IonText, IonButton } from "@ionic/react";
import { SendWithZelleButton } from "../SendWithZelleButton/SendWithZelleButton";
import { ZelleIcon } from "../SendWithZelleButton/ZelleIcon/ZelleIcon";
import { MakeBankingTransferButton } from "../MakeBankingTransferButton/MakeBankingTransferButton";

export function QuickActionsCard() {
  return (
    <IonCard color="lightest">
      <IonChip color="dark">
        <ZelleIcon />
        <IonText style={{ fontSize: "0.8rem" }}>Send money with Zelle</IonText>
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
      <MakeBankingTransferButton shape="round" size="small" />
    </IonCard>
  );
}
