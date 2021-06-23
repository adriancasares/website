import Head from 'next/head'
import { getBlogPostFiles, getBlogPosts } from '../../lib/blog';
import { motion } from "framer-motion"
import styles from './post.module.css'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function BlogPage({ title, date, content }) {
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={prism} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} useInlineStyles={false} {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

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
    <ReactMarkdown components={components} children={content} rehypePlugins={rehypeRaw}/>
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
