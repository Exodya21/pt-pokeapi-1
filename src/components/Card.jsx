import Style from "../styles/card.module.css";

export default function Card() {
    return (
        <div className={Style.container}>
            <img src="" alt="pokemon img" />
            <p>Name of pokemon</p>
        </div>
    )
}