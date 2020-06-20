import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';
export default class Contact extends React.Component {
    render() {
        return (
            <div className='flexRow callingCardContainer'>
                <div className='callingCard flexColumn'>
                    <h2 className='name'>Keith Franklin Jathanna</h2>
                    <hr className="hrStyle" />
                    <p className="sub-title">Web Developer</p>
                    <p className="sub-title">Full Stack Developer</p>
                    <hr className="hrStyle" />
                    <div className='flexRow anchorContainer'>
                        <a rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/keith.franklin1">
                            <div className='flexRow circle-tag'>
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faFacebookF} transform="grow-3" />
                                </div>
                                <div className='tag'>
                                    <span>
                                        Keith Franklin
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/keith.franklin1">
                            <div className='flexRow circle-tag'>
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faLinkedin} transform="grow-3" />
                                </div>
                                <div className='tag'>
                                    <span>
                                        Keith Franklin
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/keith.franklin1">
                            <div className='flexRow circle-tag'>
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faAngellist} transform="grow-3" />
                                </div>
                                <div className='tag'>
                                    <span>
                                        Keith Franklin Jathanna
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a rel='noopener noreferrer' target="_blank" href="https://www.facebook.com/keith.franklin1">
                            <div className='flexRow circle-tag'>
                                <div className="circle-button">
                                    <FontAwesomeIcon icon={faEnvelope} transform="grow-3" />
                                </div>
                                <div className='tag'>
                                    <span className='emailid'>
                                        keith30895@gmail.com
                                    </span>
                                    <span className='email'>
                                        Email
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}