import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const siteTitle = 'Meet the Richters'

export default function Layout({ children, home }) {
  return (
    <div class="flex flex-col h-screen justify-between bg-background dark:bg-background-dark -z-20">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main class="mt-24 mb-auto text-gray-900 dark:text-gray-100">{children}</main>

      <Footer />
    </div>
  )
}