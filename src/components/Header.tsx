import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: 'হোম', path: '/' },
    { label: 'ভিডিও', path: '/video' },
    { label: 'কিতাব', path: '/kitab' },
    { label: 'ইসলাম', path: '/islam' },
    { label: 'আমল সমুহ', path: '/amol' },
    { label: 'সিরাত', path: '/sirat' },
    { label: 'ব্লগ', path: '/blog' },
    { label: 'Live', path: '/live' },
    { label: 'প্রশ্ন/উত্তর', path: '/qa' },
    { label: 'যোগাযোগ', path: '/contact' },
  ];

  const dateStr = "সোমবার, ১৫ই আষাঢ়, ১৪৩৩ বঙ্গাব্দ, ১৪ই মহর্রম, ১৪৪৮ হিজরি";

  return (
    <header className="bg-white shadow-sm relative">
      <div className="bg-gray-100 py-1 px-6 text-xs text-gray-600 text-center">
        {dateStr}
      </div>
      <div className="py-2 px-6 border-b flex justify-between items-center">
        <div className="flex gap-4">
          {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 bg-gray-200 rounded-full"></div>)}
        </div>
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <input type="text" placeholder="Search..." className="p-1 px-2 text-sm w-48" />
          <button className="p-1 bg-gray-100"><Search size={16} /></button>
        </div>
      </div>
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="font-extrabold text-2xl tracking-tighter text-gray-950">
          ESA <span className="text-gray-500">ALI</span>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 gap-1 md:gap-1 text-gray-700 shadow-md md:shadow-none z-20 items-center`}>
          {menuItems.map(item => (
            <Link key={item.path} to={item.path} className="text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all w-full md:w-auto text-center" onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
