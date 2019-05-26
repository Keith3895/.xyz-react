import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './home.scss';
import BlogCard from './blogCard/blogCard';
class BlogHome extends Component {
    constructor(props) {
        super(props);
    }
    ShowBlogs() {
        let staticData = [
            {
                content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.
        
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.`,
                imgSrc: "https://via.placeholder.com/750x200"
            },
            {
                content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.
        
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.`,
                imgSrc: "https://via.placeholder.com/750x250"
            },
            {
                content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.
        
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.`,
                imgSrc: ""
            },
            {
                content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequuntur,
                quas perferendis voluptatem voluptatibus corrupti. Similique,
                libero? Placeat et molestias ipsum qui similique veniam aut non aliquam,
                    corrupti cumque. Necessitatibus.
                `,
                imgSrc: "https://via.placeholder.com/750x150"
            }];
        return staticData.map(el=>{
            return(
                <BlogCard content={el.content} imgSrc={el.imgSrc} />
            );
        });
    }
    render() {
        return (
            // <h1>Confessions of a Programming Freak</h1>

            <div>
                <h1>Title Space placeholder</h1>
                <div>
                    <FlexView width='100%'>
                        <FlexView hAlignContent='center' column grow={1} shrink={1} width="75%" className={'listView'}>
                            List Content
                            {this.ShowBlogs()}
                        </FlexView>
                        <FlexView hAlignContent='center' grow={1} shrink={1} width="25%">
                            Sid bar Content
                        </FlexView>
                    </FlexView>
                </div>
            </div>
        );
    }
}

export default BlogHome;