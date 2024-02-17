import { getFormattedDate } from "../../../cosmic/utils";
import BlogCardComponent from "../../../components/blogCard";

export type PostType = {
  id: string
  title: string
  slug: string
  metadata: {
    categories: any
    image: {
      imgix_url: string
    }
    content: string
    author: {
      title: string
      metadata: {
        seo:{
          description: string
        }
        image: {
          imgix_url: string
        }
      }
    }
    published_date: string
  }
}

export function BlogCard({
  post,
  className,
}: {
  post: PostType
  className?: string
}) {
  return (
    <BlogCardComponent title={post.title} thumbnail={post.metadata.image.imgix_url} category={post.metadata.categories[0].title} date={getFormattedDate(post.metadata.published_date)} slug={post.slug} description={post.metadata.seo.description} />
  )
}
