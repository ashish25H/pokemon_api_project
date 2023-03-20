import React, { createContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
export const myContext = createContext();

const App = () => {
  const [data, setData] = useState();
  const [inputVal, setInputVal] = useState();

  const getData = async (name) => {
    name = name.toLowerCase();
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(data);
    setData(data);
    console.log(data.data?.firmness);

    const div = document.createElement("div");
    const card = document.getElementById('card');
    card.innerHTML = '';
    div.innerHTML = '';

    
    const p1 = document.createElement("p");
    p1.innerText = `Name : ${data.data?.name}`;

    const p2 = document.createElement("p");
    p2.innerText = `Type : ${data.data.types[0].type?.name}`;

    const p3 = document.createElement("p");
    p3.innerText = `Height : ${data.data.height}`;

    const p4 = document.createElement("p");
    p4.innerText = `ID : ${data.data.id}`;

    const p5 = document.createElement("p");
    p5.innerText = `Weight : ${data.data.weight}`;

    const p6 = document.createElement("p");
    p6.innerText = `Number of Moves : ${data.data.moves.length}`;

    const Img = document.createElement('img');
    Img.src = `${data.data.sprites.other["official-artwork"]?.front_default}`;
    Img.alt = 'pockemon Image';
    Img.classList = 'w-[25%] sm:w-[60%]';
    div.classList = 'bg-[#03203C] text-[#CAD5E2] text-xl rounded-xl p-9 text-center';


    div
      .appendChild(p1)
      .appendChild(p2)
      .appendChild(p3)
      .appendChild(p4)
      .appendChild(p5)
      .appendChild(p6);


    card.appendChild(Img);
    card.appendChild(div);
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

      <div
        className="flex flex-col justify-center items-center h-[80vh]"
        id="card"
      ></div>
    </myContext.Provider>
  );
};

export default App;
