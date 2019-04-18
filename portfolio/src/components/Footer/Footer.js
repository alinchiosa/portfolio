import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {


    render (){
        return(
            <div className="footerContainer">
                <div className="links">
                    <a>
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                    <FontAwesomeIcon icon={faGitlab} size='2x'/>
                </div>
            </div>
        )
    }
}

export default Footer;