import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full">
      {/* Full-width banner */}
      <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-10 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Contact Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
           <h1 className="text-white text-4xl font-bold">যোগাযোগ</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">আমাদের সাথে যোগাযোগ করুন</h2>
        <p className="text-center text-gray-600 mb-12">আপনার মতামত বা প্রশ্ন আমাদের জানান। আমরা আপনার প্রতিক্রিয়ার জন্য অপেক্ষা করছি।</p>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-6">যোগাযোগের তথ্য</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p>বাড়ি ১০, সড়ক ৫, গুলশান ১, ঢাকা-১২১২</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p>+৮৮০ ২ ৯৮৭ ৬৫৪৩</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p>info@digiseva.bd</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-6">একটি বার্তা পাঠান</h3>
            <form className="grid gap-4">
              <input type="text" placeholder="নাম" className="p-3 bg-gray-100 rounded border border-gray-300 w-full" />
              <input type="email" placeholder="ইমেইল" className="p-3 bg-gray-100 rounded border border-gray-300 w-full" />
              <input type="text" placeholder="বিষয়" className="p-3 bg-gray-100 rounded border border-gray-300 w-full" />
              <textarea placeholder="বার্তা" className="p-3 bg-gray-100 rounded border border-gray-300 h-32 w-full"></textarea>
              <button className="bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition">বার্তা পাঠান</button>
            </form>
          </div>

          {/* Map and Socials */}
          <div className="space-y-10">
            <div className="p-6 border rounded-lg h-64 bg-gray-200 flex items-center justify-center">
                [মানচিত্র এখানে]
            </div>
            <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-6">সোশ্যাল মিডিয়া লিঙ্ক</h3>
                <div className="flex gap-4">
                    <a href="#" className="p-3 bg-blue-600 text-white rounded-full"><Facebook /></a>
                    <a href="#" className="p-3 bg-blue-500 text-white rounded-full"><Linkedin /></a>
                    <a href="#" className="p-3 bg-sky-400 text-white rounded-full"><Twitter /></a>
                    <a href="#" className="p-3 bg-red-600 text-white rounded-full"><Youtube /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

