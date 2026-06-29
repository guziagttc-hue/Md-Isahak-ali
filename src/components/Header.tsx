import React, { useState } from 'react';
import { Menu, X, Search, Youtube, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{label: string, path: string}[]>([]);
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

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = menuItems.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
      setSearchTerm('');
    } else {
      setSearchResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const dateStr = "সোমবার, ১৫ই আষাঢ়, ১৪৩৩ বঙ্গাব্দ, ১৪ই মহর্রম, ১৪৪৮ হিজরি";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-50 py-1.5 px-6 text-xs text-gray-500 text-center font-medium">
        {dateStr}
      </div>
      <div className="py-3 px-6 border-b border-gray-100 flex justify-between items-center bg-white">
        <div className="flex gap-3">
          <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition shadow-sm border border-gray-100"><Youtube size={19} className="text-red-600" /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition shadow-sm border border-gray-100"><Facebook size={19} className="text-blue-600" /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition shadow-sm border border-gray-100"><MessageCircle size={19} className="text-green-600" /></a>
        </div>
        <div className="flex flex-col items-end relative">
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden shadow-inner bg-gray-50">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-1.5 px-4 text-sm w-48 bg-transparent focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="p-1.5 px-3 bg-gray-200 hover:bg-gray-300 transition text-gray-600"
            >
              <Search size={16} />
            </button>
          </div>
          {searchResults.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-48 mt-2 p-1 absolute top-full right-0 z-50">
              {searchResults.map(item => (
                <Link key={item.path} to={item.path} className="block p-2 text-sm hover:bg-gray-100 rounded" onClick={() => setSearchResults([])}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="py-4 px-6 flex justify-between items-center bg-white relative">
        <div className="font-extrabold text-3xl tracking-tighter text-gray-950">
          ESA <span className="text-blue-600">ALI</span>
        </div>
        <button className="md:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 gap-1 md:gap-0.5 text-gray-700 shadow-lg md:shadow-none z-20 items-center`}>
          {menuItems.map(item => (
            <Link key={item.path} to={item.path} className="text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-full transition-all w-full md:w-auto text-center" onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
