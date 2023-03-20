import "./App.css";
import BannerImg from "./assets/RMBannerestesi.jpg";
import { useState } from "react";
import Character from "./Character";
import Location from "./Location";
import Episode from "./Episode";
import Search from "./Search";
import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
export type TypeCharacter = { id: number; name: string };

const Container = ({ prop1 }: { prop1: number }) => {
  const [card, setCard] = useState<{ results: TypeCharacter[] }>();
  const [cardType, setCardType] = useState(String);
  const [stateValue, setStateValue] = useState("");
  const [nextCount, setNextCount] = useState(1);

  const next = () => {
    nextCount == 3 ? setNextCount(1) : setNextCount(nextCount + 1);
  };
  /*  const apiCall = (item: string) => {
    fetch("https://rickandmortyapi.com/api/" + item)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("hi");
        setCard(data);
        setCardType(item);
        typeof card;
      });
  };*/

  return (
    <div className="body">
      <div>
        <img className="banner-general" src={BannerImg} alt="No" />
      </div>
      <div>
        <Search stateValue={stateValue} setStateValue={setStateValue} />
      </div>
      <div className="bannerbuttons">
        <button
          className="bannerbuttons "
          onClick={() => {
            next();
          }}
        >
          {" "}
          next{" "}
        </button>
      </div>
      <div className="bannerbuttons">
        <button className="banner">
          {" "}
          <Link className="bannerbuttons" to="/characters">
            Characters
          </Link>
        </button>
        <button className="banner">
          {" "}
          <Link className="bannerbuttons" to="/locations">
            Locations
          </Link>
        </button>
        <button className="banner">
          {" "}
          <Link className="bannerbuttons" to="/episodes">
            Episodes
          </Link>
        </button>
        <Routes>
          <Route
            path="/characters"
            element={
              <Character
                prop2={card}
                searchValue={stateValue}
                apiprop={"character"}
              />
            }
          />

          <Route
            path="/locations"
            element={
              <Location
                prop3={card}
                anotherSearchValue={stateValue}
                apiprop={"location"}
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
