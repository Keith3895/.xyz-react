// app/blog/page.tsx

import RaisedButton from "../../../components/buttons/raisedButton";
import { BlogList } from "../../../cosmic/blocks/blog/BlogList";
export default async function BlogListPage() {
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
                <BlogList
                    query={{ type: "blog-posts" }}
                    sort="-created_at"
                    limit={10}
                    skip={0}
                    noWrap={true}
                />
            </div>

        </div>

    );
}
