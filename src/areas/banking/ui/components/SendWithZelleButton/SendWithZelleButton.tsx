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
      routerLink="/banking/send-money-with-zelle"
      style={{
        ...{
          "--padding-start": "8px",
          "--padding-end": "8px",
          "--padding-top": "0px",
          "--padding-bottom": "0px",
          "--background": zelleBackgroundColor,
          "--background-focused": zelleBackgroundColor,
          "--background-hover": zelleBackgroundColor,
          "--background-activated": zelleBackgroundColor,
          "--background-pressed": zelleBackgroundColor,
          "--background-activated-focused": zelleBackgroundColor,
          "--background-activated-hover": zelleBackgroundColor,
          "--background-activated-pressed": zelleBackgroundColor,
          "--color": zelleTextColor,
          fontSize: props.fontSize || "0.7rem",
        },
        ...{
          width: props.width,
          height: props.height,
        },
        ...props.style,
      }}
      {...props}
    >
      <ZelleIcon
        height={props.iconSize ?? "20px"}
        width={props.iconSize ?? "20px"}
      />
      Send money with Zelle
    </IonButton>
  );
}
