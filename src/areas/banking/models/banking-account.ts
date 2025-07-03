import { BankingAccountCurrencies } from "@banking/constants/banking-account-currencies";
import { BankingAccountTypes } from "@banking/constants/banking-account-types";
import { BankingAccountTransaction } from "./banking-account-transaction";

export type BankingAccount = {
  id: string;
  name: string;
  balance: number;
  availableBalance: number;
  currency: BankingAccountCurrencies; // Extendable for other currencies
  created: string; // ISO 8601 date string
  updated: string; // ISO 8601 date string
  lastTransaction: string; // ISO 8601 date string
  accountNumber: string;
  routingNumber: string;
  type: BankingAccountTypes;
  recentTransactions: BankingAccountTransaction[];
};
