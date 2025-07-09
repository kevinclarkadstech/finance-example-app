import { Account } from "@banking/models/account";

export const mockSavingsAccount: Account = {
  id: "savings-account-1",
  name: "My Savings Account",
  type: "savings",
  balance: 6978.23,
  availableBalance: 6978.23,
  currency: "USD",
  created: "2025-01-01T00:00:00Z",
  updated: "2025-01-01T00:00:00Z",
  lastTransactionDate: "2025-01-02T12:00:00Z",
  accountNumber: "987654321",
  routingNumber: "123456789",
  recentTransactions: [],
};
