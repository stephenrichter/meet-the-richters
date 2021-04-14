import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { useEffect } from 'react'

function setDarkClass(isDark) {
  useEffect(
    () => {
      if(isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  )
}

export default function Post({ postData }) {
  setDarkClass(postData.isDark)

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
        <article>
          <section class="md:p-10 lg:p-20">
            <div class="lg:container mx-auto grid grid-cols-1 md:grid-cols-layout-md lg:grid-cols-layout-lg">
              {/* Paper block */}
              <div class="bg-white dark:bg-material-dark row-start-1 row-end-3 col-start-2 col-end-5 lg:col-end-6" />

              {/* Image block */}
              <div class="row-start-1 row-end-2 col-start-1 col-end-5">
                <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
              </div>
              
              {/* Title block */}
              <div class="p-5 md:pt-10 md:pr-10 md:pb-10 md:pl-0 lg:px-0 lg:py-24 row-start-2 row-end-3 md:col-start-4 md:col-end-5">
                <div class="grid grid-cols-1 gap-2">
                  <h5 class="text-sm font-serif">Published <Date dateString={postData.date} /></h5>
                  <h1 class="text-3xl lg:text-5xl font-serif leading-normal lg:leading-normal mb-5 lg:mb-10">{postData.title}</h1>
                </div>
                <div class="grid grid-cols-grid-shift lg:grid-cols-1/3 gap-2 md:gap-5">
                  <p class="col-start-2 col-end-3 font-serif text-xl font-light leading-normal">{postData.summary}</p>
                  <div class="col-start-2 col-end-3 pt-2 border-t border-gray-700">
                    <p class="text-sm uppercase font-semibold">{postData.author}</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section class="p-5 md:p-10 lg:px-20 bg-white dark:bg-background-dark">
            <div class="lg:container mx-auto grid grid-cols-1 md:grid-cols-layout-md lg:grid-cols-layout-lg">
              <div class="my-5 row-start-1 row-end-2 col-start-2 lg:col-start-4 col-end-5 prose dark:prose-dark lg:prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
          </section>
        </article>
    </Layout>
  )
}

export function getStaticPaths() {
  // Return all possible id's
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}