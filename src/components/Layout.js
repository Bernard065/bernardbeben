import React from 'react';

const Layout = ({ children, className='' }) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 bg-black px-8 py-10 md:px-12 lg:px-16 xl:px-24 max-w-[1440px] mx-auto`}>
        {children}
    </div>
  );
};

export default Layout;