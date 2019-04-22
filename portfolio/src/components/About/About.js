import React from 'react';
import './About.css'

class About extends React.Component {

    render () {
        return(
            <div className='aboutContainer'>
                <div className="aboutWorkContainer">
                    <div className='aboutPhoto'>
                        <img src={require('./../../images/about_work.png')} width={300} height={300}/>
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
                <div className="aboutHobbyContainer">
                    <div className='aboutText'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='aboutHobbyPhoto'>
                        <img src={require('./../../images/about_hobby.png')} width={300} height={300}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;