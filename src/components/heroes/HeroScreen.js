import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'



import { getHeroesByid } from '../selectors/getHeroesByid';

export const HeroScreen = ({history}) => {

   // const params= useParams();// Extrae los parametros del link como objeto
   const {heroeId}=useParams(); 
  
   const hero=useMemo(()=>getHeroesByid(heroeId), [heroeId])
//   const hero= getHeroesByid(heroeId);

    if(!hero){// vvalido si no existe heroe
        return (
            <Redirect to="/"/>
        )     
    }
    
    const handleReturn=()=>{// validar para que si no hay un back.. se vuelve a marvel
        if(history.length<=2){
            history.push('/')
        }else{
            history.goBack();
        }
    }


    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
       }=hero

    return (
        <div className="row mt-5">
            
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b>{alter_ego}</li>
                    <li className="list-group-item"> <b>publisher:</b>{publisher}</li>
                    <li className="list-group-item"> <b>Firs appearence:</b>{first_appearance}</li>
                </ul>
                <h5>characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info "
                    onClick={handleReturn}
                >
                    Return
                </button>


            </div>
        </div>
    )
}
