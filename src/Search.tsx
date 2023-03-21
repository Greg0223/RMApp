import { useState } from "react";

const Search = ({ stateValue, setStateValue }:{stateValue:string, setStateValue:(val:string)=>void}) => {
  return (
    <input
      value={stateValue}
      onChange={(event) => {
        setStateValue(event.target.value);
      }}
    />
  );    
};

export default Search;
