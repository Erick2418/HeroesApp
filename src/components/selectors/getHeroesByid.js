import { heroes } from "./../data/heroes";

export const getHeroesByid=(id)=>{
/*Filtro los heroes que el primero que aparezca lo muestra.*/
    return heroes.find(hero=> hero.id=== id);

}