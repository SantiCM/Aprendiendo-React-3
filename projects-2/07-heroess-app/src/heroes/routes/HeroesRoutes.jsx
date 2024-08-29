import { Navigate, Route, Routes } from "react-router-dom";


import { MarvelPage, DCPage, SearchHeroes, PagesHeroes } from "../pages";
import { Navbar } from "../../ui/components/Navbar";

export const HeroesRoutes = () => {
  return (
    <>

      <Navbar></Navbar>
    
        <div className="container">
    
          <Routes>
    
            <Route path="marvel" element={<MarvelPage></MarvelPage>}></Route>

            <Route path="dc" element={<DCPage></DCPage>}></Route>

            <Route path="search" element={<SearchHeroes></SearchHeroes>}></Route>

            <Route path="hero/:id" element={<PagesHeroes></PagesHeroes>}></Route>

            <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
          
          </Routes>
        
        </div>
         
    </>
  
  );

};

// En el caso del hero, se pone hero/:heroid y ahi ya se riderecciona