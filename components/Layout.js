import Head from 'next/head'
import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import NavMenu from './NavMenu'

export const siteTitle = 'Meet the Richters'

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hideMenu, setHideMenu] = useState(true)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function toggleMenu() {
    let wasVisible = isVisible

    // Menu was not visible, show it
    if(!wasVisible) {
      setHideMenu(false)
    }

    // Trigger animation
    setIsVisible(!isVisible)
    // Wait for animation to finish
    await sleep(1000)
    
    if (wasVisible) {
      // Menu was visible, now it is not, hide it
      setHideMenu(true)
    }
  }

  return (
    <div className="flex flex-col h-fill justify-between bg-background dark:bg-background-dark duration-500 -z-20">
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

      <NavMenu isVisible={isVisible} hideMenu={hideMenu} onToggleMenu={toggleMenu} />

      <Header onToggleMenu={toggleMenu} />

      <main className="mt-20 mb-auto text-gray-900 dark:text-gray-100">{children}</main>

      <Footer />
    </div>
  )
}