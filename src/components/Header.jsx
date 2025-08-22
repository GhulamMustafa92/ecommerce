import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/Images/logo.jpg";
import empty from "../assets/Images/empty.png";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { IoClose } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { removefromCart } from "../store/createSlice";
import Mens from "../components/Mens.jsx";
import { productapi } from "../APIS/ProductsAPI";
export default function Header({ setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [stickyClass, setStickyClass] = useState("");
  const dispatch = useDispatch();
  const handleRemovefromCart = (item) => {
    dispatch(removefromCart(item));
  };
  useEffect(() => {
    const stickNavbar = () => {
      if (window.scrollY > 500) {
        setStickyClass("fixed top-0 left-0 w-full bg-white shadow-md z-50");
      } else {
        setStickyClass("");
      }
    };
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cartItem = useSelector((state) => state.cart.cart);
  const [store, setStore] = useState(productapi);
  const [data, setData] = useState("");
  const getData = (e) => {
    setData(e.target.value);

    let filterOut = store.filter((curValue) => {
      return curValue.name.toLocaleLowerCase().includes(data);
    });
  };
  return (
    <>
      {/* MAIN HEADER */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50 ">
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center p-4 ${stickyClass}`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search the items..."
              className="w-full p-2 pl-4 border border-gray-300 rounded-full outline-none focus:border-gray-500 transition"
            />
          </div>

          {/* Desktop Icons */}
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-gray-700">
              <li className="flex items-center text-xl mx-4 cursor-pointer hover:text-[#34ad78]">
                Wishlist
                <Badge color="success">
                  <FaRegHeart color="action" className="m-[2px]" />
                </Badge>
              </li>

              <li className="flex items-center mx-4 text-xl cursor-pointer hover:text-[#34ad78]">
                <button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="flex items-center gap-2"
                >
                  Add to cart
                  <Badge badgeContent={cartItem.length} color="success">
                    <RiShoppingCart2Line color="action" />
                  </Badge>
                </button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {/* Close Icon Wrapper */}
                  <div className="flex justify-end p-2">
                    <IoClose
                      className="text-2xl text-red-500 cursor-pointer hover:text-red-600"
                      onClick={handleClose}
                    />
                  </div>

                  {/* If cart empty */}
                  {cartItem.length === 0 ? (
                    <div className="flex justify-around items-center w-60 h-20">
                      <p>Your Cart is Empty</p>
                      <p className="animate-bounce">
                        <NavLink to="/">
                          <img src={empty} alt="" className="w-13 h-13" />
                        </NavLink>
                      </p>
                    </div>
                  ) : (
                    cartItem.map((item) => (
                      <div
                        key={item.id}
                        className="!p-2 hover:bg-gray-100 rounded-md transition-all"
                      >
                        {/* Item Row */}
                        <div className="flex items-center w-70 justify-between px-6">
                          {/* Left: Image + Info */}
                          <div className="flex gap-3 items-center overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-10 w-10 rounded object-cover flex-shrink-0"
                            />
                            <div className="overflow-hidden">
                              <p className="font-medium text-sm truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {item.price} PKR
                              </p>
                            </div>
                          </div>

                          {/* Right: Delete Icon */}
                          <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleRemovefromCart(item)}
                          >
                            <FaTrashAlt size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </Menu>
              </li>

              <NavLink
                className="flex items-center mx-4 text-xl cursor-pointer hover:text-[#34ad78]"
                to="/login"
              >
                Account <MdOutlineManageAccounts className="ml-1 text-xl" />
              </NavLink>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* DESKTOP CATEGORY MENU */}
        <div className="hidden md:block border-t border-gray-200">
          <ul className="flex font-semibold justify-center cursor-pointer">
            {/* Home */}
            <div className="relative group hover:bg-blue-50 transition">
              <NavLink className="mx-8 my-5 flex items-center" to="/">
                Home
              </NavLink>
            </div>

            {/* Fashion */}
            <div className="relative group hover:bg-blue-50 transition">
              <li className="mx-8 my-5 flex items-center hover:text-gray-900">
                Fashion <IoIosArrowDown className="inline mx-1" />
              </li>
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700 flex flex-col">
                  <NavLink
                    to="/mens"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Mens
                  </NavLink>
                  <NavLink to='/womens' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Women
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* Electronics */}
            <div className="relative group hover:bg-blue-50 transition">
              <li className="mx-8 my-5 flex items-center hover:text-gray-900">
                Electronics <IoIosArrowDown className="inline mx-1" />
              </li>
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700 flex flex-col">
                  <NavLink
                    to="/laptop"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Laptops
                  </NavLink>
                  <NavLink
                    to="/watch"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Smart Watch
                  </NavLink>
                  <NavLink to='/camera' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cameras
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* Bags */}
            <div className="relative group hover:bg-blue-50 transition">
              <li className="mx-8 my-5 flex items-center hover:text-gray-900">
                Bags <IoIosArrowDown className="inline mx-1" />
              </li>
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700 flex flex-col">
                  <NavLink to='/mensBag' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Mens Bag
                  </NavLink>
                  <NavLink to='/womensBags' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Women Bags
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* Footwear */}
            <div className="relative group hover:bg-blue-50 transition">
              <li className="mx-8 my-5 flex items-center hover:text-gray-900">
                Footwear <IoIosArrowDown className="inline mx-1" />
              </li>
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700 flex flex-col">
                  <NavLink to='/mensfootwear' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Men Footwear
                  </NavLink>
                  <NavLink to='/womensfootwear' className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Women Footwear
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* Groceries */}
            <div className="relative group hover:bg-blue-50 transition">
              <NavLink to='/grocries' className="mx-8 my-5 flex items-center">Groceries</NavLink>
            </div>

            {/* Beauty */}
            <div className="relative group hover:bg-blue-50 transition">
              <NavLink to='/beauty' className="mx-8 my-5 flex items-center">Beauty</NavLink>
            </div>
          </ul>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3 border-t border-gray-200">
            {/* Mobile Search */}
            <input
              type="search"
              placeholder="Search the items..."
              className="w-full p-2 pl-4 border border-gray-300 rounded-full outline-none focus:border-gray-500 transition"
            />

            {/* Mobile Icons */}
            <ul className="flex flex-col font-semibold text-gray-700">
              <li className="flex items-center py-2 cursor-pointer hover:text-gray-900">
                Wishlist <FaRegHeart className="ml-2 text-lg" />
              </li>
              <li className="flex items-center py-2 cursor-pointer hover:text-gray-900">
                Add to cart <RiShoppingCart2Line className="ml-2 text-lg" />
              </li>
              <li className="flex items-center py-2 cursor-pointer hover:text-gray-900">
                Account <MdOutlineManageAccounts className="ml-2 text-xl" />
              </li>
            </ul>

            {/* Mobile Categories */}
            <div className="border-t border-gray-200 pt-3">
              <ul className="flex flex-col font-semibold text-gray-700">
                {/* Home */}
                <li className="py-2">Home</li>

                {/* Fashion */}
                <li className="py-2">
                  Fashion
                  <ul className="pl-4 text-sm text-gray-600">
                    <li className="py-1">
                      <Mens />
                    </li>
                    <li className="py-1">Women</li>
                  </ul>
                </li>

                {/* Electronics */}
                <li className="py-2">
                  Electronics
                  <ul className="pl-4 text-sm text-gray-600">
                    <NavLink to='/laptop' className="py-1">Laptops</NavLink>
                    <NavLink to='/watch' className="py-1">Smart Watch</NavLink>
                    <NavLink to='/camera' className="py-1">Cameras</NavLink>
                  </ul>
                </li>

                {/* Bags */}
                <li className="py-2">
                  Bags
                  <ul className="pl-4 text-sm text-gray-600">
                    <NavLink to='/mensBag' className="py-1">Mens Bag</NavLink>
                    <NavLink to='/womensBags' className="py-1">Women Bags</NavLink>
                  </ul>
                </li>

                {/* Footwear */}
                <li className="py-2">
                  Footwear
                  <ul className="pl-4 text-sm text-gray-600">
                    <NavLink to='/mensfootwear' className="py-1">Men Footwear</NavLink>
                    <NavLink to='/womensfootwear' className="py-1">Women Footwear</NavLink>
                  </ul>
                </li>

                {/* Groceries */}
                <NavLink to='/grocries' className="py-2">Groceries</NavLink>

                {/* Beauty */}
                <NavLink to='/beauty' className="py-2">Beauty</NavLink>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
