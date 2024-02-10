import { Component } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Home from "./pages/home";
import BlogList from "./pages/blog-list";
import Footer from "./components/footer";
import Blog, { loader as BlogLoader } from "./pages/blog";
export default class Main extends Component {
    navigation = [
        { name: 'About me', href: '/' },
        { name: 'Blogs', href: '#/blogs' },
        { name: 'Projects', href: '#' },
    ];

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


            // navBar

            <div>
                <header >
                    <nav className="items-right lg:px-8 bg-black text-white p-4 flex justify-between fixed w-full top-0 z-50 shadow-md"
                        aria-label="Global">
                        <div className="space-x-4">

                        </div>

                        <div className="hidden lg:flex lg:gap-x-16">
                            {this.navigation.map((item) => (
                                <a key={item.name} href={item.href} className="flex items-center text-sm text-center font-bold leading-6 ">
                                    {item.name}
                                </a>
                            ))}
                            <a href="mailto:keith30895@gmail.com" className="w-36 h-10 bg-custom-orange-600 rounded-3xl justify-center items-center gap-2.5 inline-flex ">
                                <div className="text-center text-black text-base font-bold font-['Raleway']">CONTACT ME</div>
                            </a>
                        </div>
                    </nav>
                </header>
                <div className="mt-24 md:mt-16 pt-2">
                    <RouterProvider router={this.router} />
                </div>
                <Footer />
            </div>


        );
    }
}