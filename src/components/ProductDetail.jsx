import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, DollarSign, Phone, Gift } from "lucide-react";

const ProductDetail = () => {
  const businessLists = [
    {
      id: 1,
      name: 'Strategic Sourcing Solutions',
      about:
        'Strategic Sourcing Solutions provides customized sourcing strategies to help businesses find reliable suppliers and optimize procurement processes. With access to over 2000 suppliers, we offer cost-effective solutions tailored to meet your needs. Our team ensures quality, reliability, and efficiency at every step, from supplier identification to contract negotiation. We work closely with your team to deliver sourcing strategies that align with your business goals, ultimately improving supply chain performance and reducing costs.',
      category: { name: 'Sourcing' },
      contactPerson: 'John Smith',
      email: 'john.smith@sss.com',
      images: [
        { url: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/266065982/original/ebb1d14aa57d2c64c7ac6b25311778f97f7384f2/be-your-product-sourcing-assistant-in-china.jpg' },
      ],
    }
    ,
    {
      id: 2,
      name: 'Supply Chain Consulting',
      about:
        'Our Supply Chain Consulting services provide strategic guidance to help businesses streamline their operations, enhance efficiency, and reduce costs. Our team of experts works closely with you to identify inefficiencies, optimize workflows, and improve overall supply chain performance. From strategic planning and risk management to execution and continuous improvement, we support your business at every step. With a focus on leveraging the latest technologies, including AI and automation, we ensure your supply chain is agile, resilient, and cost-effective. Our tailored solutions empower your business to navigate challenges, adapt to market changes, and sustain long-term growth.',
      category: { name: 'Consulting' },
      contactPerson: 'Jane Doe',
      email: 'jane.doe@sss.com',
      images: [
        { url: 'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/14003540/The-role-of-AI-in-logistics-and-supply-chain-banner.png' },
      ],
    }
    ,
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
  const { id } = useParams(); // Get the product id from URL
  const product = businessLists.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto p-10">
        <p className="text-red-500">Product not found. Please check the URL or go back to the services list.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10">
      <Link to="/shop/home" className="text-blue-500 hover:underline mb-4 block">Back to Services</Link>
      <div className="flex gap-10">
        <img src={product.images[0]?.url} alt={product.name} className="w-1/2 rounded-lg" />
        <div className="flex flex-col w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <h2 className="text-lg text-gray-500 mt-2">{product.category.name}</h2>
          
          <div className="mt-6">
            <p className="font-semibold">Contact Person: {product.contactPerson}</p>
            <p className="text-sm text-gray-600">Email: {product.email}</p>
          </div>
          {/* Add to Cart Button */}
          <div className="mt-8 flex gap-x-3">

            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <div className='flex gap-x-2'>  <ShoppingBag />

                Add to Cart</div>
            </button>
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <div className='flex gap-x-2'>  <Gift />

                Buy Now</div>
            </button>
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <div className='flex gap-x-2'> <Phone />
                Contact Vendor</div>
            </button>
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <div className='flex gap-x-2'> <DollarSign />

                Get Estimate</div>
            </button>

          </div>
          <h3 className='pt-4 font-semibold '>Description</h3>
          <p className="mt-4 text-justify">{product.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;