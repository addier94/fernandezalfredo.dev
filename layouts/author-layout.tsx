import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="An introduction to my background, the work I do, and the motivation behind launching this blog. A brief insight into the person driving the content, offering context and purpose to the journey ahead."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div>
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-24">
          <div className="prose prose-lg dark:prose-invert">
            <div>
              <h2 className="mt-0">
                Glad to have you here! <Twemoji emoji="waving hand" />
              </h2>
              <p>
                I’m <strong> Alfredo Fernandez Carlos</strong>, a front-end software engineer from
                Bolivia with a passion for building engaging and dynamic user interfaces. My
                expertise lies in <strong>JavaScript</strong>, particularly with technologies like
                TypeScript, React, and TailwindCSS. I enjoy crafting responsive, efficient, and
                visually appealing web experiences that prioritize performance and user interaction.
              </p>
              <p>
                I launched this blog to document and share the knowledge and insights I've gained
                throughout my journey as a software engineer. Writing and building projects help me
                deepen my understanding of new concepts and technologies. My aim is to create a
                valuable resource for fellow developers interested in web development and related
                fields.
              </p>
            </div>
            <div>
              <div className="mb-[1em] mt-[2em] flex items-center justify-between [&>h2]:my-0">
                {/* <h2>My career</h2> */}
                <h2>Contact</h2>
                <Button as="a" href="/static/resume.pdf" target="_blank">
                  <span>Resume</span>
                  <Twemoji emoji="page-facing-up" />
                </Button>
              </div>
              {/* <CareerTimeline /> */}
            </div>
            <div>
              {/* <h2>Contact</h2> */}
              <p>
                Reach out to me at{' '}
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a> or find me on
                social media:
              </p>
              <SocialAccounts />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
