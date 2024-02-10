import { Component, ReactNode } from "react";

type Blog = {
    title?: string;
    description?: string;
    thumbnail?: string;
    category?: string;
    date?: string;
    slug?: string;
}

export default class BlogCard extends Component<Blog> {

    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-3/12">
                <a href="#" className="justify-center flex-row ">
                    <img className="rounded-t-lg" src={this.props.thumbnail} alt="" />
                </a>
                <div className="p-5 flex flex-row space-x-4">
                    <div className="text-xs font-normal font-['Raleway']"> {this.props.category} </div>
                    <div className="text-center text-zinc-500 text-xs font-normal font-['Raleway']">{this.props.date}</div>
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{this.props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 line-clamp-3">
                        {this.props.description}
                    </p>
                    <a href={`#/blog/${this.props.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
                    text-black bg-custom-orange-700 rounded-lg hover:bg-custom-orange-800 focus:ring-4 
                    focus:outline-none focus:ring-custom-orange-300">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>);
    }
}