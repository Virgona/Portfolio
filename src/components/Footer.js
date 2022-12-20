import React from 'react';
import './Footer.css';
// importing icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <footer className='footerStyles'>
            <p className='iconStyles' id='git'><a target='blank' href='https://github.com/Virgona'><FontAwesomeIcon icon={faGithub} /></a> </p>
            <p className='iconStyles' id='linkedin'><a target='blank' href='https://www.linkedin.com/in/tobias-virgona/'><FontAwesomeIcon icon={faLinkedin} /></a></p>
            <p className='iconStyles' id='podcast'><a target='blank' href='https://open.spotify.com/show/6qb1PFFEuiBMShVY2YTocK'><FontAwesomeIcon icon={faSpotify} /></a></p>
        </footer>
    );
}
