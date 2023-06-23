import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLightbulb, faCode, faDesktop, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import logo from './Image/Logo-nuevo.png';
import './Dashboard.css';

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="nav-wrapper">
      <Link to="/">
        <img className="logo-img" src={logo} alt="Logo de la página" />
      </Link>
      {location.pathname !== '/me' && (
        <Link to="/me"><button className="nav-button"><FontAwesomeIcon icon={faUser} /> Sobre mí</button></Link>
      )}
      {location.pathname !== '/certifications' && (
        <Link to="/certifications"><button className="nav-button"><FontAwesomeIcon icon={faGraduationCap} /> Certificaciones</button></Link>
      )}
      {location.pathname !== '/projects' && (
        <Link to="/projects"><button className="nav-button"><FontAwesomeIcon icon={faDesktop} /> Proyectos</button></Link>
      )}
      {/* {location.pathname !== '/reviews' && (
        <Link to="/reviews"><button className="nav-button"><FontAwesomeIcon icon={faStarHalfAlt} /> Reviews</button></Link>
      )} */}
      {location.pathname !== '/solutions' && (
        <Link to="/solutions"><button className="nav-button"><FontAwesomeIcon icon={faLightbulb} /> Soluciones</button></Link>
      )}
      {location.pathname !== '/technologies' && (
        <Link to="/technologies"><button className="nav-button"><FontAwesomeIcon icon={faCode} /> Tecnologías</button></Link>
      )}
      {location.pathname !== '/contact' && (
        <Link to="/contact"><button className="nav-button"><FontAwesomeIcon icon={faEnvelope} /> Contacto</button></Link>
      )}
    </div>
  );
}
