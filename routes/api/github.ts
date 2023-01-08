import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log('GET req : ', req);
    const url = new URL(req.url)
    const q = url.searchParams.get('q')
    console.log('GET queries : ', q);

    const res = await fetch(`https://api.github.com/users/${q}`);
    if (res.status === 404) {
      return new Response(null, { status: 404 });
    }

    const user = await res.json();
    return new Response(JSON.stringify(user));
  },

  async POST(req) {
    console.log('POST req : ', req);
    const body = await req.json();
    console.log('POST body :', body);

    const res = await fetch(`https://api.github.com/users/${body.q}`);
    if (res.status === 404) {
      return new Response(null, { status: 404 });
    }

    const user = await res.json();
    return new Response(JSON.stringify(user));
  }
}