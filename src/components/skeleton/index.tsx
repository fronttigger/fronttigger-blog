import { Skeleton } from '@copiest/ui'

import * as styles from './styles.css'

function CardSkeleton() {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Skeleton variant="rectangular" animation="wave" />
      </div>
      <div className={styles.titleContainer}>
        <Skeleton variant="text" animation="wave" width="inherit" height="45%" />
        <div>
          <div className={styles.description}>
            <Skeleton variant="text" animation="wave" width="45%" height="20px" />
          </div>
          <Skeleton variant="text" animation="wave" width="15%" height="20px" />
        </div>
      </div>
    </article>
  )
}

export default CardSkeleton
