import { ChangeEvent, useState } from "react";
import ChildInput from "./ChildInput";
import "./Input.css";

export default function Input() {
  const [isClick, setIsClick] = useState(false);
  const [sizeofCharacters, setSizeofCharaters] = useState(0);
  const value = false;

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setSizeofCharaters(name.length);
  };

  return (
    <div className="container">
      <div className="Input">
        <div>Characters in children: {sizeofCharacters}</div>
        <input
          placeholder="Enter some text:)"
          onChange={(e) => handleChange(e)}
        />
        <button className="addButton" onClick={handleClick}>
          Add Child
        </button>
      </div>
      {isClick && (
        <ChildInput
          Length={(num: number) => setSizeofCharaters(sizeofCharacters + num)}
          updateDelete={(num: number) => setSizeofCharaters(num)}
          value={!value}
        />
      )}
    </div>
  );
}
