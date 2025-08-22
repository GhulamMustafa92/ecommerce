import { useParams } from "react-router-dom";
import { grocriesProduct } from "../APIS/GrocriesApi";
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
  const item = grocriesProduct.find((p) => p.id === Number(id));
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
    <div className="m-13">
      <div className="grid md:grid-cols-2 w-[90%] m-auto items-center shadow-2xl">
        {/* Left Side - Image Zoom */}
        <div className="mx-auto my-7">
          <InnerImageZoom
            zoomType="hover"
            src={selectedImage}
            className="w-80 h-80 object-contain mx-4 rounded"
          />

          {/* Thumbnails */}
          <div className="m-5">
            <div className="w-60 flex justify-between gap-4 m-4">
              {[item.image, item.image2, item.image3, item.image4].map(
                (img, index) =>
                  img && (
                    <div key={index}>
                      <img
                        src={img}
                        alt=""
                        onClick={() => setSelectedImage(img)}
                        className={`cursor-pointer border-2 p-1 rounded transition-all duration-200 ${
                          selectedImage === img
                            ? "border-green-500"
                            : "border-gray-200"
                        }`}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="mx-auto p-7">
          <div className="text-3xl text-gray-700 font-semibold my-1">
            {item.name}
          </div>
          <div className="text-xl font-normal text-green-600 my-1">
            {item.title}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 my-1">
            <Rating value={item.rating} precision={0.5} readOnly />
            <span className="text-gray-500 my-1">({item.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div>
            <span className="text-2xl font-semibold text-green-600 my-1 mr-3">
              Price
            </span>
            <span className="text-xl">Rs {item.price}</span> -{" "}
            <del className="text-gray-600 text-xl font-normal">
              Rs {item.oldPrice}
            </del>
          </div>

          {/* Description */}
          <p className="text-gray-600 my-1 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ratione aperiam, dolorem rerum deleniti modi, est tempore, nobis
            nulla unde minima!
          </p>

          {/* Quantity + Add to Cart */}
          <div className="xl:flex m-4">
            <div className="my-4">
              <button
                className="bg-[#f8f9fa] hover:bg-white shadow-xl rounded-full mx-3 p-5"
                onClick={() => dispatch(decrement())}
              >
                <FaMinus />
              </button>
              <span className="font-semibold text-xl">{cartItem}</span>
              <button
                className="bg-[#f8f9fa] hover:bg-white shadow-xl rounded-full mx-3 p-5"
                onClick={() => dispatch(increment())}
              >
                <FaPlus />
              </button>
            </div>
            <div className="my-4 ">
              <button
                className="text-md text-white font-semibold rounded shadow-2xl bg-[#1a9353] hover:bg-green-600 px-4 py-3"
                onClick={() => {
                  const alreadtInCart = cartItem.some((item) => item.id === item.id)
                  if(!alreadtInCart){
                    dispatch(addtoCart(item));
                  }else{
                    alert("Item already in cart")
                  }
                }}
              >
                Add to Cart
                <MdShoppingCartCheckout className="inline mx-3 text-2xl" />
              </button>
            </div>
            <div>
              <button className="font-semibold xl:mt-4 mx-3 shadow-xl rounded-full px-4 py-3 bg-[#f8f9fa] hover:bg-white ml-14 xl:mx-3">
                <PiHeartStraight className="items-center text-xl text-[#00a63e]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
