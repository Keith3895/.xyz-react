import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './home/home';
import ProjectsScroll from './projectsPage/projectScroll';
class Main extends Component {
    render() {
        return (
            // <Router>
            <Switch>
                <Route exact path='/' render={(props) => {
                    return (<Home />);
                }} />
                <Route path='/project' render={(props) => {
                    return (
                        <div>
                            <h1>Project</h1>
                            <ProjectsScroll />
                        </div>
                    );
                }} />
                <Route path='/blog' render={(props) => {
                        window.open('http://blog.keithfranklin.xyz/');
                        return(<h5>
                        redirecting to blog
                    </h5>);
                }}/>
            </Switch>
            // </Router>
        );
    }
}
export default Main;