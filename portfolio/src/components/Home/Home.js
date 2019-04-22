import React from 'react';
import "./Home.css";
import Typist from 'react-typist';

class Home extends React.Component {

    render () {
        return(
            <div className='homeContainer'>
                <div className="homeText">
                    <Typist cursor={{hideWhenDone: true}}>
                        <text style={{fontSize:25, hideWhenDoneDelay: 10}}>Hello! My name is Alin.</text>
                    </Typist>
                </div>
                <div className="homePhoto">
                    <img src={require('./../../images/hello_picture.png')} />
                </div>
            </div>
        )
    }
}

export default Home;