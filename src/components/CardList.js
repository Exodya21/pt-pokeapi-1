import logo from '../assets/pokeball.png';
import Style from '../styles/cardList.module.css';
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
      console.log(info1)
      setNameANDurl(info1)
      setExist(true)
      
      // console.log(res.results)
    })
    
  }, [])

  return (
    <div className={Style.App_header}>
      <header>
        <img src={logo} className={Style.Ap_logo} alt="logo" />
      </header>
      <main>
        
        <h1>Pokimon</h1>
        <div className={Style.grid_container}>
          
          {
            exist ? 
            (
            console.log(nameANDurl),
            nameANDurl.map(
              (poke, index) => (
                <div className={Style.grid_item}>
                  <Card pokemon={poke} key={index}/>
                </div>
                )
              )
            )
            :
            <p>Loading ...</p>
          }

        </div>

      </main>
    </div>
  );
}


