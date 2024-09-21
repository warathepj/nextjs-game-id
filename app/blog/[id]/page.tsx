import BlogCard from '@/components/blog-card'
import React from 'react'

const BlogId = ({ params }) => {
  const param = params.id;

  return (
    <div>BlogId
      <pre>param from blog/id : {param}</pre>

        <BlogCard param={param}/>
    </div>
  )
}

export default BlogId