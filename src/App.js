import React, { createContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
export const myContext = createContext();

const App = () => {
  const [data, setData] = useState();
  const [inputVal, setInputVal] = useState();

  const getData = async (name) => {
    const data = await axios.get(`https://pokeapi.co/api/v2/berry/${name}/`);
    console.log(data);
    setData(data);
    console.log(data.data?.firmness);

    const div = document.createElement("div");
    div.classList = "p-5";
    div.innerText = `${data.data?.name} ${data.data.natural_gift_type?.name} 
    ${data.data.firmness?.name} ${data.data.firmness?.url}`;

    document.getElementById("card").appendChild(div);
  };

  const onSearch = () => {
    console.log(`This is inputVal ${inputVal}`);
    getData(inputVal);
  };

  const getInputValue = (event) => {
    const val = event.target.value;
    setInputVal(val);
  };

  // useEffect(() => {
  //   getData("cheri");
  // }, []);

  return (
    <myContext.Provider value={data}>
      <nav className="bg-[#03203C] p-3  text-right flex justify-end">
        <div className="bg-[#CAD5E2]  rounded-md ">
          <input
            onChange={getInputValue}
            className="outline-none pl-2 bg-[#CAD5E2] mr-1"
            id="inputField"
            type="text"
            name="input"
            placeholder="Enter Name"
          />
          <button
            onClick={onSearch}
            className="hover:bg-[#03203C] hover:text-[#CAD5E2] p-3"
          >
            Search
          </button>
        </div>
      </nav>

      <div id="card"></div>
    </myContext.Provider>
  );
};

export default App;
