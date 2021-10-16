import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Howdy! I am Özhan. This is a next.js project uploaded to github.</p>
        <p>
          (For details about next.js you can visit{' '}
          <a href="https://nextjs.org/learn" target="_blank"> Next.js Learn</a>.)
        </p>
      </section>
    </Layout>
  )
}