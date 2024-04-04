import Footer from "../footer/fotter";
import Nav from "../nav/Nav";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Nav />
    
      <div className="container">
        <section className="feature">
          <blockquote className="quote">
            “Despierta, Potter. Estás en mi clase para aprender a realizar
            pociones, no para hacer amigos.”
            <cite>- Severus Snape</cite>
          </blockquote>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/harry-potter-snape-bueno-1561369300.jpg"
            alt="Severus Snape"
            className="feature-image"
          />
        </section>

        <section className="feature">
          <img
            src="https://64.media.tumblr.com/8f2740f92cf0b4234bd1e6e736cf66f8/ba97f0a67beda8e6-30/s540x810/21dbdcd956ed171282398928cc62157752c8a358.jpg"
            alt="Hogwarts"
            className="feature-image"
          />
          <blockquote className="quote">
            “No es bueno dejarse arrastrar por los sueños y olvidarse de vivir.”
            <cite>- Albus Dumbledore</cite>
          </blockquote>
        </section>

        <section className="feature">
          <blockquote className="quote">
            “Las cosas que perdemos tienen formas de volver a nosotros de
            maneras que no podemos anticipar.”
            <cite>- Luna Lovegood</cite>
          </blockquote>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/luna-lovegood-evanna-lynch-3-1536657040.jpg"
            alt="Luna Lovegood"
            className="feature-image"
          />
        </section>

        <section className="feature">
          <img
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/02/lord-voldemort-2957924.jpg?tf=3840x"
            alt="Voldemort"
            className="feature-image"
          />
          <blockquote className="quote">
            “No hay buena ni mala magia, solo hay poder y aquellos demasiado
            débiles para buscarlo.”
            <cite>- Lord Voldemort</cite>
          </blockquote>
        </section>

        <section className="feature">
          <blockquote className="quote">
            “Es nuestro deber enfrentar las sombras, no solo dentro de nosotros
            mismos, sino en el mundo.”
            <cite>- Hermione Granger</cite>
          </blockquote>
          <img
            src="https://64.media.tumblr.com/d0fb88f91521cea732e6f19bdb63c56d/4caec16a537a13fe-bd/s540x810/7644cd9d11379c4616d3795e1e648c0ed14e0644.gif"
            alt="Hermione Granger"
            className="feature-image"
          />
        </section>

        <section className="feature">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/4UolxO09uEsKIos6G8kIA/230774c3c9b1cfff8f5e37ab99337ba9/NevilleLongbottom_WB_F8_NevilleLongbottomFullShot_Still_080615_Port.jpg?fm=jpg&q=70&w=2560"
            alt="Neville Longbottom"
            className="feature-image"
          />
          <blockquote className="quote">
            “No puedes elegir si alguien te trata bien o no. Solo puedes elegir
            cómo reaccionar ante eso.”
            <cite>- Neville Longbottom</cite>
          </blockquote>
        </section>
        <section className="feature">
          <blockquote className="quote">
            “Siempre hay que hacer lo que el Señor Oscuro ordene, ¡siempre!”
            <cite>- Bellatrix Lestrange</cite>
          </blockquote>
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/6hVoJ8zOTKogikQYYQKEmc/b0787760161f3b860630b3541e611058/BellatrixLestrange_WB_F7_BellatrixCastingSpell_V2_Still_080615_Port.jpg"
            alt="Bellatrix Lestrange"
            className="feature-image"
          />
        </section>

        <section className="feature">
          <img
            src="https://sm.ign.com/t/ign_latam/screenshot/default/doloresalvarez_vypb.1200.jpg"
            alt="Dolores Umbridge"
            className="feature-image"
          />
          <blockquote className="quote">
            “Lo siento, querida, pero para ser profesor en Hogwarts, debes ser
            capaz de realizar magia. ¿Tienes alguna habilidad que te gustaría
            mostrarnos?”
            <cite>- Dolores Umbridge</cite>
          </blockquote>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
