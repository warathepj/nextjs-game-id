// components/blog-card.tsx
//from components/blog-card.tsx, how to loop and
// render gameplay in p tag
"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Blog {
  path: string;
  code: string;
  name: string;
  description: string;
  introduction: string;
  story: string;
  gameplay: string[];
  highlights: string[];
}

export default function BlogCard({ param }) {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const blog = blogs ? blogs.filter(blog => blog.code.includes(param)) : null;

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/database/blogs.json');
      const data = await response.json();
      setBlogs(data.blogs);
    };

    fetchBlogs();
  }, []);

  return (
    <Card className="max-w-2xl mx-auto">
      <pre>param from BlogCard: {param}</pre>
      {blog ? (
        <>
          {blog.map((b) => (
            <div key={b.code}>
              <CardHeader>
        <CardTitle className="text-2xl font-bold">{b.name}</CardTitle>
        <CardDescription>{b.description}</CardDescription>
      </CardHeader>
              <Image
        src={b.path}
        alt="Blog post cover image"
        width={600}
        height={300}
        className="w-full object-cover"
      />
      <CardContent className="mt-4 prose dark:prose-invert">
        <h3>บทนำ</h3>
        <p className="text-balance">{b.introduction}</p>
        <h3>เนื้อเรื่อง</h3>
        <p className="text-balance">{b.story}</p>
      </CardContent>

              {/* <Link href={`/category/${param}/product/${id.id}`}> */}
                {/* <IdCard
                  id={i.id}
                  path={i.path}
                  name={i.name} 
                  description={i.description} 
                  price={i.price} 
                  count={count} 
                /> */}
              {/* </Link> */}
            </div>
          ))}
        </>
      ) : (
        <p>Loading games...</p>
      )}

<CardContent className="mt-4 prose dark:prose-invert">
  <h3>รูปแบบการเล่น</h3>
      {blog && blog[0].gameplay.map((gameplay, index) => (
        <p key={index}>{gameplay}</p>
        
      ))}
      </CardContent>

<CardContent className="mt-4 prose dark:prose-invert">
<h3>จุดเด่นของเกม</h3>
      {blog && blog[0].highlights.map((highlight, index) => (
        <p key={index}>{highlight}</p>
        
      ))}
      </CardContent>

      <CardHeader>
        <CardTitle className="text-2xl font-bold">The Future of Web Development</CardTitle>
        <CardDescription>Exploring the latest trends and technologies shaping the web</CardDescription>
      </CardHeader>
      <Image
        src="/placeholder.svg?height=300&width=600"
        alt="Blog post cover image"
        width={600}
        height={300}
        className="w-full object-cover"
      />
      <CardContent className="mt-4 prose dark:prose-invert">
        <p>
          As we dive into the ever-evolving world of web development, it's crucial to stay ahead of the curve. 
          In this blog post, we'll explore some of the most exciting trends and technologies that are shaping 
          the future of how we build and interact with websites and web applications.
        </p>
        <h3>1. The Rise of JAMstack</h3>
        <p>
          JAMstack architecture has been gaining significant traction in recent years. By leveraging JavaScript, 
          APIs, and Markup, developers can create faster, more secure, and highly scalable web applications.
        </p>
        <h3>2. Web Assembly: Pushing the Boundaries</h3>
        <p>
          Web Assembly (Wasm) is revolutionizing what's possible in web browsers. It allows developers to run 
          high-performance code written in languages like C++ or Rust directly in the browser, opening up new 
          possibilities for web applications.
        </p>
        <h3>3. AI-Powered Development Tools</h3>
        <p>
          Artificial Intelligence is not just a buzzword; it's actively changing how we develop software. From 
          AI-assisted coding to intelligent testing tools, developers are leveraging machine learning to boost 
          productivity and code quality.
        </p>
      </CardContent>
    </Card>
  )
}