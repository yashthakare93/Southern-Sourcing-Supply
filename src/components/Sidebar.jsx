import React, { useState } from 'react';
import Product from './Product'; // Assuming you have a Product component
import Pagination from './Pagination'; // Assuming you have a Pagination component
import ProductSearch from './ProductSearch';

const categories = [
    { id: "1", name: "Dropshipping", icon: "/assests/dropshipping.png" },
    { id: "2", name: "Logistics", icon: "/assests/Logistics.png" },
    { id: "3", name: "Consulting", icon: "/assests/Consulting.png" },
    { id: "4", name: "Supplier", icon: "/assests/Supplier.avif" },
    { id: "5", name: "Import / Export", icon: "/assests/importexport.avif" },
    { id: "6", name: "Vendor", icon: "/assests/vendor.png" },
    { id: "7", name: "Quality Control", icon: "/assests/qualitycontrol.jpg" },
    { id: "8", name: "Retail & Wholesale", icon: "/assests/retail.png" },
    { id: "9", name: "Inventory Management", icon: "/assests/inventory.png" },
    { id: "10", name: "Product Customization", icon: "/assests/customization.webp" },
    { id: "11", name: "Trade Compliance", icon: "/assests/tradecompliance.png" },
    { id: "12", name: "Market Research", icon: "/assests/market.png" },
];

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false); // State to toggle category visibility

    const toggleCategory = () => {
        setExpanded(!expanded); // Toggle the expanded state
    };

    return (
        <div className="flex ">
            {/* Sidebar */}
            <div className="w-64 p-6 h-fit">

                {/* Category Header (Aligned to Flex Start and Plus/Minus Button at the End) */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl text-black font-semibold pl-4">Categories</span>
                    <button className="text-xl" onClick={toggleCategory}>
                        {expanded ? '-' : '+'} {/* Toggle between plus and minus */}
                    </button>
                </div>

                {/* Conditionally Render Categories */}
                <div className="space-y-4">
                    {/* Show the first 6 categories by default */}
                    {categories.slice(0, expanded ? categories.length : 6).map((category) => (
                        <div key={category.id} className="flex items-center space-x-3 hover:bg-slate-200 p-2 rounded-lg">
                            <img src={category.icon} alt={category.name} className="h-8 w-8 object-cover rounded-full" />
                            <span className="text-black font-medium">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-8">
                <ProductSearch />
                {/* Product Component */}
                <Product />

                {/* Pagination Component */}
                <Pagination />
            </div>
        </div>
    );
};

export default Sidebar;
