import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white skew-y-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center -skew-y-2">
        <img src="https://res.cloudinary.com/dlklqihg6/image/upload/v1760308052/kkchmpjdp9izcjfvvo4k.jpg" alt="Mohammad Esa Ali" className="h-[500px] w-full object-cover rounded-sm shadow-2xl" />
        <div>
          <h2 className="text-4xl font-bold mb-8 text-gray-950 tracking-tight">About Me</h2>
          <h3 className="text-2xl mb-6 text-gray-700 font-medium">Hello, I am Mohammad Esa Ali</h3>
          <p className="text-lg text-gray-600 leading-relaxed">A passionate and creative tech enthusiast. I specialize in Software Development, Web Solutions, and Creative Design. My goal is to help businesses grow by building smart, future-ready, and user-friendly digital solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
