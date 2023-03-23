import "./App.css";
import BannerImg from "./assets/RMBannerestesi.jpg";
import { useEffect, useState } from "react";
import Character from "./Character";
import Location from "./Location";
import Episode from "./Episode";
import Search from "./Search";
import {
  BrowserRouter,
  Link,
  Router,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from "react-router-dom";
export type TypeCharacter = { id: number; name: string };

const Container = ({ prop1 }: { prop1: number }) => {
  const [searchParams, setSearchParams] = useSearchParams("?page=1");
  const [scopePages, setScopePages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [stateValue, setStateValue] = useState("");
  const [nextCount, setNextCount] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1
  );


  console.log(searchParams.get("page"));
  console.log(searchParams);
  
  const refreshPage = () => {
    setNextCount(1);
    
  };
  const next = () => {
    if (nextCount == totalPages) {
      setNextCount(1)
      setSearchParams("?page="+(1))
    } 
     else {
      setNextCount(nextCount + 1)
    setSearchParams("?page="+(nextCount+1))  
    }
       
  };
  
  const prev = () => {
    if (nextCount == 1) {
      setNextCount(1)
      setSearchParams("?page="+(1))
    } 
     else {
      setNextCount(nextCount - 1)
    setSearchParams("?page="+(nextCount-1))  
    }
  };
  
  return (
    <div className="body">
      <div>
        <img className="banner-general" src={BannerImg} alt="No" />
      </div>
      <div>
        <Search stateValue={stateValue} setStateValue={setStateValue} />
      </div>

      <div className="bannerbuttons-ext">
        <button
          className="next-prev"
          onClick={() => {
            prev();
          }}
        >
          {" "}
          Prev{" "}
        </button>
        <button
          className="next-prev"
          onClick={() => {
            next();
          }}
        >
          {" "}
          Next{" "}
        </button>
      </div>

      <div className="bannerbuttons">
        <button
          className="banner"
          onClick={() => {
            refreshPage();
          }}
        >
          {" "}
          <Link to="/character">
            Characters
          </Link>
        </button>
        <button
          className="banner"
          onClick={() => {
            refreshPage();
          }}
        >
          {" "}
          <Link  to="/locations">
            Locations
          </Link>
        </button>
        <button
          className="banner"
          onClick={() => {
            refreshPage();
          }}
        >
          {" "}
          <Link  to="/episodes">
            Episodes
          </Link>
        </button>
        <Routes>
          <Route
            path="/character"
            element={
              <Character
                page={nextCount}
                searchValue={stateValue}
                apiprop={"character"}
                maxPages={setTotalPages}
                
              />
            }
          />

          <Route
            path="/locations"
            element={
              <Location
                page={nextCount}
                anotherSearchValue={stateValue}
                apiprop={"location"}
                maxPages={setTotalPages}
              />
            }
          />

          <Route
            path="/episodes"
            element={
              <Episode
                page={nextCount}
                theOtherSearchValue={stateValue}
                apiprop={"episode"}
                maxPages={setTotalPages}
              />
            }
          />
        </Routes>
      </div>

      {/* {cardType == "character" ? (
            <div>
          <Character
          prop2={card}
          searchValue={stateValue}          />
          </div>
        ) : cardType == "location" ? (
          <div>
            <Location
            prop3={card}
            anotherSearchValue={stateValue}     />
          </div>
        ) : cardType == "episode" ? (
          <div>
            <Episode 
            prop4={card}
            theOtherSearchValue={stateValue}
            />
             </div>
        ) : (
          <div> </div>
        )} */}
    </div>
  );
};

export default Container;
