import React from 'react'

function Card({username,ButtonText="view profile"}) {
    // console.log("props:",props);
    // console.log(props.username);
    console.log(username);
    
    
  return (
     <div>
       <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
         <div class="flex flex-col justify-between p-4 leading-normal">
             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
             <button className='bg-green-500 text-black' > {ButtonText /*|| "view profile"*/}</button>
         </div>
       </a>
      </div>
  )
}

export default Card

