import { useParams } from "react-router-dom";
import { MensProduct } from "../APIS/MensApi";
import Rating from "@mui/material/Rating";
import { MdShoppingCartCheckout } from "react-icons/md";
import { PiHeartStraight } from "react-icons/pi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import "../App.css";
import { increment, decrement, addtoCart } from "../store/createSlice";
import { useSelector, useDispatch } from "react-redux";
export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = MensProduct.find((p) => p.id === Number(id));
  const cartItem = useSelector((state) => state.cart.value);

  if (!item) {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-red-500">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(item.image || "");

  return (
    <div className="py-12 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-2xl p-8 mx-auto">
        {/* Left Side - Image Zoom */}
        <div className="flex flex-col items-center">
          <InnerImageZoom
            zoomType="hover"
            src={selectedImage}
            className="w-80 h-80 object-contain rounded"
          />

          {/* Thumbnails */}
          <div className="mt-6 flex gap-4">
            {[item.image, item.image2, item.image3, item.image4].map(
              (img, index) =>
                img && (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer w-20 h-20 object-cover border-2 p-1 rounded transition-all duration-200 ${
                      selectedImage === img
                        ? "border-green-500"
                        : "border-gray-200"
                    }`}
                  />
                )
            )}
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col gap-4 pr-20 my-auto text-center md:text-left">
          <h1 className="text-xl lg:text-2xl xl:text-3xl text-gray-700 font-semibold">
            {item.name}
          </h1>
          <h2 className="text-xl font-normal text-green-600">{item.title}</h2>

          {/* Rating */}
          {/* Rating */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Rating value={item.rating} precision={0.5} readOnly />
            <span className="text-gray-500">({item.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div>
            <span className=" text-xl lg:text-2xl font-semibold text-green-600 mr-3">
              Price
            </span>
            <span className="text-xl">Rs {item.price}</span>{" "}
            <del className="text-gray-600 text-xl font-normal">
              Rs {item.oldPrice}
            </del>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed hidden xl:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ratione aperiam, dolorem rerum deleniti modi, est tempore, nobis
            nulla unde minima!
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex flex-col xl:flex-row items-center gap-6 mt-6">
            {/* Quantity */}
            <div className="flex items-center gap-4">
              <button
                className="bg-gray-100 hover:bg-white shadow-md rounded-full p-4"
                onClick={() => dispatch(decrement())}
              >
                <FaMinus />
              </button>
              <span className="font-semibold text-xl">{cartItem}</span>
              <button
                className="bg-gray-100 hover:bg-white shadow-md rounded-full p-4"
                onClick={() => dispatch(increment())}
              >
                <FaPlus />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              className="flex items-center justify-center gap-2 text-md text-white font-semibold rounded shadow-lg bg-[#1a9353] hover:bg-green-600 px-6 py-3"
              onClick={() => {
                const alreadyInCart = cartItem.some((p) => p.id === item.id);
                if (!alreadyInCart) {
                  dispatch(addtoCart(item));
                } else {
                  alert("Item already in cart");
                }
              }}
            >
              Add to Cart <MdShoppingCartCheckout className="text-2xl" />
            </button>

            {/* Wishlist */}
            <button className="font-semibold shadow-md rounded-full p-3 bg-gray-100 hover:bg-white">
              <PiHeartStraight className="text-xl text-[#00a63e]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
