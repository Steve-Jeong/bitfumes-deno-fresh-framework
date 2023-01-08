// import { Handlers } from "$fresh/server.ts"

// export const handler: Handlers = {
//   async GET(req, ctx) {
//     console.log('GET req : ', req);
//     const url = new URL(req.url)
//     const q = url.searchParams.get('q')
//     const res = await fetch(`https://api.github.com/users/${q}`);
//     if (res.status === 404) {
//       return await ctx.render(null);
//     }

//     const user = await res.json();
//     return await ctx.render(user);
//   }
// }

// import { Handlers } from "$fresh/server.ts"

// export const handler: Handlers = {
//   async GET(req, ctx) {
//     const url = new URL(req.url)
//     console.log('url : ', url);
//     const q = url.searchParams.get('q')
//     const res = await fetch(`https://api.github.com/users/${q}`);
//     if (res.status === 404) {
//       return await ctx.render(null);
//     }

//     const user = await res.json();
//     return await ctx.render(user);
//   }
// }