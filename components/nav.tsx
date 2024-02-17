'use client';
import React, { ReactNode } from "react";

export default class NavBar extends React.Component {
    state = { open: false };
    constructor(props: any) {
        super(props);
        this.state = { open: false };
        this.toggleClass = this.toggleClass.bind(this);
    }
    navigation = [
        { name: 'About me', href: '/' },
        { name: 'Blogs', href: '/blog' },
        { name: 'Projects', href: '#' },
    ];
    toggleClass() {
        const currentState = this.state.open;
        this.setState({ open: !currentState });
    }
    render(): ReactNode {
        return (
            <nav className="items-right lg:px-8 bg-black text-white p-4 flex flex-wrap justify-between fixed w-full top-0 z-50 shadow-md"
                aria-label="Global">
                <div className="flex space-x-4">

                </div>

                <div className="hidden lg:flex lg:gap-x-16">
                    {this.navigation.map((item) => (
                        <a key={item.name} href={item.href} className="flex items-center text-sm text-center font-bold leading-6 ">
                            {item.name}
                        </a>
                    ))}
                    <a href="mailto:contact.keithfranklin@gmail.com" className="w-36 h-10 bg-custom-orange-600 rounded-3xl justify-center items-center gap-2.5 inline-flex ">
                        <div className="text-center text-black text-base font-bold font-['Raleway']">CONTACT ME</div>
                    </a>
                </div>


                <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="mailto:contact.keithfranklin@gmail.com" className=" w-36 h-10 bg-custom-orange-600 rounded-3xl justify-center items-center gap-2.5 inline-flex ">
                        <div className="text-center text-black text-base font-bold font-['Raleway']">CONTACT ME</div>
                    </a>
                    <button type="button"
                        onClick={this.toggleClass}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg
                          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                         dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={"items-center justify-between w-full lg:hidden md:flex md:w-auto md:order-1 " + (this.state.open ? '' : 'hidden')} id="navbar-sticky">
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        {
                            this.navigation.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}
                                        className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0"

                                        aria-current="page">{item.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>);
    }
}