import { useState, useContext } from "react";
import { CharactersContext } from "../../assets/context/Context";
import { useNavigate } from "react-router-dom";
import "./singin.css";

const Singin = () => {
  const { login } = useContext(CharactersContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    navigate("/registre");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isAuthenticated = await login(formData.email, formData.password);
      if (!isAuthenticated) {
        setError("Try Again Muggleborn");
      } else {
        navigate("/landing");
        setError("");
      }
    } catch (error) {
      // console.error("Error en handleSubmit:", error);
      // setError("Error al iniciar sesión");
    }
  };

  return (
    <section className="fondo">
      <div className="login-contenedor">
        <form onSubmit={handleSubmit} className="login-formulario">
          <h1 className="login-titulo">Bienvenido</h1>
          <div className="formulario-grupo">
            <label htmlFor="email" className="formulario-label"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="formulario-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="usuario: harry@potter.com"
            />
          </div>
          <div className="formulario-grupo">
            <label htmlFor="password" className="formulario-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="formulario-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="contraseña: alohomora"
            />
          </div>
          <button type="submit" className="formulario-boton">
            Alohomora
          </button>
          <button className="small" onClick={handleButtonClick}>Registre</button>
        </form>
        {error && <p className="formulario-error">{error}</p>}
      </div>
    </section>
  );
};

export default Singin;
