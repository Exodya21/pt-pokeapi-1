import {useState, useEffect } from "react";
import { getData } from "../services/serviceApi";
import Style from "../styles/card.module.css";

export default function Card(props) {

    const [imgPk, setImgPk] = useState();

    useEffect( () => {
        getData(props.pokemon.url).then(res => {
            console.log(res.data.sprites.other.home.front_default)
            const img = res.data.sprites.other.home.front_default;
            setImgPk(img)
        })
    }, [])

    return (
        <div className={Style.container}>
            <img src={imgPk} alt="pokemon img" />
            <h3>{props.pokemon.name}</h3>
        </div>
    )
}