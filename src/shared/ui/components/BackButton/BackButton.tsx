import { IonBackButton } from "@ionic/react";

export function BackButton({
  defaultHref = "/",
  text = "Back",
  hideText = true,
}: {
  defaultHref?: string;
  text?: string;
  hideText?: boolean;
}) {
  return (
    <IonBackButton defaultHref={defaultHref} text={hideText ? "" : text} />
  );
}
