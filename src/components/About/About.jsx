//import Foto from '../../assets/Fotos/fotoSebas.png'
import "./About.css";

export default function About() {
  return (
    <div className="container-about">

      <div className="container-about-image">
        {/* <img src={Foto} alt="Foto" /> */}
      </div>

      <div className="container-about-right">

        <div className="container-about-right-referencia">
          <h4>Acerca de mi</h4>
        </div>

        <div className="container-about-right-info">

          <div className="container-about-right-info-title">
            <h1>¿Quien es <span>Sebastian</span>?</h1>
          </div>

          <div className="container-about-right-info-descripcion">
            <p>
              Soy un joven universitario amante de la tecnologia, cursando actualmente el octavo semestre de la carrera de ingenieria informatica
              me apasiona la busqueda del conocimiento en todos los temas relacionados con las Tics, de manera autodidacta he avanzado en el manejo
              de distintas herramientas y lenguajes de programacion, con el fin de buscar un mejor futuro.
            </p>

            {/* <div className="info-description-container-info-cv">
                <a href="">Descargar CV</a>
            </div> */}

          </div>

        </div>
      </div>

    </div>
  );
}
