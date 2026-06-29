import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative text-white min-h-[80vh] px-6 flex flex-col items-center justify-center md:justify-between bg-cover bg-center bg-[url('https://res.cloudinary.com/djginu4oz/image/upload/v1782703666/keith-misner-h0Vxgz5tyXA-unsplash_wcc9vj.jpg')]">
      <div className="absolute inset-0 bg-gray-950/70"></div>
      
      {/* Ticker */}
      <div className="relative z-10 w-full overflow-hidden mb-10 py-4 bg-white/10 backdrop-blur-md border-y border-white/20">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap text-lg font-medium tracking-wide"
        >
          স্বাগতম! • অনুপ্রাণিত হোন • অসাধারণ বক্তা • নতুন ইভেন্ট আসছে • যোগাযোগ করুন • ডিজিটাল সলিউশন • ক্যারিয়ার গাইডেন্স • মোটিভেশনাল স্পিচ
        </motion.div>
      </div>

      <div className="relative z-10 max-w-2xl text-center md:text-left flex-grow flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">স্বাগতম! আমি মো: এসা আলী।</h1>
        <h2 className="text-3xl md:text-5xl text-gray-300 mb-8 font-medium">প্রতিশ্রুতিশীল বক্তা ও চিন্তাবিদ</h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">ইসলামি মূল্যবোধ এবং আধুনিক চিন্তাধারার সমন্বয়ে জনসচেতনতা বৃদ্ধিতে কাজ করে যাচ্ছি। প্রতিটি বক্তব্য এক একটি অভিজ্ঞতা।</p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-white text-gray-950 px-8 py-3 rounded-sm font-semibold text-lg hover:bg-gray-200 transition">বুক করুন এখন</button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-sm font-semibold text-lg hover:bg-white/10 transition">বিস্তারিত জানুন</button>
        </div>
      </div>
      <div className="hidden md:block relative z-10 w-1/3 h-[400px] bg-gray-700/30 rounded-sm border border-white/20 backdrop-blur-sm mt-10"></div>
    </section>
  );
};

export default Hero;
