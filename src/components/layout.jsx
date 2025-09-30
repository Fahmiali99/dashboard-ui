import React, { useEffect, useState } from 'react';
import Navigation from './navigation';
import Sidebar from './sidebar';

function Layout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className='w-full flex justify-center items-start bg-[#DBE8F4]'>
      <div className='w-full h-full'>
        <div className='hidden md:block fixed !left-3 lg:!left-16 xl:!left-21 top-1/2 -translate-y-1/2 z-10'>
          <div className='w-14 !bg-[#1768B3] rounded-full flex items-center justify-center shadow-lg'>
            <Sidebar />
          </div>
        </div>

        <div className={`block md:hidden fixed top-0 w-full z-20 !px-4 pt-4 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="bg-white rounded-2xl shadow-[4px_4px_12px_0_rgba(81,114,144,0.15),2px_2px_3px_0_rgba(103,124,143,0.1)] p-4 pb-4"> 
            <Navigation />
          </div>
        </div>

        <div className='w-full h-full !p-4 md:!p-10 lg:!p-24 xl:!p-28 pt-[120px] md:pt-10 lg:pt-24'>
          <div className="w-full h-full bg-white rounded-2xl shadow-[8px_8px_30px_0_rgba(81,114,144,0.2),4px_4px_4px_0_rgba(103,124,143,0.15)] p-4 md:!p-10 lg:!p-16 xl:!p-20 overflow-y-auto scrollbar-hide">
            <div className='hidden md:block'>
              <Navigation />
            </div>
            <main className='mt-10 sm:mt-6'>
              {children}
            </main>
          </div>
        </div>

        <div className={`fixed bottom-0 left-0 right-0 block md:hidden !px-4 md:!px-10 lg:!px-32 !pb-6 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-full' : 'translate-y-0'}`}>
          <div className='bg-[#1768B3] rounded-full'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
