import { Component, ReactNode } from "react";
import { Form, useLoaderData } from "react-router-dom";
import RaisedButton from "../components/buttons/raisedButton";
import ReactGA from "react-ga4";
export async function loader(params: any) {
    const blog = await getBlog(params.slug);
    return blog;
}
async function getBlog(slug: string) {

    const BUCKET_SLUG = 'beyond-bits-and-chisels-production';
    const BUCKET_READ_KEY = '4698vcBlH88X1QyH3kFkrMwqdcs8q6Ud1AzowkWeBe2CTIeIG3';

    const url = `https://api.cosmicjs.com/v3/buckets/${BUCKET_SLUG}/objects`;

    const params = new URLSearchParams({
        read_key: BUCKET_READ_KEY,
        query: JSON.stringify({ type: 'blogs', slug: slug }),
        props: 'slug,title,metadata,published_at',
        limit: "1"
    });

    const response = await fetch(`${url}?${params}`, {
        method: 'GET',
    });
    const data = await response.json();
    return data.objects[0];


}

type TBlog = {
    title: string;
    published_at: string;
    metadata: {
        description: string;
        category: string;
        blog_content: string;
    };
    slug: string;
};

class BlogClass extends Component<TBlog> {
    state = {
        blogs: [],
    };
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.getProject();
    }
    showBlogs(blogs: any[]) {
        if (blogs.length > 0) {
            return blogs.map((blog, index) => {
                return (
                    <a href={`/blog/${blog.slug}`}>
                        <h1 className=" hover:underline text-black text-opacity-80 text-base font-bold leading-7">{
                            blog.title
                        }</h1>
                        <img className="rounded-lg" src={blog.thumbnail} alt="" />
                    </a>
                );
            })
        } else {
            return <div className="text-center text-2xl font-bold">No blogs found</div>
        }
    }
    getProject() {
        this._getProject().then((response) => {
            if (response.objects) {
                this.setState({ blogs: response.objects });
            }
        });
    }
    _getProject() {
        return fetch('https://api.cosmicjs.com/v3/buckets/beyond-bits-and-chisels-production/objects?pretty=true&query=%7B%22type%22:%22blogs%22%7D&limit=3&read_key=4698vcBlH88X1QyH3kFkrMwqdcs8q6Ud1AzowkWeBe2CTIeIG3&depth=1&props=slug,title,thumbnail')
            .then((response) => response.json());
    }
    render() {
        ReactGA.send({ hitType: "pageview", page: `/blog/${this.props.slug}`, title: this.props.title });
        return (
            <div className="p-16 flex flex-col gap-10">
                <nav className="flex justify-between" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center mb-3 sm:mb-0">
                        <li>
                            <div className="flex items-center text-custom-orange-600">
                                Home
                            </div>
                        </li>
                        <span className="mx-2 text-gray-400">/</span>
                        <li>
                            <div className="flex items-center text-tertiary-600">
                                {this.props.title}
                            </div>
                        </li>
                    </ol>
                </nav>

                <h1 className="text-black text-4xl font-bold font-['Raleway'] leading-7">{this.props.title}</h1>
                <div className="inline-flex items-center mb-3 sm:mb-0">
                    <div className="text-xs font-normal font-['Raleway'] text-custom-orange-400 "> {this.props.metadata.category} </div>
                    <span className="mx-2 text-gray-400">|</span>
                    <div className="text-center text-zinc-500 text-xs font-normal font-['Raleway']">{this.props.published_at}</div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-9/12 " dangerouslySetInnerHTML={{ __html: this.props.metadata.blog_content }}></div>
                    <div className="w-1/5 flex-col flex gap-12">
                        <h1 className="text-black text-xl text-base font-bold leading-7">More Posts</h1>
                        {this.showBlogs(this.state.blogs)}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-black text-xl font-bold font-['Raleway'] leading-7">Comments</h1>
                    <div className="flex flex-row gap-2 items-center flex-wrap">
                        <div className="flex flex-row gap-4 flex-wrap">
                            <div>
                                <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="name@flowbite.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="input-group-2" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Name" />
                                </div>
                            </div>
                            <div className="md:w-1/4 w-full">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            </div>
                        </div>
                        <div>
                            <RaisedButton buttonName="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


const Blog: React.FC = () => {
    const blog: any = useLoaderData();
    console.log(blog);
    return (
        <BlogClass title={blog.title} published_at={blog.published_at} metadata={blog.metadata} slug={blog.slug} />
    );
};

export default Blog;
