import "./App.css";
import BannerImg from "./assets/RMBannerestesi.jpg";
import { useState } from "react";
import Character from './Character'
import Location from './Location'
import Episode from './Episode'
import Search from './Search'
export type TypeCharacter = { id: number; name: string };

const Container = ({ prop1 }: { prop1: number }) => {
  const [card, setCard] = useState<{ results: TypeCharacter[] }>();
  const [cardType, setCardType] = useState(String);
  const [stateValue, setStateValue] = useState("");

  const apiCall = (item: string) => {
    fetch("https://rickandmortyapi.com/api/" + item)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("hi");
        setCard(data);
        setCardType(item);
        typeof card;
      });
  };

  return (
    <div className="body">
      <div>
        <img className="banner-general" src={BannerImg} alt="No" />
      </div>
      <div>
        <Search
        stateValue={stateValue}
        setStateValue={setStateValue}
        />
      </div>
      <div className="bannerbuttons">
        <button
          className="banner"
          onClick={() => {
            apiCall("character");
          }}
        >
          Characters
        </button>
        <button
          className="banner"
          onClick={() => {
            apiCall("location");
          }}
        >
          Locations
        </button>
        <button
          className="banner"
          onClick={() => {
            apiCall("episode");
          }}
        >
          Episodes
        </button>
      </div>
      <div>
        {cardType == "character" ? (
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
        )}
      </div>
    </div>
  );
};

export default Container;
