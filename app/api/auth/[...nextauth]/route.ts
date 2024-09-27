import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../(sites)/lib/models/mongodb';
import User  from '../../../(sites)/lib/models/users';
import { NextAuthOptions, RequestInternal } from 'next-auth';
import mongoose from 'mongoose';

// interface Credentials {
//   email: string;
//   password: string;
// }
interface AuthUser {
  id: string;
  email: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<AuthUser | null>{
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const client = await connectToDatabase();
        const db = client.db();
        
        // Find user in the database
        const user = await db.collection('users').findOne({ email: credentials.email });
        
        if (user && user.password === credentials.password) { 
          return { email: user.email,id:user.id }; // I'm returning object here da
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
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});
