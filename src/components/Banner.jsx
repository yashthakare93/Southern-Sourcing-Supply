import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function Banner() {
    // Array of banner images
    const bannerImages = [
        '/assests/main-banner1.jpg',
        '/assests/main-banner2.png',
        '/assests/main-banner3.jpg',
    ];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger the transition after the component mounts
        const timer = setTimeout(() => setLoaded(true), 300);
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);


    // State to track the current active image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext(); // Automatically move to the next image
        }, 5000); // Change every 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    // Function to go to the previous image
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next image
    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative">
            {/* Background Image with overlay */}
            <div
                className="absolute inset-0 bg-black opacity-80" // Dark overlay
                style={{
                    backgroundImage: `url(${bannerImages[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Banner content */}
            <div className="relative flex items-center gap-3 flex-col justify-center pt-14 pb-7 min-h-[500px]">
                {/* Company Name and Tagline */}
                <h2 className="font-bold text-[52px] text-center text-white mb-2" style={{ fontFamily: 'cursive' }}>
                    Southern Sourcing Supply
                </h2>
                <h3 className={`text-xl text-white font-semibold mb-6 ${loaded ? 'opacity-100 translate-y-0 transition-opacity transition-transform duration-1000 ease-in-out' : 'opacity-0 translate-y-10'}`}>
                    Veteran-owned with 30+ years in export/import. Providing strategic sourcing solutions through a network of 2000+ suppliers.
                </h3>
                <p className={`text-lg text-white font-semibold mb-8 ${loaded ? 'opacity-100 translate-y-0 transition-opacity transition-transform duration-1000 ease-in-out' : 'opacity-0 translate-y-10'}`}>
                    Discover and Purchase Top-Rated Services Conveniently Online. We look forward to working with you in the future.
                </p>

                {/* Search Section */}
                <div className="mt-4 flex gap-4 items-center">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search Location, Service, Product, or Keyword..."
                        className="rounded-full md:w-[450px] p-4 text-black placeholder:text-gray-500 border-2 border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />

                    {/* Button */}
                    <button className="rounded-full h-[46px] bg-teal-600 text-white flex items-center px-6 hover:bg-teal-700 transition-all duration-300">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                    </button>
                </div>

                {/* Arrows */}
                <div className="absolute top-1/2 left-4 right-4 flex justify-between">
                    <button
                        onClick={goToPrevious}
                        className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-all duration-300"
                    >
                        &#10094; {/* Left Arrow */}
                    </button>
                    <button
                        onClick={goToNext}
                        className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-all duration-300"
                    >
                        &#10095; {/* Right Arrow */}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
