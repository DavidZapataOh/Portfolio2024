import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-dark text-white font-sans">
      <header className="p-4 px-20 bg-thirty sm:px-2 lg:px-12">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">DavidZO</div>
          <ul className="flex space-x-8 md:space-x-3 underline text-lg">
            <li>
              <a href="#" className='hover:text-primary sm:hidden'>Home</a>
            </li>
            <li>
              <a href="#biography" className='hover:text-primary'>About Me</a>
            </li>
            <li>
              <a href="#work" className='hover:text-primary'>Work</a>
            </li>
            <li>
              <a href="#portfolio" className='hover:text-primary'>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className='hover:text-primary'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-0 bg-dark">{children}</main>
    </div>
  );
};

export default Layout;
