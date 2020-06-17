import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
class App extends Component {
  constructor(props) {
    super(props);
    this.navActive = this.navActive.bind(this);
    this.state = { margin: { "marginTop": 0 }, width: 0, height: 0 };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  /**
   * 
   * @param {Boolean} active 
   */
  navActive(active) {
    let value;
    if (this.state.width > 360 && this.state.height > 640) {
      value = '10em';
    } else {
      value = 0;
    }
    this.setState({
      margin: { "marginTop": active ? '0' : value }
    });
    // console.log(active);
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar active={this.navActive} />
          <div style={this.state.margin}>
            <Main />
          </div>

          <div>
            <div className="footer">
              <div className="center">
                <div className="circle-button-lists">
                  <a href="https://www.facebook.com/keith.franklin1">
                    <div className="circle-button">
                      <FontAwesomeIcon icon={faFacebookF} transform="grow-3" />
                    </div>
                  </a>
                  <a href="mailto:keith30895@gmail.com">
                    <div className="circle-button">
                      <FontAwesomeIcon icon={faEnvelope} transform="grow-3" />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/keith_frank1in/">
                    <div className="circle-button">
                    <FontAwesomeIcon icon={faInstagram} transform="grow-3" />
                    </div>
                  </a>
                  <a href="tel:8095679434">
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

          </div>
        </Router>
      </div >

    );
  }
}

export default App;