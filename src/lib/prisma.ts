import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
// Relative, not `@/` — the Better Auth CLI loads this file outside the
// Next.js resolver and can't follow the alias.
import { PrismaClient } from "../generated/prisma/client";

// Neon talks Postgres over a WebSocket and won't pick one up on its own.
// Node 22+ ships a spec-compliant global; on anything older, install `ws`
// and hand that over instead.
neonConfig.webSocketConstructor = WebSocket;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// `next dev` re-evaluates modules on every edit. Without the global, each
// reload would leak another connection pool.
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaNeon({ connectionString: process.env.DATABASE_URL }),
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
