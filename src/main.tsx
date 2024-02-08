import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import BlogList from "./pages/blog-list";


export default class Main extends Component {
    router = createBrowserRouter([
        {
            path: "/",
            Component: Home
        },
        {
            path: "/blogs",
            Component: BlogList
        }
        // TODO: Add more routes here
    ]);
    render() {
        return (<RouterProvider router={this.router}/>);
    }
}