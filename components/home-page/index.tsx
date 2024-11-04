import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'

export function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-4 md:mb-8">
              <p>I started this blog to practice my skill and share my knowledge.</p>
              <p>
                I'm a remote tech enthusiast, though I've been staying put lately. Most of my days
                are rooted in Santa Cruz, Bolivia, where I'm focused on building routines that drive
                productivity and growth.
              </p>
              <p>Assisting companies in bringing their products to life through engineering.</p>
              <p>Guiding developers on their journey to skill enhancement.</p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">Enjoy exploring the content!</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden pt-4 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts posts={posts} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
