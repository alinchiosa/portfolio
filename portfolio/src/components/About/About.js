import React from 'react';
import './About.css'

class About extends React.Component {

    render () {
        return(
            <div className='aboutContainer'>
                <div className='aboutPhoto'>
                    <img src={require('./../../images/poza.JPG')} width={220} height={300}/>
                </div>
                <div className='aboutText'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;