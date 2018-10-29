import React, { Component } from 'react';
import './projectCard.css';

class Project extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className='flexCenter cardImageContainer'>
                    <img className='cardImage ' src="https://via.placeholder.com/100x100" alt="project icon" />
                </div>
                <div className="card-content">
                    <h3>Projcet Title</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod minima ipsum quos earum cupiditate laborum voluptate exercitationem explicabo possimus labore, quasi beatae velit veritatis odio molestiae debitis ab itaque!
                    </p>
                </div>
            </div>
        );
    }
}

export default Project;