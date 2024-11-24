import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "DeepakYadav",
    age: 22
  }

  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-orange-500 text-black p-10 rounded-xl mb-12'>Tailwind test</h1>

      <Card />
      <Card username="Hello my name is Deepak Yadav, happy to lern . " ButtonText="click here"/>
      <Card username="Learning React With Hitsh Sir" ButtonText="visit here"/>
      {/* <Card Channel="ChaiAurCode" myArr={newArr} someObj={myObj}/> */}
    

{/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VGUDSqXYODanfHHwc4rY4Z7vQHpC7tslxA&s" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  )
}

export default App
