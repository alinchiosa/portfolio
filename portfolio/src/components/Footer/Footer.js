import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {


    render (){
        return(
            <div className="footerContainer">
                <div className="links">
                    <a href="https://www.linkedin.com/in/alinchiosa/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                    <a href="https://github.com/alinchiosa" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                    </a>
                    <a href="https://gitlab.com/alinchiosa" target="_blank">
                        <FontAwesomeIcon icon={faGitlab} size='2x'/>

                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;