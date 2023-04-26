import React, { useState } from "react";
import _ from "lodash";
import "./ChildInput.css";

export default function ChildInput() {
  const [inputArr, setInputArr] = useState([1]);

  const handleClick = () => {
    const length = _.size(inputArr);
    setInputArr([...inputArr, length + 1]);
  };

  const handleDelete = (num: number) => {
    setInputArr(_.filter(inputArr, (ind) => ind !== num));
  };

  return (
    <div>
      {_.map(inputArr, (ind) => (
        <div className="childInput">
          <div>Characters in children: </div>
          <input placeholder="Enter some text:)" />
          <div className="childButton">
            <button className="childAddButton" onClick={handleClick}>
              Add Child
            </button>
            <button className="deleteButton" onClick={() => handleDelete(ind)}>
              Delete Element
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}