import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { currentTheme$ } from "@shared/state/global/current-theme";
import { useReactive } from "@shared/ui/hooks/useReactive/useReactive";
import {
  sunnyOutline,
  cloudyNightOutline,
  cashOutline,
  cloudyNight,
  sunny,
} from "ionicons/icons";

export function AppHeader() {
  useReactive(currentTheme$);
  return (
    <IonHeader>
      <IonToolbar color="primary">
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
            height: "64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
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
            {/* <IonText color={theme === "dark" ? "darkest" : "lightest"}> */}
            Kevin Clark Dev {currentTheme$.value === "dark" ? "🌙" : "☀️"}
            {/* </IonText> */}
          </div>
          <IonButtons slot="end" style={{ marginRight: "10px" }}>
            <IonButton
              role="button"
              color="lightest"
              fill="solid"
              shape="round"
              onClick={() => {
                console.log("Toggle theme");
                currentTheme$.set(
                  currentTheme$.value === "light" ? "dark" : "light"
                );
              }}
            >
              <IonIcon
                title="theme-toggle-icon"
                color={currentTheme$.value === "dark" ? "warning" : "tertiary"}
                icon={currentTheme$.value === "dark" ? sunny : cloudyNight}
              />
            </IonButton>
          </IonButtons>
        </div>
      </IonToolbar>
    </IonHeader>
  );
}
