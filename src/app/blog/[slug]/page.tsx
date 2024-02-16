import RaisedButton from "../../../../components/buttons/raisedButton";
import { cosmic } from "../../../../cosmic/client";
import { PostType } from "../../../../cosmic/blocks/blog/BlogCard";
import { SingleBlog } from "../../../../cosmic/blocks/blog/SingleBlog";





export default async function SingleBlogPage({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div className=" p-4 md:p-16 flex flex-col gap-10">
            <SingleBlog query={{ slug: params.slug, type: "blog-posts" }} />
            {/* comments section */}
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


        // <SingleBlog query={{ slug: params.slug, type: "blog-posts" }} />
    );
}
