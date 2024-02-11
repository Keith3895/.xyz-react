import { Component } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Home from "./pages/home";
import BlogList from "./pages/blog-list";
import Footer from "./components/footer";
import Blog, { loader as BlogLoader } from "./pages/blog";
import NavBar from "./components/nav";
export default class Main extends Component {

    router = createHashRouter([
        {
            path: "/",
            Component: Home
        },
        {
            path: "/blogs",
            Component: BlogList
        },
        {
            path: "/blog/:slug",
            Component: Blog,
            loader: BlogLoader
        }
        // TODO: Add more routes here
    ]);
    render() {
        return (
            <div>
                <header >
                    <NavBar />    
                </header>
                <div className="mt-16 pt-2">
                    <RouterProvider router={this.router} />
                </div>
                <Footer />
            </div>


        );
    }
}