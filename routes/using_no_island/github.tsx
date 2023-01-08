/** @jsx h */
import { h } from "preact";
import Layout from "../../components/layouts.tsx";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log('GET req :', req)
    const url = new URL(req.url)
    console.log('url : ', url);
    const q = url.searchParams.get('q')
    const res = await fetch(`https://api.github.com/users/${q}`);
    if (res.status === 404) {
      return await ctx.render(null);
    }

    const user = await res.json();
    return await ctx.render(user);
  }
}

export default function Github({ data }: PageProps) {
  return (
    <Layout>
      <div class={tw`flex justify-center m-auto`}>
        <div >
          <section>
            <form>
              <input
                type="text"
                class={tw`border rounded shadow-md px-4 py-2 w-72`}
                name="q"
                placeholder="Search Github user by Username"
              />
              <input
                type="email"
                class={tw`border rounded shadow-md px-4 py-2 w-72`}
                name="email"
                placeholder="enter email"
              />
              <button
                class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`}
                type="submit"
              >
                Search
              </button>
            </form>
          </section>

          {data?.name
            ? (
              <section class={tw`mt-10`}>
                <a class={tw`flex-col justify-start m-auto`} href={data.html_url} target="_blank">
                  <p class={tw`text-2xl text-center`}>Username: {data.login}</p>
                  <img
                    class={tw`m-auto border rounded shadow-md w-32 h-32`}
                    src={data.avatar_url}
                    alt={data.login}
                  />
                </a>
              </section>
            )
            : (
              <section class={tw`mt-10`}>
                <p class={tw`text-2xl text-center`}>
                  Username: not found
                </p>
              </section>
            )}
        </div>
      </div>
    </Layout>
  );
}
