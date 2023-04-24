import { ChangeEvent, useState } from "react";
import "./ChildInput.css";

type Props = {
  Length: (num:number) => void;
};

export default function ChildInput({ Length }: Props) {
  const [charactersLength, setCharactersLength] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [deleteClick, setDeleteClick] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCharactersLength(name.length);
    Length(1)
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDelete = () => {
    setDeleteClick(!deleteClick);
  };

  return (
    <div>
      {deleteClick ? (
        <div className="childInput">
          <div>Characters in children: {charactersLength}</div>
          <input
            placeholder="Enter some text:)"
            onChange={(e) => handleChange(e)}
          />
          <div className="childButton">
            <button className="childAddButton" onClick={handleClick}>
              Add Child
            </button>
            <button className="deleteButton" onClick={handleDelete}>
              Delete Element
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {clicked ? <ChildInput Length={(num: number) => setCharactersLength(charactersLength + num)}/> : null}
    </div>
  );
}
