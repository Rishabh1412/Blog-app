import { assets } from '@/Assests/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          />
          <button className="flex items-center gap-2 font-medium py-1 px-3 bg-white sm:py-3 sm:px-6 border border-black rounded-full shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
          <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
            possimus praesentium pariatur labore atque nemo consequatur quasi,
            earum, fugiat voluptatem, inventore necessitatibus at porro odio
            tempore itaque totam ut.
          </p>
          <div className="">
            <form
              action=""
              className="bg-slate-100 shadow-xl flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto rounded-xl mt-5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-4 outline-none bg-transparent rounded-lg"
              />
              <button className="border-1 border-black py-4 px-4 sm:px-8 active:bg-zinc-900 active:text-white active:rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header