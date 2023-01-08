/** @jsx h */
import { h } from "preact";
import {tw} from "@twind";

export default function layouts({children}:any) {
  return (
    <div>
        <nav class={tw`w-full px-4 py-3 bg-yellow-800 text-white mb-10`}>
            <a class={tw`mx-4 hover:text-red-300`} href="/">Home</a>
            <a class={tw`mx-4 hover:text-red-300`} href="/about">About</a>
            <a class={tw`mx-4 hover:text-red-300`} href="/using_island/github">Search Github Users Using Island</a>
            <a class={tw`mx-4 hover:text-red-300`} href="/using_no_island/github">Search Github Users Without Using Island</a>
        </nav>
        {children}
    </div>
  )
}
