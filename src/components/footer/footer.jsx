import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="footer" >
                    <div className="center">
                        <div className="circle-button-lists">
                            <a rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/keith.franklin1">
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faFacebookF} transform="grow-3" />
                                </div>
                            </a>
                            <a rel='noopener noreferrer' target="_blank" href="mailto:keith30895@gmail.com">
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faEnvelope} transform="grow-3" />
                                </div>
                            </a>
                            <a rel='noopener noreferrer' target="_blank" href="https://www.instagram.com/keith_frank1in/">
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faInstagram} transform="grow-3" />
                                </div>
                            </a>
                            <a rel='noopener noreferrer' target="_blank" href="tel:8095679434">
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faPhone} transform="grow-3" />
                                </div>
                            </a>
                        </div>
                        <span style={{ 'textAlign': 'center' }}>
                            developed by Keith Franklin
                  </span>
                    </div>
                </div>
            </div >
        );
    }
}