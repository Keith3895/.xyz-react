import { Component } from 'react';
import ReactGA from "react-ga4";
import './App.css';
import Main from './main';
class App extends Component {
  constructor(props: any) {
    super(props);


    ReactGA.initialize("G-XT4B2SFEKK");
  }



  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }


}
export default App;
