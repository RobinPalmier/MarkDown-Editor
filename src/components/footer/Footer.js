import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import logoFooter from '../../assets/img/logo-robin-palmier-footer.svg';

const Footer = () => {
  return(
    <footer>
            <div className='left'>
              <a href="https://github.com/RobinPalmier" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
              <a href="https://www.linkedin.com/in/robinpalmier" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            <a href="https://www.linkedin.com/in/robinpalmier" className="credits" rel="noopener noreferrer" target="_blank">
                <p> Developed by&nbsp;&nbsp;</p>
                <img src={logoFooter} className="robinpalmier" alt="Logo de Robin Palmier" />
                <p>&nbsp;&nbsp;Robin Palmier</p>
            </a>
              <div className='right'>
                <a href="https://twitter.com/PalmierRobin" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.behance.net/robinpalmier" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faBehance}/></a>
            </div>
        </footer>
  )
}

export default Footer;
