import React, { Component } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
const CustomLink = ({ children, to, exact, click }) => (
    // <li >
        <NavLink to={to} exact={exact} className='el' activeClassName="cd-selected" >
            {children}
        </NavLink>
    // </li>
);
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
            navClass: ""
        };
        this.NavControl = this.NavControl.bind(this);
        this.linkClick = this.linkClick.bind(this);
    }
    NavControl(event) {
        this.setState({
            navOpen: !this.state.navOpen,
            navClass: !this.state.navOpen ? "nav-is-visible" : ""
        });
        this.props.active(this.state.navOpen);
    }
    linkClick(event) {
        console.log(event.target.offsetLeft);
        this.setState({
            position: { left: event.target.offsetLeft }
        });
    }
    componentDidMount() {
        let rect = ReactDOM.findDOMNode(this)
            .getElementsByClassName('cd-selected');
        // this.setState({
        //     position: { left: rect[0].offsetLeft }
        // });

    }
    createLinks() {
        let routes = [{
            path: "/",
            Title: "Home"
        }, {
            path: "/project",
            Title: "Project"
        }, {
            path: "/blog",
            Title: "Blogs"
        }, {
            path: "/about",
            Title: "About"
        }, {
            path: "/contact",
            Title: "Contact"
        }];
        return routes.map((el, i) => {
            return (
                <CustomLink exact to={el.path} click={this.linkClick} key={i}>
                    {el.Title}
                </CustomLink>
            );
        });
    }
    render() {
        return (
            <div>
                <header className={"cd-header " + this.state.navClass}>
                    {/* <Link to={} className="cd-logo">
                        <blockquote id="page_id">
                            Home.
                        </blockquote>
                    </Link> */}
                    <a className="cd-3d-nav-trigger" onClick={this.NavControl}>
                        Menu
                    <span></span>
                    </a>
                </header>
                <nav className={"cd-3d-nav-container " + this.state.navClass}>
                    <ul className="cd-3d-nav">
                        {this.createLinks()}
                    </ul>
                    <span className="cd-marker color-1" style={this.state.position}></span>
                </nav>
            </div>
        );
    }
}

export default Navbar;
