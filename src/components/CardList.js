import logo from '../assets/pokeball.png';
import '../styles/cardList.css';
import Card from "./Card"
import {getPokeNameANDUrl, getData} from "../services/serviceApi";
import { useEffect, useState } from 'react';

export default function CardList() {

  const [exist, setExist] = useState(false);
  const [nameANDurl, setNameANDurl] = useState();
  
  
  useEffect( () => {
    getPokeNameANDUrl()
    .then( res =>  {
      const info1 = res.results
      setNameANDurl(info1)
      setExist(true)
      
      // console.log(res.results)
    })
    
  }, [])

  return (
    <div className="App App-header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        
        <h1>Pokimon</h1>
        {
          exist ? 
          (
          console.log(nameANDurl),
          nameANDurl.map(
            (poke, index) => (
              <Card pokemon={poke} key={index}/>)
            )
          )
          :
          <p>Loading ...</p>
        }
      </main>
    </div>
  );
}


