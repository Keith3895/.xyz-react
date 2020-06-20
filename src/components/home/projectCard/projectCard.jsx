import React from 'react';
import './projectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { langColr } from './languageColor';
class Project extends React.Component {
    state = {
        projects: [],
    };
    constructor(props) {
        super(props);
        this.card = this.card.bind(this);
        this.getProjects = this.getProjects.bind(this);
    }
    componentDidMount() {
        this.getProjects();
    }
    _getInitials(string) {
        let splitValue;
        if (string) {
            splitValue = string.split(/\s|-|_/g);
        } else {
            return '';
        }
        if (splitValue.length > 1) {
            return (splitValue[0].charAt(0) + '' + splitValue[splitValue.length - 1].charAt(0)).toUpperCase();
        } else if (splitValue.length === 1) {
            return (splitValue[0].charAt(0) + '' + splitValue[0].charAt(1)).toUpperCase();
        }
    }
    getinititals(title) {
        let initials = this._getInitials(title);
        return (
            <svg xlink="http://www.w3.org/1999/xlink" height="100" width="100" className='cardImage'>
                <circle cx='50%' cy="50%" fill='white' r='50'></circle>
                <text textAnchor="middle" alignmentBaseline="middle" x="50%" y="50%" fill="#000" fontSize='50'>{initials}</text>
            </svg>
        );
    }
    card(projectObject) {
        return (
            <div className="card">
                <div className='flexCenter cardImageContainer'>
                    {this.getinititals(projectObject.name)}
                </div>
                <a href={projectObject.html_url} style={{color:'unset'}} rel='noopener noreferrer' target="_blank">
                <div className="card-content">
                    <h3>
                        
                            {projectObject.name || ''}
                        
                    </h3>
                    <p style={{ padding: "15px" }}>
                        {projectObject.description || ''}
                    </p>
                    <div style={{ color: "#586069" }} className='flexColumn'>
                        <div>
                            Last Update on {new Date(projectObject.updated_at).toLocaleString()}
                        </div>
                        {this.license(projectObject.license)}
                        <div className='flexRow' style={
                            {
                                'flexWrap': 'wrap',
                                'alignContent': 'space-between',
                                'alignItems': 'center',
                                'padding': '1em'
                            }
                        }>

                            {this.languageColor(projectObject.language)}

                            <div style={{ 'width': '25%' }}>
                                <FontAwesomeIcon icon={faStar} style={{ 'marginRight': '5px' }} />
                                {projectObject.stargazers_count}
                            </div>
                            <div style={{ 'width': '25%' }}>
                                <FontAwesomeIcon icon={faEye} style={{ 'marginRight': '5px' }} />
                                {projectObject.watchers_count}
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        );
    }
    license(licenseObj) {
        if (licenseObj === null)
            return "";
        return (
            <div style={
                {
                    "padding": "1em",
                    "display": "flex",
                    'alignItems': 'center',
                    'flexWrap': 'wrap',
                    'alignContent': 'space-around',
                    'alignSelf': 'center',
                    "justifyContent": 'center'
                }
            }>
                <FontAwesomeIcon icon={faBalanceScale} style={{ color: "#586069", width: '10%' }} />
                {licenseObj.name}
            </div>
        );
    }
    languageColor(language) {
        if (!language)
            return '';
        let colorObj = langColr[language];
        return (
            <div style={{ 'width': '50%' }}>
                <svg height='10' width='10'>
                    <circle cx='50%' cy='50%' r='5' fill={colorObj['color']}></circle>
                </svg>
                <span> {language}</span>
            </div >
        );
    }
    showCard(projects) {
        // console.log(projects);
        if (projects.length <= 0 || !Array.isArray(projects)) {
            return '';
        } else {
            return projects.map((el, i) => {
                return (
                    <div className='cardContainer' key={i}>
                        {this.card(el)}
                    </div>
                );
            });
        }
    }
    getProjects() {
        this._getProject().then(res => {
            if (res.data) {
                this.setState({
                    projects: res.data
                });
            }
        }).catch(e => console.log(e));
    }
    _getProject() {
        return axios.get('https://api.github.com/users/keith3895/starred?per_page=6');
    }
    render() {
        return (
            <div>
                <h1>Projects Highlights.</h1>
                <div className="flexCenter" style={{
                    "paddingTop": "30px"
                }}>
                    {this.showCard(this.state.projects)}
                    {/* <div className='cardContainer'>
                        {this.card('AB', 'Aqwer Badfa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut!')}
                    </div>
                    <div className='cardContainer'>
                        {this.card('ll', 'Long Ass', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut!')}
                    </div>
                    <div className='cardContainer'>
                        {this.card('EQ', 'Aqwer Badfa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut!')}
                    </div>
                    <div className='cardContainer'>
                        {this.card('TI', 'Aqwer Badfa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut!')}
                    </div>
                    <div className='cardContainer'>
                        {this.card('II', 'Aqwer Badfa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut!')}
                    </div>
                    <div className='cardContainer'>
                        {this.card('LZ', 'Aqwer Badfa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda voluptatibus quam repellat delectus repellendus voluptatum vel dolorem autem optio libero, nulla aperiam, saepe esse fugiat praesentium fugit sed ut!')}
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Project;




