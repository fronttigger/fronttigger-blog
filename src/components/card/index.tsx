import Image from 'next/image'

import * as styles from './styles.css'

import { FrontMatter } from '#types/post'

export default function Card({ frontMatter }: { frontMatter: FrontMatter }) {
  const { thumbnailImg, title: postTitle, description, date } = frontMatter

  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={thumbnailImg || ''} width="192px" height="144px" alt={postTitle} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{postTitle}</h1>
        <div>
          <p className={styles.description}>{description}</p>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </article>
  )
}
