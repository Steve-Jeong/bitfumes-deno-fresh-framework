/** @jsx h */
import {h} from "preact"
import { useState } from "preact/hooks";
import {tw} from "@twind";

export default function SearchGithubUser() {
  const [user, setUser] = useState({});
  const [q, setQ] = useState('');
  const [found, setFound] = useState(false)

  async function onSubmit(e) {
    e.preventDefault();

    // const res = await fetch(`/api/github?q=${q}`);   // api로 GET handler 호출 -> 잘된다.  

    // const res = await fetch(`/using_island/github?q=${q}`);     // route에 있는 GET handler는 호출도 안된다. 왜 그럴까?
   
    // const res = await fetch('/using_island/github', {     // using handler POST in the routes -> 잘된다
    //   method:"POST",
    //   body: JSON.stringify({q})
    // });

    // const res = await fetch('/api/github', {     // using handler POST in the api -> 잘된다.
    //   method:"POST",
    //   body: JSON.stringify({q})
    // });

    const res = await fetch(`https://api.github.com/users/${q}`); // without using handler -> 잘된다


    console.log('island res.status : ', res.status);
    if(res.status === 404){
      setUser({})
      setFound(false)
    } else {
      const data = await res.json();
      setUser(data)
      setFound(true)
    }
  }

  function handleInput(e) {
    setQ(e.target.value)
  }

  return (
    <div>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            class={tw`border rounded shadow-md px-4 py-2 w-72`}
            name="q"
            value={q}
            onInput={handleInput}
            placeholder="Search Github user by Username"
          />
          <button class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`} type="submit">Search</button>
        </form>
      </section>

      {found ? (
        <section class={tw`mt-10`}>
          <a href={user.html_url} target="_blank">
            <p class={tw`text-2xl text-center`}>Username: {user.login}</p>
            <img class={tw`m-auto border rounded shadow-md w-32 h-32`} src={user.avatar_url} alt={user.login} />
          </a>
        </section>
      ) : q ==='' ? null : (
        <section class={tw`mt-10`}>
            <p class={tw`text-2xl text-center`}>Username: '{q}' not found </p>
        </section>
      )}
    </div>
  );
}
