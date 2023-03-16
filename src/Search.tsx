import { useState } from "react";

const Search = ({stateValue, setStateValue}) => {
    
    

    return (

        <input value={stateValue} onChange= {(event) => {setStateValue(event.target.value)}}/>
    );
}

export default Search