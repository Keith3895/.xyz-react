import { cosmic } from "../../client";
import { PostType } from "./BlogCard";

export default async function ShowRecentBlogs() {
    const { objects: posts } = await cosmic.objects
        .find({ type: "blog-posts" })
        .props("id,slug,title,metadata")
        .depth(1)
        .sort("-order")
        .limit(3)
        .status("published");
    return posts.map((post:PostType) => {
        return (
            <a key ={post.slug} href={`/blog/${post.slug}`}>
                <h1 className=" hover:underline text-black text-opacity-80 text-base font-bold leading-7">{
                    post.title
                }</h1>
                <img className="rounded-lg" src={post.metadata.image.imgix_url} alt="" />
            </a>
        );
    });
};