import { mockCheckingAccount } from "@banking/mocks/mock-checking-account";
import { mockSavingsAccount } from "@banking/mocks/mock-savings-account";
import { useAuth } from "@shared/ui/hooks/useAuth/useAuth";

export function useCurrentUserAccounts() {
  const currentUser = useAuth().currentUser;
  if (!currentUser) {
    return [];
  }

  return [mockCheckingAccount, mockSavingsAccount];
}
