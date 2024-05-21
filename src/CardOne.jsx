import React from 'react'
import coverOne from '../src/assets/cover_issue_7.png'

const CardOne = () => {
  return (
    <div className='w-full border border-black h-full'>
       <div className='w-[28%] mx-auto mt-2'>
                <img src={coverOne} />
       </div>
    </div>
  )
}

export default CardOne
