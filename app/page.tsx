import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { Home } from '~/components/home-page'

const MAX_POSTS_DISPLAY = 5

export default async function HomePage() {
  return <Home posts={allCoreContent(sortPosts(allBlogs)).slice(0, MAX_POSTS_DISPLAY)} />
}
