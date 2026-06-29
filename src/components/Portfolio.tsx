import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-white skew-y-2">
      <div className="-skew-y-2">
        <h2 className="text-3xl font-bold mb-10 text-center">সাফল্যের গল্প</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-full max-w-64 h-40 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
