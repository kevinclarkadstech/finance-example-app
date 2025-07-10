import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  cardOutline,
  cashOutline,
  readerOutline,
  settingsOutline,
  trendingUpOutline,
} from "ionicons/icons";

export const NotificationsListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="" />
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" color="dark">
              <IonIcon slot="icon-only" icon={settingsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="lightest">
        <IonList>
          <IonItem detail>
            <IonIcon color="dark" slot="start" icon={readerOutline} />
            <IonLabel>
              You have a new statement for "My Savings Account". Click to view.{" "}
            </IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon color="primary" slot="start" icon={cashOutline} />
            <IonLabel>
              Are you looking to get a business or personal loan? We have rates
              starting at 0% APR.{" "}
            </IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon color="tertiary" slot="start" icon={cardOutline} />
            <IonLabel>
              You authorized a payment for "My Primary Credit Card" in the
              amount of $150.00 on 10/01/2025.
            </IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon color="success" slot="start" icon={trendingUpOutline} />
            <IonLabel>
              Your unrealized gains for "My Investment Account" have increased
              by 5% this month. Keep up the good work!
            </IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon color="dark" slot="start" icon={readerOutline} />
            <IonLabel>
              You have a new statement for "My Primary Checking Account" Click
              to view.{" "}
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
