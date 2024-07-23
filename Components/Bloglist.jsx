import { blog_data } from '@/Assests/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const Bloglist = () => {
  const [menu, setmenu] = useState("All")
  return (
    <div>
        <div className='flex justify-center gap-6 my-10 '>
            <button onClick={()=>setmenu('All')} className={menu==="All"?'bg-black py-1 px-4 text-white rounded-sm duration-100':""}>All</button>
            <button onClick={()=>setmenu('Technology')} className={menu==="Technology"?'bg-black py-1 px-4 text-white rounded-sm duration-100':""}>Technology</button>
            <button onClick={()=>setmenu('Startup')} className={menu==="Startup"?'bg-black py-1 px-4 text-white rounded-sm duration-100':""}>Startup</button>
            <button onClick={()=>setmenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black py-1 px-4 text-white rounded-sm duration-100':""}>Lifestyle</button>

        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item.id} title={item.title} image={item.image} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default Bloglist