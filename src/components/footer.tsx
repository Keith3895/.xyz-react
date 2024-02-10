import { Component, ReactNode } from "react";

export default class Footer extends Component {


    render(): ReactNode {
        return (
            <footer className="bg-white dark:bg-tertiary-600">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-black sm:text-center dark:text-black">© 2024 <a href="https://keithfranklin.xyz/"
                            className="hover:underline">Keith Franklin</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/keith.franklin1" target="_blank" rel="noreferrer"
                                className="text-black hover:text-black dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 8 19">
                                    <path fillRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://github.com/Keith3895" target="_blank" rel="noreferrer"
                                className="text-black hover:text-black dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                        clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="https://www.linkedin.com/in/keith-frankl1n/" target="_blank" rel="noreferrer"
                            className="text-black hover:text-black dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" className="w-4 h-4" viewBox="0 0 50 50">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                                <span className="sr-only">Linkedin account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}