import Head from 'next/head'
import config from 'config'

export default function PageSEO({ title, url }: { title: string; url: string }) {
  return (
    <Head>
      <title>{`${title} – ${config.title}`}</title>
      <meta name="title" content={title} />
      <meta name="subject" content={config.title} />
      <meta name="description" content={config.description} />
      <meta name="author" content={config.author.name} />
      <meta name="keywords" content={config.title} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.thumbnail} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <meta name="google-site-verification" content="TKIdJnriiDuVdbn-ip2gffaB8oEzddxMZyE4H-jB4bY" />
    </Head>
  )
}
