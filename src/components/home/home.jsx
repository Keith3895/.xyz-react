import React, { Component } from 'react';
import './home.css';
import Project from './projectCard/projectCard';
class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        try {
            var options = {
                textColour: 'red',
                textHeight: 25,
                outlineMethod: 'colour',
                outlineColour: '#ffffee',
                outlineOffset: 0,
                depth: 0.97,
                minBrightness: 0.2,
                maxSpeed: .05,
                shape: 'sphere',
                shuffleTags: true,
                zoomMin: .7,
                txtOpt: true,
                txtScale: 1,
                textFont: 'Oswald',
                shadowBlur: 0,
                clickToFront: .9,
                lock: 'xy',
                wheelZoom: false,
                animTiming: 'Smooth'
            };
            window.TagCanvas.Start('myCanvas', '', options);
            window.TagCanvas.SetSpeed('myCanvas', [-0.440, 0.360]);
        } catch (e) { // something went wrong, hide the canvas container 
            document.getElementById('myCanvasContainer').style.display = 'none';
        }
    }
    genWeb() {
        let list = ["Node.JS",
            "TRAVIS CI",
            "HTML",
            "CSS",
            "JavaScript",
            "JQuery",
            "Angular",
            "Angular 1.x",
            "R",
            "ChartJS",
            "WordPress",
            "Bootstrap",
            "Ionic",
            "Java",
            "BotBuilder",
            "Passport",
            "TypeScript",
            "React",
            "Python",
            "opencv",
            "Flask",
            "pytest",
            "React",
            "Kofax",
            "Oracle DB",
            "Mongo DB"];
        return list.map((el, i) => {
            return (<li key={i}><a>{el}</a></li>);
        });
    }
    web() {
        return (<div id="myCanvasContainer">
            <canvas width="800" height="600" id="myCanvas" >
                <ul>
                    {this.genWeb()}
                </ul>
            </canvas>
        </div>);
    }
    Pic() {
        return (
            <div className="flexColumn">
                <div className="flexCenter">
                    <img src="assets/main.jpg" alt="image" className='image' />
                </div>
                <h1 >Keith Franklin Jathanna</h1>
                <h2> I am a web developer constantly looking for ways to make websites look seemless and visually apealing and doing so in the quickest and simplest way.</h2>
            </div>
        );
    }
    render() {
        return (
            <div className="parent">
                {this.Pic()}
                {this.web()}
                <h1>Projects I've worked on.</h1>
                <div className="flexCenter">
                    <div className='cardContainer'>
                        < Project />
                    </div>
                    <div className='cardContainer'>
                        < Project />
                    </div>
                    <div className='cardContainer'>
                        < Project />
                    </div>
                    <div className='cardContainer'>
                        < Project />
                    </div>
                    <div className='cardContainer'>
                        < Project />
                    </div>
                    <div className='cardContainer'>
                        < Project />
                    </div>
                </div>
                <div>
                    <div className="flexRow footer">
                        <div className="Reach">
                            Reach me on :
                            <span>designed and developed by Keith Franklin</span>
                        </div>
                        <div className="filler"></div>
                        <div className="circle-button-lists">
                            <a href="https://www.facebook.com/keith.franklin1">
                                <div className="circle-button">
                                <i className="fab fa-facebook"></i>
                                </div>
                            </a>
                            <a href="mailto:keith30895@gmail.com">
                                <div className="circle-button">
                                <i className="fas fa-envelope"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/keith_frank1in/">
                                <div className="circle-button">
                                <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                            <a href="tel:8095679434">
                                <div className="circle-button">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;