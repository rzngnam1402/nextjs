import { useRouter } from 'next/router'
import React from 'react'

const BlogPostsPage = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>The blog post</div>
    )
}

export default BlogPostsPage