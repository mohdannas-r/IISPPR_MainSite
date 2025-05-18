import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-primary">Green Initiative</div>
                        <ul className="hidden md:flex space-x-8">
                            <li><Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link></li>
                            <li><Link to="/projects" className="font-medium hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link to="/gallery" className="font-medium hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link to="/testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</Link></li>
                            <li><Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                        <button className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Green Initiative</h3>
                            <p className="text-gray-400">Promoting sustainable practices and environmental conservation for a healthier planet.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <p className="text-gray-400">123 Nature Street</p>
                            <p className="text-gray-400">Green City, Earth</p>
                            <p className="text-gray-400">info@greeninitiative.org</p>
                            <p className="text-gray-400">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors">F</a>
                                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors">T</a>
                                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors">I</a>
                                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors">L</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} Green Initiative. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;