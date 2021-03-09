import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'

export default function PostGrid({ reverse, posts }) {
  return reverse ? (
    <section class="p-10 lg:p-20">
      <div class="container mx-auto grid lg:grid-cols-2/3 gap-4 lg:gap-8">
        <div>
          <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
        </div>

        <div class="grid grid-rows-2 gap-4 lg:gap-8">
          {posts.map(({ id, date, title }) => (
          <Link href={`/posts/${id}`}>
            <div key={id} class="flex flex-col justify-end bg-gray-200 hover:bg-gray-300 cursor-pointer p-4">
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
  ) : (
    <section class="p-10 lg:p-20">
      <div class="container mx-auto grid lg:grid-cols-1/3 gap-4 lg:gap-8">
        <div class="order-first lg:order-last">
          <Image src="/images/hero.jpg" alt="The Richters" width={780} height={520} layout="responsive" />
        </div>

        <div class="grid grid-rows-2 gap-4 lg:gap-8">
          {posts.map(({ id, date, title }) => (
          <Link href={`/posts/${id}`}>
            <div key={id} class="flex flex-col justify-end bg-gray-200 hover:bg-gray-300 cursor-pointer p-4">
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