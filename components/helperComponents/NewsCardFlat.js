"use client";

import Image from 'next/image';
import styles from '@/styles/NewsCardFlat.module.css';

export default function NewsCardFlat({ 
  imageUrl, 
  category, 
  headline, 
  excerpt,
  date,
  author 
}) {
  return (
    <div className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={headline}
          fill
          sizes="(max-width: 768px) 100vw, 35vw"
        />
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.category}>{category}</div>
          <h2 className={styles.headline}>{headline}</h2>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        </div>
        <div className={styles.meta}>
          {author && <span className={styles.author}>By {author}</span>}
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
}
