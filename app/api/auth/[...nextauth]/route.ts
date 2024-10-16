import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../(sites)/lib/models/mongodb';
import User from '../../../(sites)/lib/models/users';
import bcrypt from 'bcryptjs';
import { NextAuthOptions, RequestInternal } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

interface AuthUser {
  id: string;
  email: string;
}

// const googleId: string | undefined = process.env.GOOGLE_CLIENT_ID;
// const googleSecret: string | undefined = process.env.GOOGLE_CLIENT_SECRET;

// if (!googleId && !googleSecret) {
//   throw new Error("Invalid google auth credentials")
// }

const Options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:'496438207267-5sm1joa903t9k6ddgv5ulaigq8qvql46.apps.googleusercontent.com',
      clientSecret:'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' ,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
        req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>
      ): Promise<AuthUser | null> {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const client = await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with that email');
        }

        const comparePassword = await bcrypt.compare(credentials.password, user.password);

        if (comparePassword) {
          return { email: user.email, id: user._id };
        } else {
          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
  pages: {
    signIn: '/Login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

const Handler = NextAuth(Options);
export { Handler as GET, Handler as POST };