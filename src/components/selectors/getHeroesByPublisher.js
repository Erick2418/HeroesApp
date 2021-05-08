import { heroes } from "./../data/heroes";

export const getHeroesByPublisher=(publisher)=>{
    /*Filtro para que solo se muestren los de Dc o Marvel.. caso constrario dara error */
    const validPublishers=['DC Comics','Marvel Comics'];
   
    if( !validPublishers.includes(publisher) ){
        throw new Error(`Publisher "${publisher}" no es correcto `);
    }
   
    return heroes.filter(hero=> hero.publisher=== publisher);

}