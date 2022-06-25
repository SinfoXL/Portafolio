import "../Skill/Skill.css";

//tarjetas de habilidades en lenguajes de programacion y herramientas 
export default function Skill (props) {

/*   const [isActive, setIsActive] = useState(false)

    const toRender = () =>{
      setIsActive(!isActive)
    } */

  return (
    <div className="container-skill">
      <div className="main-container">

        <div className="container-card-header">
          <img src={props.logo} alt="imagen" />
            <div className="header-title">
             <h4>{props.name}</h4>
              <span>{props.titleDescription}</span>
            </div>
        </div>
              
          <div className="container-card-description">
            <p>
              {props.description} {/* <button onClick={toRender}>Saber mas</button> */}
            </p>
          </div>
            
          <span>Conocimiento:</span>

          <div className="container-card-level-barra">
              <div className="container-card-level-progreso" style={{ background : props.levelBarColor , width : `${props.barWidth}%` }}></div>
          </div>

      </div>
    </div>
  );
}
