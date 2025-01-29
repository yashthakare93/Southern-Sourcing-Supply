import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import './index.css';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import RelatedProduct from './components/RelatedProducts';
import Pagination from './components/Pagination';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/shop/login" element={<Login />} />
        <Route path="/shop/signup" element={<Signup />} />

        {/* Home route */}
        <Route
          path="/shop/home"
          element={
            <>
              <div className="relative z-10">
                <Navbar />
                <Banner />
                <CategoryList />
                <Product />
                <Pagination />
              </div>
              <Footer />
            </>
          }
        />

        {/* Product route */}  
        <Route
          path="/shop/products"
          element={
            <>
              <div className="relative z-10">
                <Navbar />
                <Sidebar/>
              </div>
              <Footer />
            </>
          }
        />
        {/* Product Detail Route */}
        <Route
          path="/details/:id"
          element={
            <>
              <div className="relative z-10">
                <Navbar />
                <ProductDetail />
                <RelatedProduct />
              </div>
              <Footer />
            </>
          }
        />

        {/* About and Contact Routes */}
        <Route path="/shop/about" element={
          <>
            <div className="relative z-10">
              <Navbar />
              <About />
            </div>
            <Footer />
          </>
        } />
        <Route path="/shop/contact" element={
          <>
            <div className="relative z-10">
              <Navbar />
              <Contact />
            </div>
            <Footer />
          </>
        } />

        {/* Default Route (redirect to /shop/home) */}
        <Route
          path="/"
          element={
            <>
              <div className="relative z-10">
                <Navbar />
                <Banner />
                <CategoryList />
                <Product />
                <Pagination />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
