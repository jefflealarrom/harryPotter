import { useContext } from "react";
import { CharactersContext } from "../../assets/context/Context";
import House from "../house/House";
import { Link } from "react-router-dom";
import './perso.css'
import Nav from "../nav/Nav";
import Fotter from '../footer/fotter'


const Perso = () => {
  const { getFilteredCharacters } = useContext(CharactersContext);
  const charactersWithImages = getFilteredCharacters().filter(
    (character) => character.image
  );

  return (
    <>
    <Nav></Nav>
      <House />
      <div className="characters-container">
  {charactersWithImages.map((character) => (
    <div key={character.id} className="character-card">
      <Link to={`/detail/${character.id}`} className="character-link">
        <img src={character.image} alt={character.name} className="character-image" />
        <h2 className="character-name">{character.name}</h2>
        <p className="character-name">{character.house} {character.yearOfBirth}</p>
      </Link>
    </div>
  ))}
</div>
<Fotter></Fotter>

    </>
  );
};

export default Perso;
