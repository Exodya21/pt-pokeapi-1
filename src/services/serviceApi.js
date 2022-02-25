import axios from "axios";

export async function getPokeNameANDUrl() {
    // let data;  

    return fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
    //      .then(res => {
    //            // console.log(res.data.results)
    //            data = res.data.results
    //     })
    // console.log(data)
    // return data
}

export async function getData(url) {
    return axios.get(url);
}

export async function getPokeByName(pokeName) {
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeName);
}