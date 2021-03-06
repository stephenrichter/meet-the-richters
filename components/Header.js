import Link from 'next/link'

export default function Header({ onToggleMenu }) {
  return (
    <header className="fixed top-0 z-20 w-full px-10 lg:px-20 bg-white dark:bg-material-dark duration-500">
      <div className="container mx-auto flex justify-between py-3">
        <Link href="/"><a className="text-2xl font-serif font-extrabold dark:text-gray-200 py-3">Meet the Richters</a></Link>
        <nav className="self-center uppercase">
          <div className="rounded-full h-11 w-11 flex items-center justify-center border border-gray-300 dark:bg-gray-300 hover:border-gray-500 cursor-pointer" onClick={onToggleMenu}>
            <img className="p-2" src="https://assets.website-files.com/5e7f419c0c4ef4901af6d061/5e916c9e5f8678313f57819d_drag_handle-24px.svg" />
          </div>
        </nav>
      </div>
    </header>
  )
}