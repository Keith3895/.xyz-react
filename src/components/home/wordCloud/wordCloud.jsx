import React from 'react';
import './wordCloud.css';

export default class WordCloud extends React.Component {
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
                // minSpeed:0.1,
                maxSpeed: .03,
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
                animTiming: 'Smooth',
                interval:1000,
                // noSelect:true,
                freezeActive:true
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
            "Node",
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
            "Azure",
            "AWS",
            "GCP",
            "Neutrinos",
            "TDD",
            "Karma",
            "Jasmin",
            "Electron",
            "Mocha",
            "Chai",
            "react-Jest"

        ];
        return list.map((el, i) => {
            
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            return (<li key={i}><a>{el}</a></li>);
        });
    }
    render() {
        return (<div id="myCanvasContainer">
            <canvas width="800" height="600" id="myCanvas" >
                <ul>
                    {this.genWeb()}
                </ul>
            </canvas>
        </div>);
    }
}