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
      color="light"
      fill="solid"
      routerLink="/banking/transfers"
      size="small"
      shape="round"
      style={{
        "--padding-start": "16px",
        "--padding-end": "16px",
        ...props.style,
      }}
      {...props}
    >
      <IonIcon
        color="medium"
        icon={cash}
        slot="start"
        style={{ fontSize: iconSize }}
      />
      <span style={{ marginLeft: "4px" }} />
      Make Banking Transfer
    </IonButton>
  );
}
