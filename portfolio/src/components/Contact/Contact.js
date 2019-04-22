import React from 'react';
import './Contact.css';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div style={{fontSize: 25, color: 'red'}}>{text}</div>;

class Contact extends React.Component {

    static defaultProps = {
        center: {
          lat: 55.676041,
          lng: 12.569118
        },
        zoom: 11
      };

    render () {
        return (
            <div className='contactContainer'>
                <div style={{ height: '50vh', width: '50%' }} className="map">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                        lat={55.676041}
                        lng={12.569118}
                        text="▼"
                        />
                    </GoogleMapReact>
                </div>
                <div className="contactInformation">
                    <p>email: alin.chiosa@gmail.com</p>
                    <p>phone: 53 33 68 15</p>
                </div>
            </div>
        ) 
    }
}

export default Contact;