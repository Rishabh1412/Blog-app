import { assets } from '@/Assests/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title,description,category,image,id}) => {
  return (
    <>
      <div className="max-w-[330px] sm:max-w-[300px] bg-white border-black shadow-xl rounded-xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] duration-150">
        <Link href={`/blogs/${id}`}>
          <Image
            
            src={image}
            alt=""
            width={400}
            height={400}
            className="border-b border-black rounded-xl"
          />
        </Link>
        <p className="ml-5 mt-5 px-3 py-1 inline-block bg-black rounded-2xl  text-white text-sm">
          {category}
        </p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {description}
          </p>
          <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center bg-zinc-300/50 px-3 rounded-lg">
            Read More &nbsp;{" "}
            <Image src={assets.arrow} className="m-2" alt="" width={12} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogItem