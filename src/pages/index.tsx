import { GetStaticProps } from 'next'
import Link from 'next/link'
import config from 'config'

import * as styles from '#shared/styles/pages/posts/styles.css'
import PageSEO from '#components/shared/SEO/PageSEO'
import Card from '#components/card'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'
import { DEFAULT_POSTS_SIZE } from '#constants'

function IndexPage({ allPosts }: { allPosts: Post[] }) {
  return (
    <>
      <PageSEO title="Home" url={config.url} />
      <h1 className={styles.title}>Latest</h1>
      <ul className={styles.container}>
        {allPosts.map(({ frontMatter, slug }, index) => (
          <li key={index} className={styles.cardContainer}>
            <Link href={`/${slug.year}/${slug.subject}/${slug.title}`}>
              <a>
                <Card frontMatter={frontMatter} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: {
      allPosts: allPosts.slice(0, DEFAULT_POSTS_SIZE),
    },
  }
}
