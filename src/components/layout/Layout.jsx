import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') {
            return true;
        }
        return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-3 sm:py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-xl sm:text-2xl font-bold text-primary">IISPPR</Link>
                        
                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex space-x-6 lg:space-x-8">
                            <li><Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Home</Link></li>
                            <li><Link to="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>About</Link></li>
                            <li><Link to="/projects" className={`font-medium transition-colors ${isActive('/projects') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Projects</Link></li>
                            <li><Link to="/gallery" className={`font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Gallery</Link></li>
                            <li><Link to="/testimonials" className={`font-medium transition-colors ${isActive('/testimonials') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Testimonials</Link></li>
                            <li><Link to="/contact" className={`font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Contact</Link></li>
                        </ul>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden focus:outline-none text-primary"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 bg-white border-t mt-3">
                            <ul className="flex flex-col space-y-3 px-4">
                                <li><Link to="/" className={`block font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Home</Link></li>
                                <li><Link to="/about" className={`block font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>About</Link></li>
                                <li><Link to="/projects" className={`block font-medium transition-colors ${isActive('/projects') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Projects</Link></li>
                                <li><Link to="/gallery" className={`block font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Gallery</Link></li>
                                <li><Link to="/testimonials" className={`block font-medium transition-colors ${isActive('/testimonials') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Testimonials</Link></li>
                                <li><Link to="/contact" className={`block font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`} onClick={toggleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
            
            <main className="flex-grow">
                <Outlet />
            </main>
            
            <footer className="bg-primary text-white pt-8 pb-4">
                <div className="container mx-auto px-6">
                    {/* Top Divider */}
                    <div className="border-t border-primary-light mb-8"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
                        {/* Brand & Mission */}
                        <div className="flex-1 mb-8 md:mb-0">
                            <h3 className="text-2xl font-extrabold mb-2 tracking-wide">IISPPR</h3>
                            <p className="text-gray-200 text-base leading-relaxed max-w-xs">
                                Promoting sustainable practices and environmental conservation for a healthier planet.
                            </p>
                        </div>
                        {/* Quick Links */}
                        <div className="flex-1 mb-8 md:mb-0">
                            <h4 className="font-semibold mb-2 text-lg text-accent">Quick Links</h4>
                            <ul className="text-gray-100 text-base space-y-1">
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        {/* Address */}
                        <div className="flex-1">
                            <h4 className="font-semibold mb-2 text-lg text-accent">Address</h4>
                            <address className="not-italic text-gray-200 text-base leading-relaxed whitespace-pre-line">
                                Office No. 30 Nihad Plaza, Opposite Zakir Hussain School, Civil lines, Near AMU, Aligarh 202001
                            </address>
                        </div>
                    </div>
                    {/* Bottom Divider */}
                    <div className="border-t border-primary-light mt-8 mb-4"></div>
                    <div className="text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} IISPPR. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;