import React from 'react';
import './home.css';
import TitleHeader from './titleHeader/titleHeader';
import WordCloud from './wordCloud/wordCloud';
import Project from './projectCard/projectCard';
class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="parent">
                <TitleHeader />
                <WordCloud />
                <Project />
            </div>
        );
    }
}

export default Home;