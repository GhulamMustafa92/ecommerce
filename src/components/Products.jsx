import { useState } from "react";
import { productapi } from "../APIS/ProductsAPI";
import { productApi2 } from "../APIS/ProductAPI2";
import { FaRegEye } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
import A from "../assets/Images/A.jpg";
import B from "../assets/Images/B.jpg";
import C from "../assets/Images/C.jpg";
import D from "../assets/Images/D.jpg";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../store/createSlice";
import { ToastContainer } from "react-toastify";
import { MdOutlineWifiTetheringError } from "react-icons/md";


import { toast } from "react-toastify";
export default function Products({ searchTerm }) {
  const [product] = useState(productapi);
  const [product2] = useState(productApi2);
  const filteredPopular = product.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFeatured = product2.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart);

  // Custom slider arrows
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-[#34ad78] p-2 rounded-full cursor-pointer hover:bg-green-600 transition"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={30} color="white" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-[#34ad78] p-2 rounded-full cursor-pointer hover:bg-green-600 transition"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={30} color="white" />
    </div>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const ProductCard = ({ s }) => (
    <>
    <div className="rounded-xl bg-white hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden">
      <div className="w-full h-64 overflow-hidden relative group">
        {/* Hover icons */}
        <div className="absolute  inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-20">
          <FaRegEye className="text-white text-4xl bg-[#34ad78] p-2 rounded-full cursor-pointer hover:bg-green-700 transition" />
          <IoIosHeartEmpty className="text-white text-4xl bg-[#34ad78] p-2 rounded-full cursor-pointer hover:bg-red-500 transition" />
        </div>

        {/* Product Image */}
        <NavLink to={`/details/${s.id}`}>
          {s.image2 ? (
            <>
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-60 object-cover object-top transform group-hover:scale-105 transition duration-500 ease-in-out group-hover:opacity-0 absolute top-0 left-0 z-10"
              />
              <img
                src={s.image2}
                alt={s.name}
                className="w-full h-60 object-cover object-top transform group-hover:scale-105 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute top-0 left-0 z-0"
              />
            </>
          ) : (
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-60 object-cover object-top transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          )}
        </NavLink>
      </div>

      {/* Content */}
      <div className="pb-10 flex flex-col h-50 px-3">
        {s.category && (
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {s.category}
          </p>
        )}

        <NavLink to={`/details/${s.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 break-words">
            {s.name}
          </h2>
        </NavLink>

        <p className="text-gray-500 text-sm flex-grow">{s.title}</p>

        <div className="flex items-center gap-2 ">
          <span className="text-lg font-bold text-[#34ad78]">
            Price {s.price}
          </span>
          {s.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {s.oldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className="mt-auto w-full bg-[#34ad78] text-white py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => {
            const alreadyInCart = cartItem.some((item) => item.id === s.id);
            if (!alreadyInCart) {
              dispatch(addtoCart(s));
            } else {
              toast.error("Item already in cart!", { position: "top-left" ,icon:<MdOutlineWifiTetheringError className="text-red-500" />});
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );

  return (
    <div className="max-w-7xl w-full mx-auto ">
    <div>
      {/* Header */}
      <div className="mx-5 uppercase">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left side: Heading */}
          <div className="col-span-12 lg:col-span-3 text-xl font-semibold mb-4 lg:mb-0">
            Popular Products
          </div>

          {/* Right side: Categories */}
          <div className="col-span-12 lg:col-span-9">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 text-[15px] text-gray-600 cursor-pointer">
              {[
                "Fashions",
                "Electronics",
                "Bags",
                "Footwear",
                "Groceries",
                "Beauty",
                "Wellness",
                "Jewellery",
              ].map((cat, idx) => (
                <li
                  key={idx}
                  className="mx-3 my-2 hover:text-green-600 transition font-medium"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Popular Products Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {filteredPopular.map((s) => (
          <ProductCard key={s.id} s={s} />
        ))}
      </div>

      {/* Image Row */}
      <div className="grid grid-cols-4 gap-4 w-[93%] mx-auto">
        {[A, B, C, D].map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt=""
              className="rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer "
            />
          </div>
        ))}
      </div>

      {/* Featured Products Slider */}
      <div className="mt-10 px-6 relative">
        <div className="text-xl font-semibold mb-4">Featured Products</div>
        <Slider {...sliderSettings}>
          {filteredFeatured.map((s) => (
            <div key={s.id} className="px-3">
              <ProductCard s={s} />
            </div>
          ))}
        </Slider>
      </div>
      <ToastContainer />
      </div>
    </div>
  );
}
