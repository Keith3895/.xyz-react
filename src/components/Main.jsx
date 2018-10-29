import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './home/home';
class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' render={(props)=>{
                    return (<Home/>);
                }}/>
                <Route path='/project' render={(props) => {
                    return (<h1>Project</h1>);
                }} />
            </div>
        );
    }
}
export default Main;