import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import config from 'config'

import Skeleton from '#components/skeleton'
import * as styles from '#shared/styles/pages/posts/styles.css'
import PageSEO from '#components/shared/SEO/PageSEO'
import Card from '#components/card'
import { hasNextPostsPageState, allPostsState, pageState, currentPostsState } from '#store/posts'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'
import { DEFAULT_POSTS_SIZE } from '#constants'

function PostsPage({ allPosts }: { allPosts: Post[] }) {
  const currentPosts = useRecoilValue(currentPostsState)
  const hasNextPostsPage = useRecoilValue(hasNextPostsPageState)
  const setPosts = useSetRecoilState(allPostsState)
  const setPage = useSetRecoilState(pageState)

  const handleChangeInview = (inView: boolean, index: number): void => {
    if (inView && index === currentPosts.length - 3 && hasNextPostsPage) {
      setPage((page) => page + 1)
    }
  }

  useEffect((): void => setPosts(allPosts), [allPosts, setPosts])

  return (
    <>
      <PageSEO title="Posts" url={config.url} />
      <h1 className={styles.title}>Posts</h1>
      <ul className={styles.container}>
        {currentPosts.length > 0
          ? currentPosts.map(({ slug, frontMatter }, index) => (
              // eslint-disable-next-line react/jsx-indent
              <InView
                key={index}
                as="li"
                className={styles.cardContainer}
                onChange={(InView) => handleChangeInview(InView, index)}
              >
                <Link href={`/${slug.year}/${slug.subject}/${slug.title}`}>
                  <a>
                    <Card frontMatter={frontMatter} />
                  </a>
                </Link>
              </InView>
            ))
          : new Array(DEFAULT_POSTS_SIZE).fill(0).map((_, index) => (
              // eslint-disable-next-line react/jsx-indent
              <li key={index} className={styles.cardContainer}>
                <Skeleton />
              </li>
            ))}
      </ul>
    </>
  )
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}
