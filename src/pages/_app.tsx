import { useMemo, useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { RecoilRoot } from 'recoil'
import { getPrefersMode } from '@copiest/utils'

import '#shared/globalStyles.css.ts'
import * as styles from '#shared/styles/pages/posts/styles.css'
import Header from '#components/header'
import Layout from '#components/layout'
import Footer from '#components/footer'
import { lightTheme, darkTheme } from '#shared/theme.css'
import { BLOG_THEME_KEY, LIGHT_MODE, DARK_MODE } from '#constants'
import { pageview } from '#utils/ga'

export type CustomThemeType = 'LIGHT' | 'DARK'

function App({ Component, pageProps }: AppProps) {
  const Router = useRouter()
  const [theme, setTheme] = useState<CustomThemeType>(LIGHT_MODE)
  const customTheme = useMemo(() => (theme === DARK_MODE ? darkTheme : lightTheme), [theme])

  const handleThemeChange = (): void => {
    if (theme === LIGHT_MODE) {
      setTheme(DARK_MODE)
      localStorage.setItem(BLOG_THEME_KEY, DARK_MODE)
    } else {
      setTheme(LIGHT_MODE)
      localStorage.setItem(BLOG_THEME_KEY, LIGHT_MODE)
    }
  }

  useEffect((): void => {
    if (localStorage.getItem(BLOG_THEME_KEY)) {
      setTheme(localStorage.getItem(BLOG_THEME_KEY) as CustomThemeType)
    } else {
      if (getPrefersMode() === LIGHT_MODE) {
        localStorage.setItem(BLOG_THEME_KEY, LIGHT_MODE)
        setTheme(LIGHT_MODE)
      } else {
        localStorage.setItem(BLOG_THEME_KEY, DARK_MODE)
        setTheme(DARK_MODE)
      }
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => Router.events.off('routeChangeComplete', handleRouteChange)
  }, [Router.events])

  return (
    <RecoilRoot>
      <div className={[styles.bodyContainer, customTheme].join(' ')}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Header theme={theme} onChangeTheme={handleThemeChange} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </div>
    </RecoilRoot>
  )
}

export default App
