import React from 'react';
import "./Home.css";
import Typist from 'react-typist';

class Home extends React.Component {

    render () {
        return(
            <div className='homeContainer'>
                <div className="homePhoto">
                    <img src={require('./../../images/poza.jpg')} width={220} height={300}/>
                </div>
                <div className="homeText">
                    <Typist cursor={{hideWhenDone: true}}>
                        <text style={{fontSize:25, hideWhenDoneDelay: 10}}>This is not a long text!</text>
                    </Typist>
                </div>
            </div>
        )
    }
}

export default Home;