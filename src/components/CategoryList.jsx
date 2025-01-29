import { Link } from 'react-router-dom';

function CategoryList() {
  const categories = [
    { id: "1", name: "Dropshipping", icon: "/assests/dropshipping.png" },
    { id: "2", name: "Logistics", icon: "/assests/Logistics.png" },
    { id: "3", name: "Consulting", icon: "/assests/Consulting.png" },
    { id: "4", name: "Supplier", icon: "/assests/Supplier.avif" },
    { id: "5", name: "Import / Export", icon: "/assests/importexport.avif" },
    { id: "6", name: "Vendor", icon: "/assests/vendor.png" },
    { id: "7", name: "Quality Control", icon: "/assests/qualitycontrol.jpg" },
    { id: "8", name: "Retail & Wholesale", icon: "/assests/retail.png" },
    { id: "9", name: "Inventory Management ", icon: "/assests/inventory.png" },
    { id: "10", name: "Product Customization", icon: "/assests/customization.webp" },
    { id: "11", name: "Trade Compliance", icon: "/assests/tradecompliance.png" },
    { id: "12", name: "Market Research", icon: "/assests/market.png" },
  ];

  return (
    <div className="mx-4 md:mx-22 lg:mx-52 flex flex-col gap-4 pt-4">
      {categories.length > 0 ? (
        <>
          {/* First Row */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category) => (
              <Link
                to={`/search/${category.name}`}
                key={category.id}
                className="flex flex-col items-center justify-between p-4 cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
                  <img src={category.icon} alt={category.name} className="w-full h-full rounded-full object-contain" />
                </div>
                <div className="min-h-[3rem] flex items-center">
                  <h2 className="text-black text-lg font-semibold text-center">{category.name}</h2>
                </div>
              </Link>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(6, 12).map((category) => (
              <Link
                to={`/search/${category.name}`}
                key={category.id}
                className="flex flex-col items-center justify-between p-4 cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
                  <img src={category.icon} alt={category.name} className="w-full h-full rounded-full object-contain" />
                </div>
                <div className="min-h-[3rem] flex items-center">
                  <h2 className="text-black text-lg font-semibold text-center">{category.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"></div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
