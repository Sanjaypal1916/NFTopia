import React from 'react';
import "../App.css";

const Nav = () => {








  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white nav`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Website</h1>
        <ul className="flex space-x-20 text-2xl font-thin mx-12">
          <li>
            <a href="/login" className="hover:text-gray-300">Decentralized</a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">Secure</a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">Blockchain</a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">Games</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Nav
