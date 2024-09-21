import React from "react";
import classes from "../components/Search.module.css" 

type SearchProps={
    loadUser:(userName:string) => Promise<void>;
}

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

export const Search = ({loadUser}:SearchProps)=>{

const [userName,setUsername] = useState("")

    return(
        <div className={classes.search}>
            <h2>Busque por um usúario:</h2>
            <p>Conheça seus melhores repositorios</p>
        <div>
            <input  type="text" placeholder="Digite o nome do usúario" onChange={(e)=> setUsername(e.target.value)} />
            <button onClick={()=> loadUser(userName)}><BsSearch/></button>
        </div>
        </div>
    )
}