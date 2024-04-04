import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CharactersContext } from "../../assets/context/Context";
import Footer from "../footer/fotter";
import Nav from "../nav/Nav";
import "./logout.css";

const LogoutButton = () => {
  const { logout } = useContext(CharactersContext);
  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Nav></Nav>
      <section className="sec-log">
        <button className="logout" onClick={handleLogout}>Travesura Realizada</button>
      </section>
      <Footer></Footer>
    </>
  );
};

export default LogoutButton;
