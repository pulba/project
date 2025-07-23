import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
const client = createClient({
  url: import.meta.env.PUBLIC_TURSO_DATABASE_URL,
  authToken: import.meta.env.PUBLIC_TURSO_AUTH_TOKEN,
});
export const db = drizzle(client);