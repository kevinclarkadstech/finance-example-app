import { AccountCurrencies } from "@banking/constants/account-currencies";
import { AccountTypes } from "@banking/constants/account-types";
import { AccountTransaction } from "./account-transaction";

export type Account = {
  id: string;
  name: string;
  balance: number;
  availableBalance: number;
  currency: AccountCurrencies; // Extendable for other currencies
  created: string; // ISO 8601 date string
  updated: string; // ISO 8601 date string
  lastTransaction: string; // ISO 8601 date string
  accountNumber: string;
  routingNumber: string;
  type: AccountTypes;
  recentTransactions: AccountTransaction[];
};
