import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import config from 'config'

import Skeleton from '#components/skeleton'
import * as styles from '#shared/styles/pages/posts/styles.css'
import PageSEO from '#components/shared/SEO/PageSEO'
import Card from '#components/card'
import {
  hasNextPostsPageState,
  allPostsState,
  pageState,
  currentPostsState,
  initPostsPageLoading,
} from '#store/posts'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'

function PostsPage({ allPosts }: { allPosts: Post[] }) {
  const [isPostsPageLoading, setIsPostsPageLoading] = useRecoilState(initPostsPageLoading)
  const currentPosts = useRecoilValue(currentPostsState)
  const hasNextPostsPage = useRecoilValue(hasNextPostsPageState)
  const setPosts = useSetRecoilState(allPostsState)
  const setPage = useSetRecoilState(pageState)

  const handleChangeInview = (inView: boolean, index: number): void => {
    if (inView && index === currentPosts.length - 3 && hasNextPostsPage) {
      setPage((page) => page + 1)
    }
  }

  useEffect(() => {
    if (isPostsPageLoading) {
      setIsPostsPageLoading(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect((): void => setPosts(allPosts), [allPosts, setPosts])

  return (
    <>
      <PageSEO title="Posts" url={config.url} />
      <h1 className={styles.title}>Posts</h1>
      <ul className={styles.container}>
        {currentPosts.map(({ slug, frontMatter }, index) => (
          <InView
            key={index}
            as="li"
            className={styles.cardContainer}
            onChange={(InView) => handleChangeInview(InView, index)}
          >
            {isPostsPageLoading ? (
              <Skeleton />
            ) : (
              <Link href={`/${slug.year}/${slug.subject}/${slug.title}`}>
                <a>
                  <Card frontMatter={frontMatter} />
                </a>
              </Link>
            )}
          </InView>
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
