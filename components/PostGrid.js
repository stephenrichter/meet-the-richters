import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import ReactVisibilitySensor from 'react-visibility-sensor'

export function onChange(isVisible) {
  if(isVisible) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export default function PostGrid({ reverse, posts }) {
  return reverse ? (
    <section class="p-10 lg:p-20">
        <div class="container mx-auto grid lg:grid-cols-2/3 gap-4 lg:gap-8">
          <div>
            <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
          </div>
          <ReactVisibilitySensor onChange={onChange}>
            <div class="grid grid-rows-1 gap-4 lg:gap-8">
              {posts.map(({ id, date, title }) => (
                
                <Link href={`/posts/${id}`}>
                <div key={id} class="flex flex-col justify-end min-h-1/4 bg-gray-200 dark:bg-material-dark hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer p-4">
                  <h4>{title}</h4>
                  <small>
                    <Date dateString={date} />
                  </small>
                </div>
              </Link>
              ))}
            </div>
          </ReactVisibilitySensor>
        </div>
    </section>
  ) : (
    <section class="p-10 lg:p-20">
      <div class="container mx-auto grid lg:grid-cols-1/3 gap-4 lg:gap-8">
        <div class="order-first lg:order-last">
          <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
        </div>

        <div class="grid grid-rows-1 gap-4 lg:gap-8">
          {posts.map(({ id, date, title }) => (
          <Link href={`/posts/${id}`}>
            <div key={id} class="flex flex-col justify-end min-h-1/4 bg-gray-200 dark:bg-material-dark hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer p-4">
              <h4>{title}</h4>
              <small>
                <Date dateString={date} />
              </small>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  )
}