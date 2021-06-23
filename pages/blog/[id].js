import Head from 'next/head'
import { getBlogPostFiles, getBlogPosts } from '../../lib/blog';
import { blogPosts } from '../../lib/data';
import { motion } from "framer-motion"
import styles from './post.module.css'
import Link from 'next/link'

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>Blog Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.FullPageArticle}>
          <Link href="/"><a>Back to Home Page</a></Link>
          <motion.div className={styles.FullPageArticle__Content} initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0 }}>
            {content}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: 
      getBlogPostFiles().map(item => {
        return {
          params: {
            id: item
          }
        }
      })
    , fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  return {
    props: 
      getBlogPosts().find(post => {
        return post.id == params.id
      })
    
  };
}
