import {useState, useEffect } from "react";
import { getData } from "../services/serviceApi";
import Style from "../styles/card.module.css";
import { Link } from "react-router-dom"

export default function Card(props) {

    const [imgPk, setImgPk] = useState();

    useEffect( () => {
        getData(props.pokemon.url).then(res => {
            // console.log(res.data.id)
            const img = res.data.sprites.other.home.front_default;
            setImgPk(img)
            
        })
    }, [])

    return (
        <Link to={`/pokemon/${props.pokemon.name}`} className={Style.container}>
            <img src={imgPk} alt="pokemon img" />
            <h3>{props.pokemon.name}</h3>
        </Link>
    )
}