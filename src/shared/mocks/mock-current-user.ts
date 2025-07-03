import { CurrentUser } from "@shared/models/current-user";

export const mockCurrentUser: CurrentUser = {
  id: "abc",
  firstName: "John",
  lastName: "Doe",
  displayName: "John Doe",
  identity: {
    type: "email-password",
    email: "johndoe@test.com",
  },
  created: "2025-01-01T00:00:00Z",
  updated: "2025-01-01T00:00:00Z",
  lastLogin: "2025-05-01T00:00:00Z",
  emails: {
    "johndoe@test.com": {
      verified: true,
      primary: true,
    },
  },
  phoneNumbers: {
    "+1234567890": {
      verified: true,
      primary: false,
    },
  },
};
