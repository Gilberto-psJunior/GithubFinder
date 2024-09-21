import { userProps } from "../types/user";
import { Search } from "../components/Search";
import { useState } from "react";

export function Home() {
  const [user, setUser] = useState<userProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    const { name ,avatar_url, login, location, followers, following } = data;
    const userData:userProps ={
        name,
        avatar_url,
        login,
        location,
        followers,
        following,
      };
      setUser(userData);
    }
  

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
      <h3>Nome : {user?.name}</h3>
      <p>{user?.location}</p>
      <p>seguindo : {user?.following}</p>
      <p>seguidores : {user?.followers}</p>

    </div>
  );
};
