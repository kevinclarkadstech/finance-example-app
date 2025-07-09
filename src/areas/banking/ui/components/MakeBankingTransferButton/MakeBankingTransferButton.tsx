import { IonButton, IonIcon } from "@ionic/react";
import { ZelleIcon } from "../SendWithZelleButton/ZelleIcon/ZelleIcon";
import { cash } from "ionicons/icons";

export function MakeBankingTransferButton({
  width,
  height,
  iconSize,
  fontSize,
  ...props
}: {
  width?: string;
  height?: string;
  iconSize?: string;
  fontSize?: string;
} & React.ComponentProps<typeof IonButton> & {
    style?: React.CSSProperties;
  }) {
  return (
    <IonButton
      color="tertiary"
      fill="outline"
      routerLink="/banking/transfers"
      size="small"
      shape="round"
      style={{
        ...props.style,
      }}
      {...props}
    >
      <IonIcon icon={cash} slot="start" style={{ fontSize: iconSize }} />
      <span style={{ marginLeft: "4px" }} />
      Make Banking Transfer
    </IonButton>
  );
}
