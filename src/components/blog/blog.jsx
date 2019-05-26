import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import './blog.css';
import BlogHome from './home/home';
class Blog extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='blogRoot'>
                <Route exact path='/blog/home' render={(props)=>{
                    return (
                        <BlogHome/>
                        );
                }}/>
            </div>
        );
    }
}

export default Blog;