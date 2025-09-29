import React from 'react'
import Navigation from './navigation'
import Sidebar from './sidebar'

function Layout({ children }) {
  return (
    <div className='w-full h-screen flex justify-center items-start bg-g[#DBE8F4]'>
      <div className='w-full h-full'>
        <div className='hidden md:block fixed !left-3 lg:!left-24 top-1/2 -translate-y-1/2 z-10'>
          <div className='w-14 !bg-[#1768B3] rounded-full flex items-center justify-center shadow-lg'>
            <Sidebar />
          </div>
        </div>

        <div className=' w-full h-full !p-4 md:!p-10 lg:!p-32'>
          <div className='w-full h-full bg-white rounded-2xl shadow-[8px_8px_30px_0_rgba(81,114,144,0.2),4px_4px_4px_0_rgba(103,124,143,0.15)] p-6 md:p-10 lg:p-20'>
            <Navigation />
            <main className='mt-6'>
              {children}
            </main>
          </div>

        </div>

        <div className='w-full block md:hidden !px-4 md:!px-10 lg:!px-32 !pb-6'>
          <div className=' bg-[#1768B3] rounded-full z-10'><Sidebar /></div>
        </div>
       </div>
    </div>
  )
}

export default Layout