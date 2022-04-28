import fs from 'fs'

import { getAllPosts } from './posts'

async function createSitemap() {
  const allPosts = await getAllPosts()
  const slugs = allPosts.map((post) => post.slug)

  const postUrls = slugs.map(
    (slug) => `<url>
                 <loc>https://tigger.dev/${slug.year}/${slug.subject}/${slug.title}</loc>
               </url>`,
  )

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://tigger.dev/posts</loc>
    </url>
    <url>
        <loc>https://tigger.dev/about</loc>
    </url>
        ${postUrls.join('\n')}
    </urlset>`.replace(/\n|\t/g, ' ')

  await fs.promises.writeFile('public/sitemap.xml', sitemap, {
    encoding: 'utf-8',
  })
}

createSitemap()
