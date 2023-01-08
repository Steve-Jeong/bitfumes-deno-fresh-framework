import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(): Response {
    const users = [{ name: "Sarthak S2" }, { name: "Anki" }];
    return new Response(JSON.stringify(users));
  },
};
