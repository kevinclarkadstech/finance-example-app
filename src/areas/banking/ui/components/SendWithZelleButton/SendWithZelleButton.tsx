import { IonButton } from "@ionic/react";
import { ZelleIcon } from "./ZelleIcon/ZelleIcon";

const zelleBackgroundColor = "#600c8a";
const zelleTextColor = "#fff";

export function SendWithZelleButton(
  props: {
    width?: string;
    height?: string;
    iconSize?: string;
    fontSize?: string;
  } & React.ComponentProps<typeof IonButton>
) {
  return (
    <IonButton
      color="zelle"
      routerLink="/banking/send-money-with-zelle"
      size="small"
      shape="round"
      style={{
        ...{
          "--padding-start": "8px",
          "--padding-end": "8px",
          "--padding-top": "0px",
          "--padding-bottom": "0px",
          "--background": zelleBackgroundColor,
          //   "--background-focused": zelleBackgroundColor,
          //   "--background-hover": zelleBackgroundColor,
          //   "--background-activated": zelleBackgroundColor,
          //   "--background-pressed": zelleBackgroundColor,
          //   "--background-activated-focused": zelleBackgroundColor,
          //   "--background-activated-hover": zelleBackgroundColor,
          //   "--background-activated-pressed": zelleBackgroundColor,
          "--color": zelleTextColor,
          fontSize: props.fontSize,
        },
        ...{
          width: props.width,
          height: props.height,
        },
        ...props.style,
      }}
      {...props}
    >
      <ZelleIcon height={props.iconSize} width={props.iconSize} />
      <span style={{ marginLeft: "4px" }} />
      Send money with Zelle
    </IonButton>
  );
}
