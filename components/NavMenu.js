export default function NavMenu({ isVisible, hideMenu, onToggleMenu }) {
  return (
    <div class={`${isVisible ? 'animate-top-down' : 'animate-bottom-up'} ${hideMenu ? 'hidden' : 'fixed'} h-screen w-screen z-50 bg-material-dark text-gray-100`}>
      <div class="container h-screen w-full lg:max-w-4xl mx-auto py-20 px-5 flex flex-col justify-center items-center text-center">
        <div class="grid gap-10 mb-12">
          <h4 class="text-xs text-yellow-700 uppercase">Browse Topics</h4>
          <div class="flex flex-wrap justify-center items-center">
            <div class="h-20 font-serif text-4xl px-5">Lifestyle</div>
            <div class="h-20 font-serif text-4xl px-5">Travel</div>
            <div class="h-20 font-serif text-4xl px-5">Food</div>
            <div class="h-20 font-serif text-4xl px-5">Fitness</div>
            <div class="h-20 font-serif text-4xl px-5">Tech</div>
            <div class="h-20 font-serif text-4xl px-5">Home</div>
          </div>
        </div>
        <div class="rounded-full h-16 w-16 mx-auto flex items-center justify-center border border-gray-300 hover:border-gray-500 cursor-pointer" onClick={onToggleMenu}>
          <img class="p-5" src="https://assets.website-files.com/5e7f419c0c4ef4901af6d061/5e8dbbbe9425d73329e3d163_close-24px.svg" />
        </div>
      </div>
    </div>
  )
}