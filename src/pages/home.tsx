import { Component } from "react";
import FlatButton from "../components/buttons/flatButton";
import RaisedButton from "../components/buttons/raisedButton";
import TickerTape from "../components/tickerTape";
import TimeLine from "../components/timeline";
import ReactGA from "react-ga4";

export default class Home extends Component {
    yearCalc() {
        const startDate = new Date('2017-11-06');
        const currentDate = new Date();
        let years = currentDate.getFullYear() - startDate.getFullYear();

        // Handle if the current date is before the start date in the current year
        if (
            currentDate.getMonth() < startDate.getMonth() ||
            (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())
        ) {
            years--;
        }
        return years;
    }
    render() {
        ReactGA.send({ hitType: "pageview", page: "/", title: "About me" });
        return (
            <div>
                <div className="flex w-full bgframe justify-center items-center max-md:flex-col-reverse max-md:mb-4">
                    <div className="lg:w-1/2 lg:h-3/5  flex flex-col justify-center items-center">
                        <div>
                            <h1 className="text-4xl font-bold mt-20 md:ml-16 ml-4">
                                Hello<span className="text-custom-orange-600 text-4xl font-bold">.</span>
                            </h1>
                            <h3 className="text-4xl font-bold mt-4 md:ml-24 ml-8">
                                I<span className="text-custom-orange-600 text-4xl font-bold">'</span>m Keith Franklin
                            </h3>
                            <h1 className="text-4xl font-bold mt-4 md:ml-20 ml-6">
                                Tech Enthusiast<span className="text-custom-orange-600 text-4xl font-bold">.</span>
                            </h1>
                            <div className="flex flex-row  md:ml-16 ml-4 mt-14">
                                <RaisedButton buttonName="Contact me" onClick={() => { window.location.href = "mailto:keith30895@gmail.com" }} />
                                <FlatButton btClass="ml-4" buttonName="My Résumé" href="./Resume.pdf" download="Resume"/>
                            </div>
                        </div>

                    </div>
                    <div className="max-md:bg-black lg:w-60 lg:h-1/2 flex items-center justify-center">
                        <img className=" md:mt-14 h-auto w-112" src="./hero image.png" alt="" />
                    </div>
                </div>
                <TickerTape tickers={['Angular', 'React', 'Flutter', 'NodeJS', 'Python', 'web3', 'MongoDB', 'PostgreSQL', 'MySql', 'Kubernetes', 'docker', 'helm']} />

                <div className="flex flex-col w-full bg-tertiary-600 px-12 py-4 space-y-4">

                    <h2 className="text-4xl font-bold flex">
                        Recent Activity
                    </h2>

                    <TimeLine timeline={[
                        {
                            date: "Upcoming",
                            title: "What is web 3.0?",
                            description: `Navigationg the jargon and trying to unpack what is web3.`,
                        },
                        {
                            date: "In Progress",
                            title: "Car wash app",
                            description: `A car wash service aggregator app.`,
                        },
                        {
                            date: "Released on 2024-02-15",
                            title: "Rewamp of my portfolio",
                            description: `updated my portfolio with new projects and technologies. And a complete 
                            design overhaul.`,
                        }]} />




                </div>
                {/* About Me Section */}
                <div className="flex flex-col p-10 justify-center items-center space-y-10">
                    <div className="flex flex-row justify-center">
                        <div className="w-96 h-20 bg-white border-8 border-custom-orange-600 justify-center items-center inline-flex">
                            <div className="w-96 text-center text-black text-3xl font-bold font-['Raleway'] leading-10 tracking-widest">ABOUT ME</div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 text-left text-base font-normal font-['Raleway'] leading-loose">
                        <p>
                            Hey there! I'm fueled by a relentless curiosity for all things tech. Currently, I'm proudly steering the tech ship as a Technical Lead at <a target="_blank" rel="noreferrer" href="https://auberginesolutions.com/"
                                className="hover:underline after:content-['_↗']">Aubergine</a>, where every day is an adventure in innovation.
                        </p>
                        <p>With {this.yearCalc()}+ years of immersion in the tech realm under my belt, I've become somewhat of a tech explorer. From tinkering with new applications to diving headfirst into the latest tech trends, I'm always on the lookout for the next big thing.</p>
                        <p>Beyond my professional pursuits, I find solace in the melodic world of music. Dreaming of owning a record player and indulging in the crisp sounds of my favourite tunes is a personal goal I'm eagerly working towards.</p>
                        <p>If you're as jazzed about tech and innovation as I am, let's connect! Swing by my <a target="_blank" rel="noreferrer" href="https://github.com/Keith3895"
                            className="hover:underline after:content-['_↗']">GitHub</a> to see what I've been cooking up lately, or drop me a message on <a target="_blank" rel="noreferrer" href="mailto:keith30895@gmail.com" className="hover:underline after:content-['_↗']">link</a> for a chat about all things tech (or music, I'm game for that too!).</p>
                        Here's to endless exploration and innovation!
                    </div>
                    <div className="flex flex-col w-full justify-center items-center lg:pt-20 md:pt-20">
                        <div className="w-3/4 flex flex-row">

                            <div className="w-1/12 md:w-1/3 h-60 px-5 pt-24 pb-11 flex-col justify-end items-center inline-flex"></div>

                            <div className="w-4/5 md:w-1/3 h-60 px-5 bg-custom-orange-600 flex-col justify-center items-center inline-flex">
                                <div className="text-center"><span className="text-black text-4xl font-bold font-['Raleway'] leading-10">
                                    {this.yearCalc()}
                                </span><span className="text-black text-4xl font-bold font-['Poppins'] leading-10">+</span></div>
                                <div className=" text-center text-black text-xl font-bold font-['Raleway'] leading-7">Years experience</div>
                            </div>

                            <div className=" md:w-1/3 h-60 px-5 pt-24 pb-11 flex-col justify-end items-center inline-flex"></div>
                        </div>

                        <div className="w-full md:w-3/4 flex flex-row">
                            <div className="w-1/2 md:w-1/3 h-60 px-5 bg-black flex-col justify-center items-center inline-flex">
                                <div className="text-center"><span className="text-white text-4xl font-bold font-['Raleway'] leading-10">20</span><span className="text-white text-4xl font-bold font-['Poppins'] leading-10">+</span></div>
                                <div className=" text-center text-white text-xl font-bold font-['Raleway'] leading-7">Projects worked on</div>
                            </div>
                            <div className="hidden md:flex md:w-1/3 h-60 px-5 pt-24 pb-11 flex-col justify-end items-center inline-flex"></div>

                            <div className="w-1/2 md:w-1/3 h-60 px-5 bg-tertiary-600 flex-col justify-center items-center inline-flex">
                                <div className="text-center"><span className="text-white text-4xl font-bold font-['Raleway'] leading-10">10</span><span className="text-white text-4xl font-bold font-['Poppins'] leading-10">+</span></div>
                                <div className=" text-center text-white text-xl font-bold font-['Raleway'] leading-7">Clients worked with</div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}