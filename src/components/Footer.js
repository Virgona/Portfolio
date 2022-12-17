import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    // const footerStyles = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'lightblue',
    //     height: '150px',


    // }
    return (
        <div calssName='footerStyles'>
            <p><FontAwesomeIcon icon={faGithub} /></p>
            <p><FontAwesomeIcon icon={faLinkedin} /></p>
            <p><FontAwesomeIcon icon={faPodcast} /></p>
        </div>
    );
}
