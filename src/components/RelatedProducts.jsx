// Product.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BusinessList = ({ businessList, title }) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {businessList.length > 0
          ? businessList.map((business) => (
              <Link
                to={`/details/${business.id}`} // Linking to the product details page
                key={business.id}
                className="shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out"
              >
                <img
                  src={business?.images[0].url}
                  alt={business.name}
                  className="h-[150px] md:h-[200px] object-cover rounded-lg w-full"
                />
                <div className="flex flex-col items-baseline p-3 gap-1">
                  <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
                    {business.category.name}
                  </h2>
                  <h2 className="font-bold text-lg">{business.name}</h2>
                  <h2 className="text-primary">{business.contactPerson}</h2>
                  <h2 className="text-gray-500 text-sm">{business.address}</h2>
                  <button className="rounded-lg mt-3 bg-teal-600 text-white px-2 py-1 text-sm">
                    Explore Now
                  </button>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};
const businessLists = [
 
  {
    id: '6',
    name: 'Inventory Management Services',
    about:
      'We provide inventory management solutions to optimize stock levels, reduce costs, and improve overall efficiency in your supply chain.',
    category: { name: 'Inventory' },
    contactPerson: 'Emily Davis',
    email: 'emily.davis@sss.com',
    images: [
      { url: 'https://www.servicepower.com/hubfs/Inventory%20Management.jpg' },
    ],
  },
  {
    id: '7',
    name: 'Risk Management and Compliance',
    about:
      'Our risk management services help your business mitigate potential supply chain disruptions while ensuring compliance with global trade regulations.',
    category: { name: 'Risk Management' },
    contactPerson: 'Robert Johnson',
    email: 'robert.johnson@sss.com',
    images: [
      { url: 'https://calendar.boussiasevents.gr/wp-content/uploads/2022/08/840x560-17.jpg' },
    ],
  },
  {
    id: '8',
    name: 'Custom Packaging and Labeling',
    about:
      'We offer tailored packaging and labeling solutions to meet your product and branding needs, ensuring secure and attractive presentations.',
    category: { name: 'Packaging' },
    contactPerson: 'Olivia Martinez',
    email: 'olivia.martinez@sss.com',
    images: [
      { url: 'https://i.pinimg.com/736x/1f/bd/86/1fbd86732edccb8592e6046d1da1a4c2.jpg' },
    ],
  },
  // More business objects here...
];

export default function RelatedProduct() {
  return (
    <div className="container mx-auto p-10">
      <BusinessList businessList={businessLists} title="Related Products" />
    </div>
  );
}
