import Head from 'next/head'
import { blogPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>Blog Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          { title }
        </h1>
        <p>
          {content}
        </p>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: 
      blogPosts.map(item => {
        return {
          params: {
            slug: item.slug
          }
        }
      })
    , fallback: false
  }
}

export async function getStaticProps(context) {
  console.log(context);
  
  const { params } = context;

  return {
    props: 
      blogPosts.find(item => {
        return item.slug == params.slug
      })
    
  };
}
