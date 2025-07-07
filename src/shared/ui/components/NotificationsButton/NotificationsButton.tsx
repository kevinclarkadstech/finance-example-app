import { IonButton, IonBadge, IonIcon } from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";

export function NotificationsButton({
  badgeCount,
  onClick,
}: {
  badgeCount?: number;
  onClick: () => void;
}) {
  return (
    <IonButton size="large" slot="icon-only" onClick={onClick}>
      {badgeCount && badgeCount > 0 && (
        <IonBadge
          color="danger"
          style={{
            position: "absolute",
            top: "3px",
            right: "-5px",
            fontSize: "0.6rem",
            padding: "2px 3px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {badgeCount > 99 ? "99+" : badgeCount}
          </div>
        </IonBadge>
        // <div
        //   style={{
        //     position: "absolute",
        //     top: "-2px",
        //     right: "-5px",
        //     fontSize: "0.6rem",
        //     padding: "0",
        //     width: "8px",
        //     height: "8px",
        //     zIndex: 1000,
        //     backgroundColor: "var(--ion-color-danger)",
        //     color: "white",
        //     borderRadius: "50%",
        //   }}
        // ></div>
      )}
      <IonIcon icon={notificationsOutline} />
    </IonButton>
  );
}
