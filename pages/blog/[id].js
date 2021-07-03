import Head from 'next/head'
import { getBlogPostFiles, getBlogPosts } from '../../lib/blog';
import styles from './post.module.css'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { monthAbbrev } from '../../lib/utils';

export default function BlogPage({ name, date, content }) {
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

  const dateObject = new Date(date);

  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.FullPageArticle}>
          <Link href="/">
            <div className={styles.ArticleCloseButton}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 512 512" style={{marginTop:15,marginLeft:15}} xmlSpace="preserve">
                <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
              </svg>
            </div>
          </Link>

          <div className={styles.FullPageArticle__Content}>
            <h1 style={{fontWeight:600}}>{ name }</h1>
            <p style={{marginTop:20,marginBottom:70,color:'#999'}}> { `${monthAbbrev(dateObject.getMonth())} ${dateObject.getDate()} ${dateObject.getFullYear()}` } </p>
            <ReactMarkdown components={components} children={content} rehypePlugins={[rehypeRaw]}/>
          </div>
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
