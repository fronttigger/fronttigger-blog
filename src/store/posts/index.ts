import { atom, selector } from 'recoil'

import { Post } from '#types/post'
import { DEFAULT_POSTS_SIZE } from '#constants'

const IS_INIT_INDEX_PAGE = 'isInitIndexPage'
const PAGE = 'page'
const ALL_POSTS = 'allPosts'
const CURRENT_POSTS = 'currentPosts'
const HAS_NEXT_POSTS_PAGE = 'hasNextPostsPage'

export const isInitIndexPageState = atom<boolean>({
  key: IS_INIT_INDEX_PAGE,
  default: true,
})

export const pageState = atom<number>({
  key: PAGE,
  default: 1,
})

export const allPostsState = atom<Post[]>({
  key: ALL_POSTS,
  default: [],
})

export const currentPostsState = selector<Post[]>({
  key: CURRENT_POSTS,
  get: ({ get }) => {
    const currentPostsSize = get(pageState) * DEFAULT_POSTS_SIZE
    const posts = get(allPostsState)

    return posts.slice(0, currentPostsSize)
  },
})

export const hasNextPostsPageState = selector<boolean>({
  key: HAS_NEXT_POSTS_PAGE,
  get: ({ get }) => {
    const allPostsTotalLength = get(allPostsState).length
    const page = get(pageState)

    return Math.ceil(allPostsTotalLength / DEFAULT_POSTS_SIZE) !== page
  },
})
