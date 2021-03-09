import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
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
    
      <section class="flex flex-col flex-col-reverse lg:flex-row">
        <div class="h-2/3 w-3/4 absolute top-0 left-0 bg-black bg-opacity-10 -z-10"></div>

        <div class="flex-1 px-8">
          <h2 class="text-7xl font-semibold mt-14 xl:mt-28 font-serif">Welcome <br/>to our journal!</h2>
          <p class="text-lg mt-4">We hope you follow along and enjoy some of our stories. We hope you follow along and enjoy some of our stories. We hope you follow along and enjoy some of our stories. Lorem ipsum.</p>
        </div>

        <div class="flex-1 px-8">
          <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
        </div>
      </section>

      <section class="grid grid-cols-2 mt-48">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}