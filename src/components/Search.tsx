import React from "react";
import { BsSearch } from "react-icons/bs";

export const Search = ()=>{
    return(
        <div>
            <h2>Busque por um usúario:</h2>
            <p>Conheça seus melhores repositorios</p>
        <div>
            <input  type="text" placeholder="Digite o nome do usúario" />
            <button><BsSearch/></button>
        </div>
        </div>
    )
}