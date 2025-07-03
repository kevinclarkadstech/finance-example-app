import { UserIdentity } from "@auth/models/user-identity";

export type CurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  identity: UserIdentity;
  emails: {
    [emailAddress: string]: {
      verified: boolean;
      primary: boolean;
    };
  };
  phoneNumbers: {
    [phoneNumber: string]: {
      verified: boolean;
      primary: boolean;
    };
  };
  created: string; // ISO 8601 date string
  updated: string; // ISO 8601 date string
  lastLogin: string; // ISO 8601 date string
};
