import React from 'react'
import Image from 'next/image'
import styles from './ArticlePreview.module.css'
import Link from 'next/link'

export default function Article(props) {
    return (
        <article className={styles.ArticlePreview}>
            <Link href={`/blog/${props.data.id}`}>
                <div className={styles.ArticlePreview__ContentWrapper}>
                    <Image src={`/post-assets/${props.data.id}/${props.data.thumbnail}`} width={100} height={100}></Image>
                    <div className={styles.ArticlePreview__TextInfo}>
                        <p className={styles.ArticlePreview__TextInfo__Name}>{ props.data.name }</p>
                        <p className={styles.ArticlePreview__TextInfo__Description}>{ props.data.content }</p>
                    </div>
                </div>
            </Link>
        </article>
    )
}
