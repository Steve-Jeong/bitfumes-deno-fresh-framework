/** @jsx h */
import {h} from "preact"
import Layout from '../../components/layouts.tsx';
import SearchGithubUserWithQueries from "../../islands/SearchGithubUserWithQueries.tsx";
import {tw} from "@twind";

// island를 이용할때에도 주소줄에 query가 나오도록 하고 싶은데 잘 안됨.
export default function Github() {

  return (
    <Layout>
      <div class={tw`flex justify-center`}>
        <div class={tw`m-auto`}>
          <SearchGithubUserWithQueries />
        </div>
      </div>
    </Layout>
  )
}
