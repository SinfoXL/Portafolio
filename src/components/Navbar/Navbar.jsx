import './Navbar.css'

export default function Navbar() {
  return (
      <div className="container-navbar">
        <ul className='container-navbar-menu'>
          <li><a href="#header">Home</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#tools">Herramientas</a></li>
          <li><a href="#process">Proceso</a></li>
          <li><a href="">Academia</a></li>
        </ul>
      </div>
  );
}