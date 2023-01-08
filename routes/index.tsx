/** @jsx h */
import { h } from "preact"
import Layout from '../components/layouts.tsx';
import {tw} from "@twind";
import {
  bgBlue,
  bgRgb24,
  bgRgb8,
  bold,
  italic,
  red,
  rgb24,
  rgb8,
} from "https://deno.land/std@0.171.0/fmt/colors.ts";

export default function index() {
  console.log(red(bold('Hello world')))
  return (
    <Layout>
        <h1 class={tw`text-2xl text-center`}>Welcome to Bitfumes' Fresh Course</h1>
    </Layout>
  )
}
