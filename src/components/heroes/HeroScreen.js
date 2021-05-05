import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesByid } from '../selectors/getHeroesByid';

export const HeroScreen = () => {

   // const params= useParams();// Extrae los parametros del link como objeto
   const {heroeId}=useParams(); 
   
   const hero= getHeroesByid(heroeId);

    if(!hero){// vvalido si no existe heroe
        return (
            <Redirect to="/"/>
        )     
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
       }=hero
       
    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    )
}
