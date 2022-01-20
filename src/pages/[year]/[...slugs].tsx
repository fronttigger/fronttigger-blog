import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import * as styles from '#shared/styles/pages/postDetail/styles.css'
import MDXComponents from '#components/shared/MDX'
import PostSEO from '#components/shared/SEO/PostSEO'
import { Post, Slug } from '#types/post'
import { getAllPosts, getPost } from '#utils/posts'

function PostDetail({ post, code }: { post: Post; code: string }) {
  const { title, date, description, tags, thumbnailImg } = post.frontMatter
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <PostSEO
        seo={{
          title,
          description,
          thumbnailImg,
          tags,
        }}
      />
      <section className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.date}>{date}</span>
        <Component components={MDXComponents} />
      </section>
    </>
  )
}

export default PostDetail

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts()
  const paths: Array<{ params: { year: string; slugs: string[] } }> = []

  for (const post of allPosts) {
    const { year, subject, title } = post.slug

    paths.push({ params: { year, slugs: [subject, title] } })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: { year: string; slugs: string[] } }) => {
  const { post, code } = await getPost({
    year: params.year,
    subject: params.slugs[0],
    title: params.slugs[1],
  } as Slug)

  return {
    props: {
      post,
      code,
    },
  }
}
