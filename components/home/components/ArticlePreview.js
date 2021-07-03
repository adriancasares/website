import React from 'react'
import styles from './ArticlePreview.module.css'
import Link from 'next/link'

export default function Article(props) {
    console.log(`/post-assets/${props.data.id}/${props.data.thumbnail}`);
    return (
        <article className={styles.ArticlePreview}>
            <Link href={`/blog/${props.data.id}`}>
                <div className={styles.ArticlePreview__ContentWrapper}>
                    <img src={`/post-assets/${props.data.id}/${props.data.thumbnail}`} width={230} height={275} /* next/Image not working on apple silicon *//>
                    <div className={styles.ArticlePreview__TextInfo}>
                        <p className={styles.ArticlePreview__TextInfo__Name}>{ props.data.name }</p>
                        <p className={styles.ArticlePreview__TextInfo__Description}>{ props.data.excerpt }</p>
                    </div>
                </div>
            </Link>
        </article>
    )
}
