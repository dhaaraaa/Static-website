import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-24 text-white py-8 ">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="mt-4 text-sm">
              We are a leading company providing the best services for our customers. Our goal is to ensure customer satisfaction with high-quality products and services.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Phone: +1 234 567 890</li>
              <li>Email: contact@yourcompany.com</li>
              <li>Address: 123 Business Ave, City, Country</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              />
              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="#" className="text-white hover:text-blue-700">
            <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
          </a>
          <a href="#" className="text-white hover:text-pink-500">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
        </div>

        {/* Bottom Section: Links and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white hover:text-gray-400 text-sm mx-2">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400 text-sm mx-2">Terms of Service</a>
            <a href="#" className="text-white hover:text-gray-400 text-sm mx-2">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
