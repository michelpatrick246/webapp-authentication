import { env } from "@/env";
import {prisma} from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GithubProvider({
        clientId: env.GITHUB_ID,
        clientSecret: env.GITHUB_SECRET
    })],
})