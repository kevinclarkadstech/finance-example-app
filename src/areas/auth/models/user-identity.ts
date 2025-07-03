export type UserIdentity =
  | {
      type: "email-password" | "passwordless-email";
      email: string;
    }
  | {
      type: "phone";
      phone: string;
    };
