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

  useEffect((): void => {
    window.history.scrollRestoration = 'auto'

    const cachedScrollPositions: Array<[number, number]> = []
    let shouldScrollRestore: null | { x: number; y: number }

    Router.events.on('routeChangeStart', () => {
      cachedScrollPositions.push([window.scrollX, window.scrollY])
    })

    Router.events.on('routeChangeComplete', () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore
        window.scrollTo(x, y)
        shouldScrollRestore = null
      }
      window.history.scrollRestoration = 'auto'
    })

    Router.beforePopState(() => {
      if (cachedScrollPositions.length > 0) {
        const scrolledPosition = cachedScrollPositions.pop()
        if (scrolledPosition) {
          shouldScrollRestore = {
            x: scrolledPosition[0],
            y: scrolledPosition[1],
          }
        }
      }
      window.history.scrollRestoration = 'manual'
      return true
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
