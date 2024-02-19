import { Suspense } from "react";
import { BlogList } from "../cosmic/blocks/blog/BlogList";
import { LoadMore } from "../cosmic/blocks/pagination/LoadMore";
import { cosmic } from "../cosmic/client";
import { unstable_noStore as noStore } from 'next/cache';
const LIMIT = 3;

async function loadMorePosts(offset: number = 0) {
    "use server";
    const nextOffset = LIMIT + offset;
    return [
        <BlogList
            key={offset}
            query={{ type: "blog-posts" }}
            sort="-order"
            limit={LIMIT}
            skip={nextOffset}
            noWrap
        />,
        nextOffset,
    ] as const;
}

export default async function List() {
    noStore();
    const skip = 0;
    const { total } = await cosmic.objects
        .find({ type: "blog-posts" })
        .props("id")
        .limit(1);
    return (
        <div >
            <LoadMore
                loadMoreAction={loadMorePosts}
                initialOffset={skip}
                total={total}
                limit={LIMIT}
                className="flex flex-row gap-12 flex-wrap justify-center"
            >
                <Suspense fallback={<p>Loading feed...</p>}>
                    <BlogList
                        query={{ type: "blog-posts" }}
                        sort="-created_at"
                        limit={LIMIT}
                        skip={skip}
                        noWrap={true}
                    />
                </Suspense>
            </LoadMore>
        </div>
    );
}

export const revalidate = 6 // revalidate at most every hour