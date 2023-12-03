import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: "13hrdidrq717n32134lpe45r59",
      clientSecret: "",
      issuer: process.env.COGNITO_ISSUER,
    }),

    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
