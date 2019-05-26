import React, { Component } from 'react';
import './blogCard.scss';
import FlexView from 'react-flexview';
class BlogCard extends Component {

    constructor(props) {
        super(props);
        this.content = props.content;
        this.imgSrc = props.imgSrc;
    }
    render() {
        return (
            <FlexView column className={'blogCard'} width="100%" grow={1}>
                <FlexView width='100%'>
                    <img src={this.imgSrc} />
                </FlexView>
                <FlexView column width='100%'>
                    <p className={'indent'}>
                        {this.content}
                    </p>
                </FlexView>
                <FlexView width='100%'>
                    <FlexView hAlignContent='left' vAlignContent='center'>
                        <div className="circle-button-lists">
                            <a href="https://www.facebook.com/keith.franklin1">
                                <div className="circle-button">
                                    <i className="fab fa-facebook"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/keith_frank1in/">
                                <div className="circle-button">
                                <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </FlexView>
                    {/* <FlexView marginLeft='auto' hAlignContent='center'></FlexView> */}
                    <FlexView marginLeft='auto' hAlignContent='right'  vAlignContent='center'>

                        <a href="#">Click to read more ->></a>
                    </FlexView>
                </FlexView>
            </FlexView>
        );
    }
}

export default BlogCard;