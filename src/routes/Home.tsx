import { userProps } from "../types/user";
import { Search } from "../components/Search";
import { useState } from "react";
import { User } from "../components/User";
import { Error } from "../components/Error";



export function Home() {
  const [user, setUser] = useState<userProps | null>(null);
  const [error,setError] =useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    
    if(res.status ===404){
        setError(true);
        return;
    }

    const {public_repos, bio,name ,avatar_url, login, location, followers, following } = data;
    const userData:userProps ={
        bio,
        public_repos,
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
      {user && <User{...user}/>}
      {error && <Error/>}
      

    </div>
  );
};
