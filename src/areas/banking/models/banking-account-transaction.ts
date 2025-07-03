import { BankingAccountCurrencies } from "@banking/constants/banking-account-currencies";
import { BankingTransactionStatus } from "@banking/constants/banking-transaction-status";

export type BankingAccountTransaction = {
  id: string;
  created: string; // ISO 8601 date string
  updated: string; // ISO 8601 date string
  amount: number; // Amount in the smallest currency unit (e.g., cents for USD)
  currency: BankingAccountCurrencies;
  description: string; // Description of the transaction
  type: "credit" | "debit"; // Type of transaction
  accountId: string; // ID of the associated banking account
  userId: string; // ID of the user who made the transaction
  category?: string; // Optional category for the transaction
  tags?: string[]; // Optional tags for the transaction
  metadata?: Record<string, any>; // Optional metadata for additional information
  status: BankingTransactionStatus;
};
