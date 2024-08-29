
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string"
import { GetHeroesByName } from "../helpers/GetHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchHeroes = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const {q = ""} = queryString.parse(location.search)

  const heroes = GetHeroesByName(q)

  const showSearch = (q.length === 0 )

  const showError = (q.length > 0 ) && heroes.length === 0

  const {searchText, onInputChanhge} = useForm({
    
    searchText: q

  })

  const onSearch = (event) => {
        
    event.preventDefault()

   // if(searchText.trim().lenght <= 1) return 

    navigate(`?q=${searchText}`);
    
  }



  return (
    <div className="mt-5">

      <div className="row">
       
        <div className="col-5 animate__animated animate__fadeInLeft">
       
          <h4>Searching</h4>

          <hr></hr>

          <form aria-label="form" onSubmit={onSearch}>
       
            <input
       
                type="text"
       
                placeholder="Search a hero"
              
                className="form-control"
              
                name="searchText"
              
                autoComplete="off"

                value={searchText}

                onChange={onInputChanhge}
            >

            </input>

            <button className="btn btn-danger mt-3">Search</button>
          
          </form>
        
        </div>

        <div className="col-7 animate__animated animate__fadeInRight">
        
          <h4>Results</h4>

          <hr></hr>

          {/*
            (q === "") 
            ? <div className="alert alert-primary">Search a hero</div> 
            : (heroes.length === 0) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
            */
          }

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? "" : "none"}}>Search a hero</div> 

          <div aria-label="div"  className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? "" : "none"}}>No hero with <b>{q}</b></div>

          {
          
            heroes.map(hero => (
              
              <HeroCard key={hero.id} {...hero }></HeroCard>
              
              
            ))

          }

        
        </div>
      
      </div>
    
    </div>
  
  );

};