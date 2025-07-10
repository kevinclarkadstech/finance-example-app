import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonText,
  IonTitle,
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
  personCircle,
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
          "--min-height": "56px",
          height: "56px",
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
          <IonIcon
            slot="start"
            icon={cashOutline}
            size="large"
            color="secondary"
            style={{
              marginLeft: "15px",
            }}
          />
          <IonTitle style={{ paddingLeft: "10px" }}>KevFi</IonTitle>
          <IonButtons slot="end" style={{ marginRight: "12px" }}>
            <IonButton slot="icon-only">
              <IonIcon icon={person} color="tertiary" />
            </IonButton>
            <IonButton slot="icon-only" color="lightest" onClick={toggleTheme}>
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
