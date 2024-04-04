import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CharactersContext } from "../../assets/context/Context";
import './detalle.css'
import Nav from "../nav/Nav";
import Fotter from '../footer/fotter'

const Detail = () => {
  const { id } = useParams();
  const { getCharacterById } = useContext(CharactersContext);
  const character = getCharacterById(id);

  if (!character) {
    return <div>No se encontró el personaje</div>;
  }

  return (
    <>
    <Nav></Nav>
    <section className="card">
      <div className="character">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </div>
      <div className="info" >
        <p>House: {character.house}</p>
        <p>Birthday: {character.dateOfBirth}</p>
        <p>
          Type: {character.species} & {character.ancestry}
        </p>
        <p>Patronus: {character.patronus}</p>
      </div>
    </section>
    <Fotter></Fotter>
    </>
  );
};

export default Detail;
