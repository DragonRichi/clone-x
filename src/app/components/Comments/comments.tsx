import React from 'react'
import { Post } from '../post/post'
import Image from '../Image/Image'

function Comments() {
    return (
        <div className=''>
            <form className="flex items-center justify-between gap-4 p-4 ">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image path='general/avatar.png' alt='RichiDev' w={100} h={100} tr={true} />
                </div>
                <input type="text" className='bg-transparent outline-none p-2 text-xl flex-1' placeholder='Post your reply'/>
                <button className='py-2 px-4 font-bold bg-white text-black rounded-full'>Reply</button>
            </form>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Comments