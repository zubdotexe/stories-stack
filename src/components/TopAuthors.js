import React from 'react'

export default function TopAuthors() {
  return (
    <div className='mt-10'>
      <div className='max-w-7xl mx-auto p-2'>
        <h1 className='font-bold text-3xl mb-5'>Top Authors</h1>

        <div className='flex flex-col md:flex-row gap-5 justify-evenly'>
          <div className='flex-1 rounded-md p-7 bg-base-200 flex flex-col items-center'>
            <div className='rounded-full w-15 h-15 overflow-hidden'>
              <img className='w-full h-full box-border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa1%2F1c%2Fb5%2Fa11cb521eb3d0951fc49163f861dac09.jpg&f=1&nofb=1&ipt=640e3c70c36622d1ac55f6e80971d51603768a6d17c333fcd4fa33b87dda5416' alt='' />
            </div>
            <h2 className='font-bold text-2xl'>John Ken</h2>
            <p className="font-semibold">Hit Stories</p>
            <p className='font-semibold text-2xl'>#25</p>
          </div>

          <div className='flex-1 rounded-md p-7 bg-base-200 flex flex-col items-center'>
            <div className='rounded-full w-15 h-15 overflow-hidden'>
              <img className='w-full h-full box-border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheroshotphotography.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fmale-linkedin-corporate-headshot-on-white-square-1024x1024.jpg&f=1&nofb=1&ipt=91a70f9bcb23400ce59dd9b3a362434383fbaa4ae69b2a49d42fc91ab488ff7f' alt='' />
            </div>
            <h2 className='font-bold text-2xl'>Ethan Blackwood</h2>
            <p className="font-semibold">Hit Stories</p>
            <p className='font-semibold text-2xl'>#14</p>
          </div>

          <div className='flex-1 rounded-md p-7 bg-base-200 flex flex-col items-center'>
            <div className='rounded-full w-15 h-15 overflow-hidden'>
              <img className='w-full h-full box-border' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhotpot.ai%2Fimages%2Fsite%2Ftestimonials%2Fsocial%2Flinkedin_ankit%2520rijal%2Fgallery1.jpg&f=1&nofb=1&ipt=87b00f8751665b970863b6f46b171bc2b78b4f8343b092954363177936a7603c' alt='' />
            </div>
            <h2 className='font-bold text-2xl'>Leo Cross</h2>
            <p className="font-semibold">Hit Stories</p>
            <p className='font-semibold text-2xl'>#9</p>
          </div>
        </div>
      </div>
    </div>
  )
}
