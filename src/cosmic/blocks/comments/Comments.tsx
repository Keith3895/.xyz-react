// components/comments.tsx
import { UserRound } from "lucide-react"
import { CommentForm } from "./CommentForm"
import { cosmic } from "../../client"

type Comment = {
  title: string
  slug: string
  metadata: {
    comment: string
  }
  created_at: string
}

function Comment({
  comment,
  className,
}: {
  comment: Comment
  className?: string
}) {
  const date = new Date(comment.created_at).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
  return (
    <div
      className={`mb-6 flex flex-col rounded-xl border border-zinc-300 p-4 pb-6 ${className}`}
    >
      <div className="mb-4 flex w-full flex-col justify-between gap-2 text-gray-500  sm:flex-row md:items-center">
        <div className="flex items-center gap-2 text-black">
          <UserRound className="h-4 w-4" />
          <div className="text-lg">{comment.title}</div>
        </div>
        <div className="text-xs">{date}</div>
      </div>
      <div className="pr-6 text-zinc-700">
        {comment.metadata.comment}
      </div>
    </div>
  )
}

export async function Comments({
  query,
  sort,
  limit,
  skip,
  className,
  status,
}: {
  query: any
  sort?: string
  limit?: number
  skip?: number
  className?: string
  status?: "draft" | "published" | "any"
}) {
  let comments = []
  const resourceId = query["metadata.resource"]
  try {
    // Get the id
    const { objects } = await cosmic.objects
      .find(query)
      .props("title,slug,metadata,created_at")
      .depth(1)
      .sort(sort ? sort : "created_at")
      .limit(limit ? limit : 100)
      .skip(skip ? skip : 0)
      .status(status ? status : "published")
    comments = objects
  } catch (err) {}
  return (
    <div className={`m-auto w-full max-w-[750px] p-4 ${className}`}>
      <h2 className="mb-4 text-2xl">Comments</h2>
      {comments.map((comment: Comment) => {
        return <Comment comment={comment} key={comment.slug} />
      })}
      <CommentForm resourceId={resourceId} />
    </div>
  )
}
