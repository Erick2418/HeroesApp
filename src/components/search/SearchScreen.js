import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';

import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {


    const location= useLocation();
/*+++++++++++++++++++++++++++++++++++ */
    //Param Extractor
const parseParams = (params = "") => {
    const rawParams = params.replace("?", "").split("&");
    const extractedParams = {};
    rawParams.forEach((item) => {
      item = item.split("=");
      extractedParams[item[0]] = item[1];
    });
    return extractedParams;
  };
  
  //Usage
  const {q=''} = parseParams(location.search); // returns an object like:
  // {id:1,name:john...}
/*+++++++++++++++++++++++++++++++++++ */
    
    const initialForm={
        searchText:q
    }
    const[{searchText}, handleInputChange] = useForm(initialForm);


    const heroesFiltered= useMemo(() => getHeroesByName(q), [q]);


    const handleSearch=(e)=>{
        e.preventDefault();
        history.push(`?q=${searchText}`)

    }
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                <form onSubmit={handleSearch}>
                        <input
                            autoComplete="off"
                            type="text"
                            name="searchText"
                            placeholder="Find your Hero"
                            className="form-control"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            >
                        Search...
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4> Results</h4>
                    <hr/>

                    {   (q==='')
                        && 
                        <div className="alert alert-info">
                            Search Hero
                        </div>
                    }
                    {   (q !=='' && heroesFiltered.length===0)
                         &&
                         <div className="alert alert-danger">
                                There is no a hero with {q}
                         </div>                      
                                                    
                    }
                    {
                        heroesFiltered.map( hero=>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>     
            </div>
        </div>
    )
}
