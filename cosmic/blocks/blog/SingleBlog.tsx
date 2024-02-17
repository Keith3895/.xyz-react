// app/blog/[slug]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { cosmic } from "../../client"
import { getFormattedDate } from "../../utils"
import ShowRecentBlogs from "./showRecentBlogs"

export async function SingleBlog({
    query,
    className,
    status,
}: {
    query: any
    className?: string
    status?: "draft" | "published" | "any"
}) {
    try {
        const { object: blog } = await cosmic.objects
            .findOne(query)
            .props("id,slug,title,metadata")
            .depth(1)
            .status(status ? status : "published")
        const date = getFormattedDate(blog.metadata.published_date)

        return (
            <div>
                <nav className="flex justify-between" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center mb-3 sm:mb-0">
                        <li>
                            <Link className="flex items-center text-custom-orange-600 hover:underline" href="/blog">
                                Home
                            </Link>
                        </li>
                        <span className="mx-2 text-gray-400">/</span>
                        <li>
                            <div className="flex items-center text-tertiary-600 truncate">
                                {blog.title}
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="inline-flex items-center mb-3 sm:mb-0">
                    <div className="text-xs font-normal font-['Raleway'] text-custom-orange-400 ">
                        {blog.metadata.categories.map((category: any) => {
                            const categoryBackgroundColor = `${category.metadata.color}22`
                            return (
                                <span
                                    className="mb-1 mr-1 rounded-xl px-3 py-1 text-black/70 "
                                    style={{
                                        backgroundColor: categoryBackgroundColor,
                                        border: `1px solid ${category.metadata.color}`,
                                    }}
                                    key={category.slug}
                                >
                                    {category.title}
                                </span>
                            )
                        })}
                    </div>
                    <span className="mx-2 text-gray-400">|</span>
                    <div className="text-center text-zinc-500 text-xs font-normal font-['Raleway']">
                        {date}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-9/12">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter text-black md:text-4xl">
                            {blog.title}
                        </h1>
                        <div className="mb-10 w-full overflow-hidden rounded-xl">
                            <img
                                src={`${blog.metadata.image.imgix_url}?w=2000&auto=format,compression`}
                                alt={blog.title}
                                className="aspect-video w-full object-cover"
                            />
                        </div>
                        <div className="w-full" dangerouslySetInnerHTML={{ __html: blog.metadata.content }}></div>
                    </div>
                    <div className="w-full md:w-1/5 flex-col flex gap-12">
                        <h1 className="text-black text-xl text-base font-bold leading-7">More Posts</h1>
                        <div className="flex-row md:flex-col">

                            <ShowRecentBlogs />
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (e: any) {
        if (e.status === 404) return notFound()
    }
}
