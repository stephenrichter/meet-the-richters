import { useState } from "react"
import ReactCursorPosition from "react-cursor-position"

export default function NavMenu({ isVisible, hideMenu, onToggleMenu }) {
  return (
    
    <div class={`${isVisible ? 'animate-top-down' : 'animate-bottom-up'} ${hideMenu ? 'hidden' : 'fixed'} h-screen w-screen z-50 bg-material-dark text-gray-100`}>
      <div class="container h-screen w-full lg:max-w-4xl mx-auto py-20 px-5 flex flex-col justify-center items-center text-center">
        <div class="grid gap-10 mb-12">
          <h4 class="text-xs text-gray-500 uppercase">Browse Topics</h4>
          <div class="flex flex-wrap justify-center items-center">
            <ReactCursorPosition>
                <NavMenuItem label="Home" img="https://i.pinimg.com/474x/69/77/b7/6977b70a129ec184527433bbdf9fe457.jpg" />
            </ReactCursorPosition>
            <ReactCursorPosition>
                <NavMenuItem label="Fitness" img="https://i.pinimg.com/564x/35/2e/c9/352ec9dafc8672d9749c42f082fb1b63.jpg" />
            </ReactCursorPosition>
            <ReactCursorPosition>
                <NavMenuItem label="Food" img="https://i.pinimg.com/474x/69/77/b7/6977b70a129ec184527433bbdf9fe457.jpg" />
            </ReactCursorPosition>
            <ReactCursorPosition>
                <NavMenuItem label="Tech" img="https://i.pinimg.com/564x/35/2e/c9/352ec9dafc8672d9749c42f082fb1b63.jpg" />
            </ReactCursorPosition>
            <ReactCursorPosition>
                <NavMenuItem label="Travel" img="https://i.pinimg.com/474x/69/77/b7/6977b70a129ec184527433bbdf9fe457.jpg" />
            </ReactCursorPosition>
          </div>
        </div>
        <div class="rounded-full h-16 w-16 mx-auto flex items-center justify-center border border-gray-300 hover:border-gray-500 cursor-pointer" onClick={onToggleMenu}>
          <img class="p-5" src="https://assets.website-files.com/5e7f419c0c4ef4901af6d061/5e8dbbbe9425d73329e3d163_close-24px.svg" />
        </div>
      </div>
    </div>
  )
}

function NavMenuItem({ label, img, isActive, position }) {
  return (
    <div class="relative flex items-center h-20">
      <div class="px-5 text-2xl">•</div>
      <div class={`${isActive ? 'absolute opacity-100' : 'absolute opacity-0'} w-48 h-48 -z-10 pointer-events-none duration-300`} style={{top: (position.y-125), left: (position.x+50)}}>
        <img src={img} />
      </div>
      <div class="relative cursor-pointer font-serif text-4xl">
        <div>{label}</div>
        <div class={`absolute ${isActive ? 'w-full' : 'w-0' } bg-gray-500 h-0.5 duration-300`}></div>
      </div>
    </div>
  )
}