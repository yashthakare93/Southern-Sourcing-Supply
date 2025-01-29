// Product.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BusinessList = ({ businessList, title }) => {
  return (
    <div >
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
    id: '1',
    name: 'Strategic Sourcing Solutions',
    about:
      'We offer customized sourcing strategies to help your business find reliable suppliers and optimize your procurement process. With access to over 2000 supplier contacts, we ensure the best sourcing solutions for your needs.',
    category: { name: 'Sourcing' },
    contactPerson: 'John Smith',
    email: 'john.smith@sss.com',
    images: [
      { url: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/266065982/original/ebb1d14aa57d2c64c7ac6b25311778f97f7384f2/be-your-product-sourcing-assistant-in-china.jpg' },
    ],
  },
  {
    id: '2',
    name: 'Supply Chain Consulting',
    about:
      'Our experts provide guidance to streamline your supply chain operations, improve efficiency, and reduce costs. From strategic planning to execution, we support your business at every step.',
    category: { name: 'Consulting' },
    contactPerson: 'Jane Doe',
    email: 'jane.doe@sss.com',
    images: [
      { url: 'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/14003540/The-role-of-AI-in-logistics-and-supply-chain-banner.png' },
    ],
  },
  {
    id: '3',
    name: 'Export/Import Management',
    about:
      'With over 30 years of experience in export and import, we help businesses navigate the complexities of international trade. Our team ensures compliance, cost savings, and efficient logistics.',
    category: { name: 'Trade Management' },
    contactPerson: 'Michael Clark',
    email: 'michael.clark@sss.com',
    images: [
      { url: 'https://www.thethrive.in/wp-content/uploads/2022/10/Import-Export-Consultancy-Services-1.jpg' },
    ],
  },
  {
    id: '4',
    name: 'Supplier Relationship Management',
    about:
      'We help businesses build and maintain strong relationships with suppliers to ensure reliable deliveries and mutual growth. Our team fosters collaboration and long-term partnerships with your supply base.',
    category: { name: 'Supplier Management' },
    contactPerson: 'Sarah Lee',
    email: 'sarah.lee@sss.com',
    images: [
      { url: 'https://www.sourcedogg.com/wp-content/uploads/2022/02/How-To-Improve-Supplier-Relationship-Management.jpg' },
    ],
  },
  {
    id: '5',
    name: 'Logistics and Transportation Solutions',
    about:
      'Our logistics services ensure that your goods are transported efficiently and cost-effectively. We manage transportation, warehousing, and distribution to meet your business needs.',
    category: { name: 'Logistics' },
    contactPerson: 'James Brown',
    email: 'james.brown@sss.com',
    images: [
      { url: 'https://ff7c0f399f513d62741b-16da2fe3266157a7ec189b9c7ac6e87c.ssl.cf1.rackcdn.com/149631539232470275467l.jpeg' },
    ],
  },
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

export default function Product() {
  return (
    <div className="container mx-auto py-4 px-8">
      <BusinessList businessList={businessLists} title="Our Products" />
    </div>
  );
}
