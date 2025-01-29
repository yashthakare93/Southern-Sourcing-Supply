import { ShoppingBag, Menu, UserCog, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userName = "Yash";

    return (
        <div>
           <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <div className="flex h-16 items-center justify-between px-4 md:px-6">
                    {/* Logo */}
                    <Link to="/shop/home" className="flex items-center gap-2">
                        <img
                            src="/assests/logo.jpg"
                            alt="Logo"
                            className="h-12 w-12"  // Set a fixed height and width
                        />
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <button className="lg:hidden" aria-label="Toggle Menu">
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden lg:flex items-center gap-6 mx-auto">
                        {/* Links */}
                        <Link
                            to="/shop/home"
                            className="text-sm font-medium transform transition-transform duration-300 hover:scale-110"
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop/products"
                            className="text-sm font-medium transform transition-transform duration-300 hover:scale-110"
                        >
                            Products
                        </Link>
                        <Link
                            to="/shop/about"
                            className="text-sm font-medium transform transition-transform duration-300 hover:scale-110"
                        >
                            About
                        </Link>
                        <Link
                            to="/shop/contact"
                            className="text-sm font-medium transform transition-transform duration-300 hover:scale-110"
                        >
                            Contact
                        </Link>
                    </nav>


                    {/* Cart and Login/Signup (Aligned to the right) */}
                    <div className="flex items-center gap-6">
                        {/* Cart */}
                        <button
                            className="relative text-sm font-medium flex items-center"
                            aria-label="Cart"
                        >
                            <ShoppingBag className="w-6 h-6" />
                        </button>

                        {/* Conditional Rendering for Profile/Login/Signup */}
                        {isLoggedIn ? (
                            // Show profile dropdown if logged in
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-2 text-sm font-medium"
                                    aria-label="Profile"
                                >
                                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                                        {userName[0].toUpperCase()}
                                    </div>
                                </button>
                                {/* Dropdown Menu */}
                                <div className="absolute hidden group-hover:block top-12 right-0 bg-white shadow-lg border rounded-md w-40">
                                    <Link
                                        to="/shop/account"
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                    >
                                        <UserCog className="w-4 h-4 mr-2" />
                                        Account
                                    </Link>
                                    <button
                                        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                                        onClick={() => setIsLoggedIn(false)} // Logout functionality
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Show login/signup options if not logged in
                            <div className="flex items-center gap-4">
                                <Link to="/shop/login" className="text-sm font-medium">
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Navbar;
