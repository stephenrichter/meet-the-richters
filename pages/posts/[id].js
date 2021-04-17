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
          <section className="md:p-10 lg:p-10">
            <div className="lg:container mx-auto grid grid-cols-1 md:grid-cols-layout-md lg:grid-cols-layout-lg">
              {/* Paper block */}
              <div className="bg-white dark:bg-material-dark row-start-1 row-end-3 col-start-2 col-end-5 lg:col-end-6" />

              {/* Image block */}
              <div className="row-start-1 row-end-2 col-start-1 col-end-5">
                <Image src={`/images/${postData.image}`} alt="The Richters" width={780} height={520} layout="responsive" />
              </div>
              
              {/* Title block */}
              <div className="p-5 md:pt-10 md:pr-10 md:pb-10 md:pl-0 lg:px-0 lg:py-12 row-start-2 row-end-3 md:col-start-4 md:col-end-5">
                <div className="grid grid-cols-1 gap-2">
                  
                  <h1 className="text-3xl lg:text-5xl font-serif leading-normal lg:leading-normal mb-5 lg:mb-10">{postData.title}</h1>
                </div>
                <div className="grid grid-cols-grid-shift lg:grid-cols-1/3 gap-2 md:gap-5">
                  <p className="col-start-2 col-end-3 font-serif text-xl font-light leading-normal">{postData.summary}</p>
                  <div className="col-start-2 col-end-3 pt-2 border-t border-gray-700">
                  <h5 className="text-sm font-serif font-semibold">Published <Date dateString={postData.date} /></h5>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-5 md:p-10 lg:px-20 bg-white dark:bg-background-dark">
            <div className="lg:container mx-auto grid grid-cols-1 md:grid-cols-layout-md lg:grid-cols-layout-lg">
              <div className="my-5 row-start-1 row-end-2 col-start-2 lg:col-start-4 col-end-5 prose dark:prose-dark lg:prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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