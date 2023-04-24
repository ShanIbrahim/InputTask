import { ChangeEvent, useState } from "react";
import ChildInput from "./ChildInput";
import "./Input.css";

export default function Input() {
  const [isClick, setIsClick] = useState(false);
  const [sizeofCharacters, setSizeofCharaters] = useState(0);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setSizeofCharaters(name.length);
  };

  return (
    <div className="Input">
      <div>Characters in children: {sizeofCharacters}</div>
      <input
        placeholder="Enter some text:)"
        onChange={(e) => handleChange(e)}
      />
      <button className="addButton" onClick={handleClick}>
        Add Child
      </button>
      {isClick && <ChildInput Length={(num: number) => setSizeofCharaters(sizeofCharacters + num)}/>}
    </div>
  );
}
