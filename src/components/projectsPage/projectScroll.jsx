import React from 'react';
import './projectScroll.css';
import axios from 'axios';
import ProjectElement from './projectElement/projectElement';

export default class ProjectsScroll extends React.Component {
    loadingRef;
    observer;
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            loading: false,
            page: 1,
            prevY: 0
        };
    }
    getProjects(pageNumber) {
        this.setState({ loading: true });
        this._getProject(pageNumber).then(res => {
            if (res.data) {
                this.setState({
                    projects: res.data
                });
                this.setState({ photos: [...this.state.photos, ...res.data] });
                this.setState({ loading: false });
            }
        }).catch(e => console.log(e));
    }
    _getProject(pageNumber) {
        return axios.get('https://api.github.com/users/keith3895/repos?per_page=10&page=' + pageNumber);
    }

    componentDidMount() {
        this.getProjects(this.state.page);

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const curPage = this.state.page + 1;
            this.getProjects(curPage);
            this.setState({ page: curPage });
        }
        this.setState({ prevY: y });
    }

    render() {
        const loadingCSS = {
            height: "100px",
            margin: "30px"
        };
        const loadingTextCSS = {
            display: this.state.loading ? "block" : "none",
            color: 'white'
        };

        return (
            <div className="container">
                <div style={{ minHeight: "500px", overflow: 'scroll' }}>
                    {this.state.photos.map((project, i) => (
                        <ProjectElement project={project} key={i} />
                    ))}
                </div>
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    style={loadingCSS}
                >
                    <span style={loadingTextCSS}>Loading...</span>
                </div>
            </div>
        );
    }
}