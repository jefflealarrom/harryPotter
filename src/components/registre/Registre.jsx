import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './registre.css'
import Fotter from '../footer/fotter'

const Registre = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    house: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    gender: false,
    firstName: false,
    lastName: false,
    house: false,
    password: false,
    confirmPassword: false,
  });

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== "") && Object.values(formErrors).every((error) => !error)
    ); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value === "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formErrors).every((error) => !error);
    if (isValid) {
      console.log("Datos del formulario:", {
        Gender: formData.gender,
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        House: formData.house,
        Password: formData.password,
        ConfirmPassword: formData.confirmPassword
      });
      navigate("/");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <>
    <section className="one">
    <div className="registre">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            className="input-radio"
            required
          />
          Wizard
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            className="input-radio"
            required
          />
          Witch
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          onChange={handleChange}
          className="input-text"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          className="input-text"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          className="input-text"
          required
        />
        <select name="house" onChange={handleChange} className="select" required>
          <option value="">Seleccione una casa</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          className="input-text"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repetir contraseña"
          onChange={handleChange}
          className="input-text"
          required
        />
        <button type="submit" disabled={!isFormValid()} className="submit-button">
          Registrarse
        </button>
      </form>
    </div>
    </section>
    <Fotter></Fotter>
    </>
  );
};

export default Registre;