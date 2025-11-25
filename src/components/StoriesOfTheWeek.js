import React from 'react'

export default function StoriesOfTheWeek() {
  return (
    <div className='my-10'>
        <div className='max-w-7xl mx-auto p-2'>
            <h1 className='font-bold text-3xl mb-5'>Stories of The Week</h1>

            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex-1 bg-base-200 rounded-md p-5'>
                    <h1 className='font-bold text-4xl'>The Whispering Clock</h1>
                    <p className='mt-3 font-semibold'>Published by</p>
                    <p className='text-2xl font-bold'>Lena Howthorne</p>
                </div>
                <div className='flex-1 bg-base-200 rounded-md p-5'>
                    <h1 className='font-bold text-4xl'>Echoes of the Forgotten Realm</h1>
                    <p className='mt-3 font-semibold'>Published by</p>
                    <p className='text-2xl font-bold'>Maxwell Quinn</p>
                </div>
            </div>
        </div>
    </div>
  )
}
