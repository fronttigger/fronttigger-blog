import { useMemo, useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { RecoilRoot } from 'recoil'

import '#shared/globalStyles.css.ts'
import * as styles from '#shared/styles/pages/posts/styles.css'
import Header from '#components/header'
import Layout from '#components/layout'
import Footer from '#components/footer'
import { lightTheme, darkTheme } from '#shared/theme.css'
import { BLOG_THEME_NAME } from '#constants'

export type CustomThemeType = 'light' | 'dark'

function App({ Component, pageProps }: AppProps) {
  const Router = useRouter()
  const [theme, setTheme] = useState<CustomThemeType>('light')
  const customTheme = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme])

  const handleThemeChange = (): void => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem(BLOG_THEME_NAME, 'dark')
    } else {
      setTheme('light')
      localStorage.setItem(BLOG_THEME_NAME, 'light')
    }
  }

  useEffect((): void => {
    if (!localStorage.getItem(BLOG_THEME_NAME)) {
      localStorage.setItem(BLOG_THEME_NAME, 'light')
    }

    const currentTheme =
      typeof window !== undefined
        ? (localStorage.getItem(BLOG_THEME_NAME) as CustomThemeType)
        : 'light'

    setTheme(currentTheme)
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
