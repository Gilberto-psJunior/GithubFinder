import { userprops } from "../types/User"
import { Search } from "../components/Search"
import { useState } from "react"




export function Home(){

    const [user, setUser] = useState<userprops | null>(null);
    return (
        <div>
            <Search/>
            </div>
    );
};