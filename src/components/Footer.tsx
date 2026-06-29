export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Logo</h2>
          <p className="text-gray-400">সম্পাদক ও প্রকাশক: ...</p>
          <p className="text-gray-400">উপদেষ্টা: ...</p>
          <p className="text-gray-400 mt-2">মেইল: ...</p>
          <p className="text-gray-400">ফোন: ...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy And Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Connect With Us</h3>
          {/* Placeholder for social widgets */}
          <div className="h-32 bg-gray-800 rounded flex items-center justify-center text-gray-500">Facebook/YouTube Widgets</div>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-12 pt-6 border-t border-gray-800">
        &copy; Copyright 2026 | All Right Reserved
      </div>
    </footer>
  );
}
