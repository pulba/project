export const prerender = false;


export async function GET({ params, request }) {
    return new Response(import.meta.env.PUBLIC_TURSO_DATABASE_URL +', '+import.meta.env.PUBLIC_TURSO_AUTH_TOKEN);
  }