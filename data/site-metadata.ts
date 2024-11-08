export const SITE_METADATA = {
  title: `Alfredo’s Tech Odyssey – Thoughts, Insights, and Inspiration`,
  author: 'Alfredo Fernandez',
  headerTitle: `Alfredo dev blog`,
  description:
    'Explore my digital hub where I chronicle my journey in programming—offering hands-on tutorials, industry insights, and curated resources to empower developers in mastering their craft.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.fernandezalfreddo.dev',
  siteRepo: 'https://github.com/addier94/fernandezalfredo.dev',
  siteLogo: `${process.env.BASE_PATH || ''}/static/thumbnails/logo.jpeg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'hi@alfredofernandez.dev',
  github: 'https://github.com/addier94',
  x: 'https://x.com/addier94',
  facebook: 'https://facebook.com/addier94',
  youtube: 'https://www.youtube.com/@addier94',
  linkedin: 'https://www.linkedin.com/in/addier94',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com/addier94',
  locale: 'en-US',
  stickyNav: true,
  // goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  // goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  // imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analyticsUrl: 'https://analytics.leohuynh.dev/share/c9ErglxqzY5CQJ8g/leohuynh.dev',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID!,
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
