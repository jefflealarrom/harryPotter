import { useContext } from "react";
import { CharactersContext } from "../../assets/context/Context";
import './house.css'

const House = () => {
  const { selectHouse } = useContext(CharactersContext);

  return (
    <div className="btns">
      <button className="btn" onClick={() => selectHouse("Gryffindor")}>Gryffindor</button>
      <button className="btn" onClick={() => selectHouse("Ravenclaw")}>Ravenclaw</button>
      <button className="btn" onClick={() => selectHouse("Hufflepuff")}>Hufflepuff</button>{" "}
      <button className="btn" onClick={() => selectHouse("Slytherin")}>Slytherin</button>
    </div>
  );
};

export default House;
