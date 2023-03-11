import React, { useContext } from "react";
import { myContext } from "./App";

const Card = () => {
  const data = useContext(myContext);
  console.log(`Card data ${data}`);
  console.log(data);

  const getData = () => {
     console.log(data.data?.firmness);
  };

  getData();

  return (
    <div>
      
    </div>
  );
};

export default Card;
