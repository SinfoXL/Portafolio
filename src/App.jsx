import openLogoTag from './assets/openTag.png'
import closeLogoTag from './assets/closeTag.png'

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Tool from './components/Tool/Tool'
import Footer from './components/Footer/Footer'

import javaLogo from "./assets/LogosSkills/java.png"
import phpLogo from "./assets/LogosSkills/php.png"
import jsLogo from "./assets/LogosSkills/javascript.png"
import htmlLogo from "./assets/LogosSkills/html-5.png"
import cssLogo from "./assets/LogosSkills/css-3.png"
import sqlLogo from "./assets/LogosSkills/sql.png"
import python from "./assets/LogosSkills/python.png"

import laravelLogo from './assets/LogosTools/laravel.png'
import reactLogo from './assets/LogosTools/reactjs.png'
import vsCodeLogo from './assets/LogosTools/vscode.png'
import wordpressLogo from './assets/LogosTools/wordpress.png'

import poliLogo from './assets/Fotos/polilogo.png'

import usaLogo from './assets/LogosKnowledge/usa.png'
import scrumLogo from './assets/LogosKnowledge/scrum.png'


import './App.css'

function App() {

  return (
    <main className='container-main'>

      <header id='header'> {/* Encabezado de la pagina */}
        <div className="container-header">
          <div className="container-header-logo">
            <img className='container-header-logo-open' src={openLogoTag} alt="Open Tag" />
            <span className='container-header-logo-title' src='' alt="" >Sebastian Rios</span>
            <img className='container-header-logo-close' src={closeLogoTag} alt="Close Tag" />
          </div>

          <div className="container-header-contacto">
            <ul>
              {/* <li><a href="https://api.whatsapp.com/send?phone=3016554575" target='_blank'>Whatsapp</a></li> */}
              <li><a href="mailto:sebas.asd@hotmail.com">eMail</a></li>
              <li><a href="https://www.linkedin.com/in/sebastian-r%C3%ADos-garc%C3%ADa-92011a228/" target='_blank'>Linkedin</a></li>
              <li><a href="https://twitter.com/tiandevnine" target='_blank'>Twitter</a></li>
            </ul>
          </div>
        </div>
      </header>

      <nav className='container-main-navbar'>
        <Navbar />
      </nav>

      <div className="container-main-about"> {/* Informacion sobre mi */}
        <About />
      </div>

        <h2>Habilidad en lenguajes de programación</h2>

      <div id='skills'  className="container-main-skill"> {/* Secicon de habilidades */}
        <Skill logo = {phpLogo} levelBarColor = "#787CB5" barWidth = {20} name = 'php' titleDescription = 'Web' 
        description = 'Conocimiento del lenguaje a través del uso del framework Laravel 8 en proyectos de empresa'/>
        <Skill logo = {javaLogo} levelBarColor= "#d4360e" barWidth = {35}  name = 'java' titleDescription = 'Desktop'
        description = 'Conocimiento del lenguaje en entorno educativo para proyectos academicos universitarios.'/>
        <Skill logo = {jsLogo} levelBarColor = "#F0DB4F" barWidth = {30} name = 'js' titleDescription = 'Web front'
        description = 'Conocimiento del lenguaje aplicandolo a la libreria Reactjs en proyectos propios para aprendizaje'/>
        <Skill logo = {htmlLogo} levelBarColor = "#FF5733" barWidth = {60} name = 'html' titleDescription = 'Web'
        description = 'De manera autodidacta he aprendido el lenguaje de etiquetas para uso empresarial y personal'/>
        <Skill logo = {cssLogo} levelBarColor = "#2965f1" barWidth = {30} name = 'css' titleDescription = 'Web'
        description = 'De manera autodidacta he aprendido CSS para uso tanto de aprendizaje y practica como empresarial'/>
        <Skill logo = {sqlLogo} levelBarColor = "#00758F" barWidth = {30} name = 'sql' titleDescription = 'Database'
        description = 'Conocimiento del lenguaje de consultas a nivel educativo para proyectos academicos universitarios'/>
        <Skill logo = {python} levelBarColor = "#347474" barWidth = {20} name = 'python' titleDescription = 'web/desktop'
        description = 'Ha sido mi actual enfoque el aprendizaje en el lenguaje python para el desarrollo de proyectos empresariales.'/>
      </div>

      <div id='tools' className="container-main-tool">    
              <h3>Habilidad en herramientas de desarollo</h3> 
            <p>Estas son las herramientas y framework que he usado para la creacion de proyectos y estudio de los lenguajes de programación</p>
          <div className="container-tool-group">
            <Tool name = 'Vs Code' Logo = {vsCodeLogo}/>
            <Tool name = 'Laravel' Logo = {laravelLogo}/>
            <Tool name = 'React JS' Logo = {reactLogo}/>
            <Tool name = 'Wordpress' Logo = {wordpressLogo}/>
          </div>
      </div>

      <h2>Aprendizaje personal en proceso: </h2>

        <div id='process' className="container-main-knowledge">
            <div className="container-knowinprocess">
                <img src={usaLogo} alt="English" />
                  <h4>English</h4>
                <p>Actualmente me encuentro en un proceso de aprendizaje del Ingles, siendo este un reto personal el cual me motiva a conocer a nuevas 
                  personas para abrir puertas en cualquier lugar del mundo.
                </p>
            </div>
            <div className="container-knowinprocess">
                <img src={scrumLogo} alt="Scrum" />
                  <h4>Scrum</h4>
                <p>
                  Reconozco la importancia de utilizar una metodologia agil al momento de ejecutar un proyecto de software, es por eso que he decidido aprender
                  Scrum, mi objetivo es dar un aporte positivo al equipo de trabajo para ser exitosos.
                </p>
            </div>
        </div>

        <div className="container-academic">
            <div className="academic-info">
              <h2>Estudios universitarios</h2>
              <p>Actualmente me encuentro cursando el octavo semestre de la carrera de ingenieria informatica en la ciudad de Medellin, en el <span> Politecnico Colombiano Jaime Isaza Cadavid </span></p>
            </div>
            <img src={poliLogo} alt="Logo del poli" />
        </div>

      <Footer />

    </main>

  )
}

export default App
