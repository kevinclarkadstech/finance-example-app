import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonText,
  IonToolbar,
} from "@ionic/react";
import {
  sunnyOutline,
  cloudyNightOutline,
  cashOutline,
  cloudyNight,
  sunny,
  person,
  personOutline,
  personCircleOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { useReactive } from "../../hooks/useReactive/useReactive";
// import { currentTheme$ } from "../../../../state/global/current-theme";
import { useCurrentTheme } from "../../hooks/useCurrentTheme/useCurrentTheme";

export function AppHeader() {
  const { theme, toggleTheme } = useCurrentTheme();
  // useReactive(currentTheme$);
  return (
    <IonHeader>
      <IonToolbar
        color="primary"
        style={{
          "--min-height": "48px",
          height: "48px",
          "--padding-top": "0px",
          "--padding-bottom": "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        {/* <IonAvatar
          slot="start"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            height: "64px",
            width: "64px",
          }}
        >
          <img
            src="images/me_thumb.jpg"
            alt="Kevin Clark"
            style={{
              height: "64px",
              width: "64px",
            }}
          />
        </IonAvatar> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "48px",
          }}
        >
          {/* <div style={{ display: "flex", alignItems: "center" }}>
            <IonIcon
              slot="start"
              icon={cashOutline}
              size="large"
              color="secondary"
              style={{
                marginLeft: "15px",
                marginRight: "10px",
              }}
            />
            <IonText color={theme === "dark" ? "darkest" : "lightest"}>
              SoFi
            </IonText>
          </div> */}
          <img
            src="https://d3331otr86r7j1.cloudfront.net/sofiinc/auth/sofi-auth/assets/branding/logos/sofi_logo_white_416x116.png"
            alt="SoFi Logo"
            height="24"
            style={{
              marginLeft: "10px",
            }}
          />
          <IonButtons slot="end" style={{ marginRight: "3px" }}>
            <IonButton
              slot="icon-only"
              size="small"
              style={{
                maxHeight: "28px",
                maxWidth: "28px",
                minWidth: "28px",
                minHeight: "28px",
                padding: "0",
                "--padding-start": "0px",
                "--padding-end": "0px",
                "--padding-top": "0",
                "--padding-bottom": "0",
              }}
              role="button"
              color="lightest"
              fill="clear"
              shape="round"
            >
              <IonIcon
                icon={personCircleOutline}
                color="lightest"
                style={{ width: "28px", height: "28px" }}
              />
            </IonButton>
            <IonButton
              size="small"
              style={{
                maxHeight: "24px",
                maxWidth: "24px",
                minWidth: "24px",
                minHeight: "24px",
              }}
              role="button"
              color="lightest"
              fill="solid"
              shape="round"
              onClick={() => {
                console.log("Toggle theme");
                toggleTheme();
                // currentTheme$.set(
                //   currentTheme$.value === "light" ? "dark" : "light"
                // );
              }}
            >
              <IonIcon
                title="theme-toggle-icon"
                color={theme === "dark" ? "warning" : "tertiary"}
                icon={theme === "dark" ? sunny : cloudyNight}
              />
            </IonButton>
          </IonButtons>
        </div>
      </IonToolbar>
    </IonHeader>
  );
}
