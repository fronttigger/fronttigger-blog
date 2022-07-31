import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import * as styles from './index.css'

import throttleByrAF from '#utils/throttleByrAF'

function ProgressBar() {
  const Router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    Router.events.on('routeChangeComplete', (): void => setProgress(0))

    const scroll = (): void => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      // MEMO: 스크롤바 크기 = 내용 전체의 높이 - 스크롤바를 제외한 클라이언트 높이
      const windowHeight = scrollHeight - clientHeight
      // MEMO: 스크롤바 크기 기준으로 scrollTop이 내려온만큼에 따라 계산 (계산시 소수점 둘째 자리까지 반환)
      const currentPercent = scrollTop / windowHeight

      // MEMO: 소수점 둘째자리 까지이므로, 100을 곱하여 정수화
      setProgress(currentPercent * 100)
    }

    window.addEventListener('scroll', throttleByrAF(scroll))

    return () => window.removeEventListener('scroll', throttleByrAF(scroll))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={styles.container}
      style={{
        width: `${progress}%`,
      }}
    />
  )
}

export default ProgressBar
