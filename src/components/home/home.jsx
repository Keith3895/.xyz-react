import React from 'react';
import './home.css';
import TitleHeader from './titleHeader/titleHeader';
import WordCloud from './wordCloud/wordCloud';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="parent">
                <TitleHeader />
                <WordCloud />
            </div>
        );
    }
}

export default Home;