import React, { ReactNode, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import useDisableScroll from 'src/hooks/useDisableScroll';

interface DrawerBottomProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
  title: string;
}

const DrawerBottom: React.FC<DrawerBottomProps> = ({ isOpen, toggleDrawer, children, title }) => {
  useDisableScroll(isOpen);

  return (
    <div
      className={`h-full fixed bottom-0 left-0 right-0 z-20 w-full bg-main transition-all duration-500 ease-in-out transform ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-labelledby='drawer-bottom-label'
    >
      <div className='w-full h-14 px-4 flex items-center justify-between border-b border-gray-300'>
        <h5 id='drawer-bottom-label' className='text-base font-semibold text-primary'>
          {title}
        </h5>
        <div
          onClick={toggleDrawer}
          className='text-gray-400 text-sm w-8 h-8 inline-flex items-center justify-center cursor-pointer'
        >
          <IoCloseSharp size={30} />
          <span className='sr-only'>Close menu</span>
        </div>
      </div>

      {/* Content section */}
      <div className='flex-1 overflow-y-auto p-4' style={{ maxHeight: 'calc(100dvh - 56px)' }}>
        {children}
      </div>
    </div>
  );
};

export default DrawerBottom;
