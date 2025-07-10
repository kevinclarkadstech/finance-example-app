import { useCurrentUserAccounts } from "@banking/ui/hooks/useCurrentUserAccounts/useCurrentUserAccounts";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BackButton } from "@shared/ui/components/BackButton/BackButton";

export function AccountDetailPage({ accountId }: { accountId: string }) {
  const account = useCurrentUserAccounts().find(
    (account) => account.id === accountId
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <BackButton defaultHref="/banking" />
          </IonButtons>
          <IonTitle>Account Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!account ? (
          <div>No account found</div>
        ) : (
          <>
            <div
              className="ion-padding"
              style={{
                width: "100%",
                backgroundColor: "var(--ion-color-lightest)",
                color: "var(--ion-color-dark)",
              }}
            >
              <IonText color="medium">
                <h1
                  style={{
                    fontSize: "0.9rem",
                    margin: "0",
                    paddingTop: "0",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {account.name} - {account.accountNumber}
                </h1>
                {/* <p style={{ padding: "0", fontSize: "0.8rem", margin: "0" }}>
                  {account.type.charAt(0).toUpperCase() + account.type.slice(1)}{" "}
                  Account
                </p> */}
              </IonText>
              <div style={{ height: "0.6rem" }}></div>
              <IonText color="darkest">
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  {account.balance.toLocaleString("en-US", {
                    style: "currency",
                    currency: account.currency,
                  })}
                </h2>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--ion-color-medium)",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Available Balance
                </span>
              </IonText>
            </div>
            <IonCard>
              <IonCardHeader style={{ padding: "0" }}>
                <IonToolbar color="light">
                  <IonTitle>Account Details</IonTitle>
                </IonToolbar>
              </IonCardHeader>
              <IonCardContent style={{ padding: "0" }}>
                <IonList>
                  <IonItem>
                    <IonLabel>Account Holder</IonLabel>
                    <IonNote style={{ fontSize: "0.8rem" }} slot="end">
                      {account.name}
                    </IonNote>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Account Type</IonLabel>
                    <IonNote style={{ fontSize: "0.8rem" }} slot="end">
                      {account.type.charAt(0).toUpperCase() +
                        account.type.slice(1)}
                    </IonNote>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Currency</IonLabel>
                    <IonNote style={{ fontSize: "0.8rem" }} slot="end">
                      {account.currency}
                    </IonNote>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonCard style={{ padding: "0" }}>
              <IonCardHeader style={{ padding: "0" }}>
                <IonToolbar color="light">
                  <IonTitle>Recent Transactions</IonTitle>
                </IonToolbar>
              </IonCardHeader>
              <IonCardContent style={{ padding: "0" }}>
                {account.recentTransactions.length > 0 ? (
                  <IonList style={{ padding: "0" }}>
                    {account.recentTransactions.map((transaction) => (
                      <IonItem
                        key={transaction.id}
                        detail
                        routerLink={`/banking/transactions/${transaction.id}`}
                      >
                        <p>{transaction.description}</p>
                        <p slot="end">
                          {transaction.amount.toLocaleString("en-US", {
                            style: "currency",
                            currency: transaction.currency,
                          })}
                        </p>
                      </IonItem>
                    ))}
                  </IonList>
                ) : (
                  <div className="ion-padding">
                    No recent transactions found.
                  </div>
                )}
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}
