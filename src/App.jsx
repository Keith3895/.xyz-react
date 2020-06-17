import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Main from './components/Main';
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
  navActive(active) {
    console.log(active);
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
        <NavBar active={this.navActive} />
        <div style={this.state.margin}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;