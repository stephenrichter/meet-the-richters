import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import PostGrid from '../components/PostGrid'
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
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
      <section class="p-10 lg:p-20">
        <div class="container mx-auto min-h-1/2 grid lg:grid-cols-2 gap-8">
          <div class="h-2/3 w-3/4 absolute top-0 left-0 bg-black bg-opacity-10 -z-10"></div>

          <div class="">
            <h2 class="text-7xl font-semibold lg:mt-20 font-serif">Welcome <br/>to our journal!</h2>
            <p class="text-lg mt-4">We hope you follow along and enjoy some of our stories. We hope you follow along and enjoy some of our stories. We hope you follow along and enjoy some of our stories. Lorem ipsum.</p>
          </div>

          <div class="order-first lg:order-last">
            <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
          </div>
        </div>
      </section>

      <PostGrid posts={allPostsData} reverse />

      <PostGrid posts={allPostsData} />
    </Layout>
  )
}