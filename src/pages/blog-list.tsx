import { Component } from "react";
import RaisedButton from "../components/buttons/raisedButton";
import BlogCard from "../components/blogCard";

export default class BlogList extends Component {
    state = {
        blogs: [],
    };
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.getProjects();
    }
    showBlogs(blogs: any[]) {
        if (blogs.length > 0) {
            return blogs.map((blog, index) => {
                return <BlogCard key={index} title={blog.title} description={blog.metadata.description} thumbnail={blog.thumbnail} category={blog.metadata.category} date={blog.published_at} slug={blog.slug} />
            })
        } else {
            return <div className="text-center text-2xl font-bold">No blogs found</div>
        }
    }
    getProjects() {
        this._getProject().then((response) => {
            if (response.objects) {
                this.setState({ blogs: response.objects });
            }
        });
    }
    _getProject() {
        return fetch('https://api.cosmicjs.com/v3/buckets/beyond-bits-and-chisels-production/objects?pretty=true&query=%7B%22type%22:%22blogs%22%7D&limit=10&read_key=4698vcBlH88X1QyH3kFkrMwqdcs8q6Ud1AzowkWeBe2CTIeIG3&depth=1&props=slug,title,metadata,published_at,thumbnail,')
            .then((response) => response.json());
    }
    render() {
        return (
            <div className="flex flex-col space-y-4 my-10">
                <div className="flex flex-row justify-center mt-10 mb-10">
                    <div className="w-11/12 md:w-1/2 h-20 bg-white border-8 border-orange-400 justify-center items-center inline-flex">
                        <div className="text-center text-black text-xl md:text-3xl font-bold font-['Raleway'] leading-10 tracking-widest">Beyond bits and chissels</div>
                    </div>
                </div>
                {/* search bar */}
                <div className="flex justify-center">
                    <div className="w-11/12 md:w-1/2">
                        <form className="flex flex-col items-center space-y-4">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search Blogs..." required />
                                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">

                                </button>
                            </div>
                            <RaisedButton buttonName="Search" />
                        </form>
                    </div>
                </div>


                <div className="flex flex-row gap-12 flex-wrap justify-center">
                    {this.showBlogs(this.state.blogs)}
                </div>

            </div>
        );
    }
}