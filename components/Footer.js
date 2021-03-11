import Link from 'next/link'

export default function Footer() {
  return (
    <footer class="min-h-1/4 p-10 lg:p-20 bg-material-dark text-gray-50">
      <div class="container mx-auto grid grid-cols-1 gap-2 text-center">
        <Link href="/"><a class="text-2xl font-serif text-white py-3">Meet the Richters</a></Link>
        <p class="text-gray-400 text-sm">Made with ♥ and Next.js</p>
      </div>
    </footer>
  )
}