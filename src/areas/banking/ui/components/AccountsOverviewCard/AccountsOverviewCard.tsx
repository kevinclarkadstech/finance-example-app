import {
  IonCard,
  IonCardHeader,
  IonToolbar,
  IonTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import "./AccountsOverviewCard.css";
import { useCurrentUserAccounts } from "@banking/ui/hooks/useCurrentUserAccounts/useCurrentUserAccounts";

export function AccountsOverviewCard() {
  const accounts = useCurrentUserAccounts();
  return (
    <IonCard color="lightest" className="accounts-overview-card">
      <IonCardHeader>
        <IonToolbar>
          <IonTitle>Accounts Overview</IonTitle>
        </IonToolbar>
      </IonCardHeader>
      <IonCardContent color="lightest">
        <IonList color="lightest">
          {accounts.map((account) => (
            <IonItem
              detail
              routerLink={`/banking/accounts/${account.id}`}
              key={account.id}
            >
              <IonLabel style={{ fontSize: "0.7rem" }}>
                {account.name.toUpperCase()}
              </IonLabel>
              <IonLabel slot="end">${account.balance}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
