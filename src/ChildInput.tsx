import { ChangeEvent, useState } from "react";
import "./ChildInput.css";

type Props = {
  Length: (num: number) => void;
  updateDelete: (num: number) => void;
  value: boolean;
};

export default function ChildInput({ Length, updateDelete, value }: Props) {
  const [charactersLength, setCharactersLength] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [deleteClick, setDeleteClick] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCharactersLength(name.length);
    Length(1);
    console.log(e.target)
  };

  const handleClick = () => {
    setClicked(true);
  };

  const handleDelete = () => {
    setDeleteClick(!deleteClick);
    updateDelete(charactersLength);
  };

  return (
    <div>
      {deleteClick ? (
        <div className={`childInput ${value && `black-color`}`}>
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
      {clicked ? (
        <ChildInput
          Length={(num: number) => {
            setCharactersLength(charactersLength + num);
            Length(1);
          }}
          updateDelete={(num: number) => {
            setCharactersLength(num);
            updateDelete(charactersLength);
          }}
          value={!value}
        />
      ) : null}
    </div>
  );
}
