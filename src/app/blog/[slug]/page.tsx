import { cosmic } from "../../../cosmic/client";
import { SingleBlog } from "../../../cosmic/blocks/blog/SingleBlog";
import { Comments } from "../../../cosmic/blocks/comments/Comments";



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { object: page } = await cosmic.objects.findOne({
        type: "blog-posts",
        slug
    }).props("title,metadata").depth(1);

    const { seo = {} } = page.metadata;
    const { title, description, og_title, og_description, og_image } = seo;

    return {
        title: title || page.title,
        description,
        openGraph: {
            title: og_title,
            description: og_description,
            images: [og_image?.imgix_url],
        },
    };
}

export default async function SingleBlogPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { object } = await cosmic.objects.findOne({
        slug,
        type: "blog-posts",
    }).props("id");
    return (
        <div className=" p-4 md:p-16 flex flex-col gap-10">
            <SingleBlog query={{ slug, type: "blog-posts" }} />
            {/* comments section */}
            <Comments
                query={{
                    type: "comments",
                    "metadata.resource": object.id,
                    "metadata.approved": true,
                }}
            />
        </div>
    );
}
