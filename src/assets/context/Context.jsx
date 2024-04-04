import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    fetchCharacters();
  }, []);

  const selectHouse = (house) => {
    setSelectedHouse(house);
  };

  const getFilteredCharacters = () => {
    if (!selectedHouse) {
      return characters;
    }
    return characters.filter((character) => character.house === selectedHouse);
  };

  const getCharacterById = (id) => {
    return characters.find((character) => character.id === id);
  };

  const login = (email, password) => {
    if (email === "harry@potter.com" && password === "alohomora") {
      setUser({
        name: "harry",
        email: "harry@gmail.com",
        password: "alohomora",
      });
      setAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        selectHouse,
        getFilteredCharacters,
        getCharacterById,
        authenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

CharactersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
