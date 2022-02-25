import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokeByName } from "../services/serviceApi";

export function DeatailCard () {
    
    let { id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect( () => {
        getPokeByName(id).then(res => setPokemon(res.data) )
    }, [])

    return <p>{console.log(pokemon)}</p>;
}