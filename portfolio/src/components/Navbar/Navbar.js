import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css";

class Navbar extends React.Component {


    render(){
        return(
            <div className="container">
                <div className="logo">
                    <img src={require('./../../images/logo.PNG')} width={80} height={50}/>
                </div>
                <div className="endpoints">
                    <NavLink to="/"><img src={require('./../../images/home.PNG')} width={90} height={60}/></NavLink>
                    <NavLink to="/about"><img src={require('./../../images/about.PNG')} width={90} height={60}/></NavLink>
                    <NavLink to="/projects"><img src={require('./../../images/projects.PNG')} width={90} height={60}/></NavLink>
                    <NavLink to="/contact"><img src={require('./../../images/contact.PNG')} width={90} height={60}/></NavLink>
                </div>
            </div> 

        )
    }
}



export default Navbar;