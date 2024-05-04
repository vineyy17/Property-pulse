import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signin({ profile }) {
      // Connect to the db
      // Check if user exists
      // If not, then add the user to the db
      // Return true to allow signin
    },
    // Modifies the session object
    async session({ session }) {
      // Get user from db
      // Assign the user id to the session
      // Return session
    },
  },
};
