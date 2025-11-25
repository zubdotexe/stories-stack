import React from 'react'

export default function QuoteOfTheDay() {
  return (
    <div className='mt-10 bg-base-200'>
        <div className='max-w-7xl mx-auto p-2 py-7'>
            <h1 className='font-bold text-3xl mb-5'>Quote of The Day</h1>
            <div className='rounded-md bg-secondary p-7 w-3/5 mx-auto text-center shadow-sm'>
                <p className='text-3xl text-base-100 font-semibold'>
                    "A reader lives a thousand lives before he dies."
                </p>
                <p className='mt-3 text-right font-semibold'>- George R. R. Martin</p>
            </div>
        </div>
    </div>
  )
}
