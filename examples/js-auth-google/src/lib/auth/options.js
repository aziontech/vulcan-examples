import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET || Azion.env.get("NEXTAUTH_SECRET"),
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID || Azion.env.get("GOOGLE_CLIENT_ID"),
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        Azion.env.get("GOOGLE_CLIENT_SECRET"),
    }),
  ],
  callbacks: {
    signIn: ({ user }) => {
      return true;
    },
    session: ({ session }) => {
      return session;
    },
  },
};

export default authOptions;
