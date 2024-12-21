'use client';

import styles from '@/styles/NewsCardText.module.css';

export default function NewsCardText({ headline }) {
  return (
    <div className={styles.newsCardOnlyText}>
      <h2 className={styles.headlineOnly}>
        {headline}
      </h2>
    </div>
  );
}
