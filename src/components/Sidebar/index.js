import './index.scss'
import logo from '../../assets/images/logo-s-small.png'
import sublogo from '../../assets/images/sublogo-large.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
            <img className='sub-logo' src={sublogo} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="black"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="black"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="black"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/seanmcnt/'> 
                    <FontAwesomeIcon icon={faLinkedin} color="black" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/seanmcnt'> 
                    <FontAwesomeIcon icon={faGithub} color="black" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar 