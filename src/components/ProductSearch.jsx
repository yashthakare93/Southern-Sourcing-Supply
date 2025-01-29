import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductSearch = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here (e.g., filter results, call API, etc.)
    console.log('Search Query:', query);
  };

  return (
    <div className="flex justify-end space-x-4 ">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Location, Service, Product, or Keyword..."
        className="rounded-full h-[46px] w-96 px-4 text-gray-800 placeholder-gray-500 ring-1 ring-teal-500"
      />
      
      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="rounded-full h-[46px] bg-teal-600 text-white flex items-center px-6 hover:bg-teal-700 transition-all duration-300"
      >
        <FaSearch className="h-4 w-4 mr-2" />
        Search
      </button>
    </div>
  );
}

export default ProductSearch;
