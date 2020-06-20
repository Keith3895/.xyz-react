import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/home';
import ProjectsScroll from './projectsPage/projectScroll';
import Contact from './contact/contact';
import ReactGA from 'react-ga';
class Main extends Component {
    openBlog() {
        window.open('http://blog.keithfranklin.xyz/', '_blank');
    }
    rendercount = 0;
    render() {
        return (
            // <Router>
            <Switch>
                <Route exact path='/' render={(props) => {
                    ReactGA.pageview('/');
                    return (<Home />);
                }} />
                <Route path='/project' render={(props) => {
                    ReactGA.pageview('/project');
                    return (
                        <div>
                            <h1>Project</h1>
                            <ProjectsScroll />
                        </div>
                    );
                }} />
                <Route path='/blog' render={(props) => {
                    if (this.rendercount < 1) {
                        this.openBlog();
                        this.rendercount++;
                    }
                    ReactGA.pageview('/blog');
                    return (<h5 style={{color:'white'}}>
                        redirecting to blog:
                        <a href="http://blog.keithfranklin.xyz/" rel='noopener noreferrer' target="_blank">
                        http://blog.keithfranklin.xyz/
                        </a>
                    </h5>);
                }} />
                <Route path='/contact' render={(props) => {
                    ReactGA.pageview('/contact');
                    return (
                        <div>
                            <h1>Contact Details</h1>
                            <Contact />
                        </div>
                    );
                }} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
            // </Router>
        );
    }
}
export default Main;