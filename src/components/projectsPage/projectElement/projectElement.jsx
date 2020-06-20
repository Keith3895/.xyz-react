import React from 'react';
import './projectElement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faStar, faEye, faExclamationCircle, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { langColr } from '../../home/projectCard/languageColor';
export default class ProjectElement extends React.Component {
    // constructor(props){
    //     super(props);
    // }
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
    license(licenseObj) {
        if (licenseObj === null)
            return "";
        return (
            <div className='license'>
                <div style={
                    {
                        "display": "flex",
                        'alignItems': 'center',
                        'flexWrap': 'wrap',
                        'alignContent': 'space-around',
                        'alignSelf': 'center'
                    }
                }>
                    <FontAwesomeIcon icon={faBalanceScale} style={{ color: "#586069", width: '20%' }} />
                    {licenseObj.name}
                </div>
            </div>
        );
    }
    languageColor(language) {
        if (!language)
            return '';
        let colorObj = langColr[language];
        return (
            <div className='language'>
                <svg height='10' width='10'>
                    <circle cx='50%' cy='50%' r='5' fill={colorObj['color']}></circle>
                </svg>
                <span> {language}</span>
            </div >
        );
    }

    render() {
        return (
            <a href={this.props.project.html_url} style={{ color: 'unset' }} rel='noopener noreferrer' target="_blank">
                <div className='flexRow projectCard'>
                    <div className="initialContainer">
                        {this.getinititals(this.props.project.name)}
                    </div>
                    <div className="verLine"></div>
                    <div className='flexColumn projectContent'>
                        <h2 className="projectTitle">
                            {this.props.project.name}
                        </h2>
                        <div className='flexRow projectDateContainer'>
                            <span><strong>Creted at:</strong> {new Date(this.props.project.created_at).toUTCString()}</span>
                            <span><strong>Updated at:</strong> {new Date(this.props.project.updated_at).toUTCString()}</span>
                        </div>
                        <hr></hr>
                        <div className="description">
                            {this.props.project.description}
                        </div>
                        <hr></hr>
                        <div className='flexRow projectMeta'>
                            {this.license(this.props.project.license)}
                            {this.languageColor(this.props.project.language)}
                            <div className="meta">
                                <FontAwesomeIcon icon={faStar} style={{ 'marginRight': '5px' }} />
                                {this.props.project.stargazers_count}
                            </div>
                            <div className="meta">
                                <FontAwesomeIcon icon={faEye} style={{ 'marginRight': '5px' }} />
                                {this.props.project.watchers_count}
                            </div>
                            <div className="meta">
                                <FontAwesomeIcon icon={faCodeBranch} style={{ 'marginRight': '5px' }} />
                                {this.props.project.forks_count}
                            </div>
                            <div className="meta">{/*issues 10  */}
                                <FontAwesomeIcon icon={faExclamationCircle} style={{ 'marginRight': '5px' }} />
                                {this.props.project.open_issues_count}
                            </div>
                        </div>
                    </div>
                </div >
            </a>
        );
    }
}