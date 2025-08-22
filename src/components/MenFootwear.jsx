import { MensFootWearProduct } from "../APIS/MenFootwearApi"
import { NavLink } from "react-router-dom";
export default function Mens() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {MensFootWearProduct.map((item) => (
            <NavLink to={`/mensfootwear/${item.id}`}>
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-68 object-cover object-top md:object-center hover:scale-110 cursor-pointer duration-500 transition-all "
            />

            {/* Product Details */}
            <div className="p-3">
              <p className="text-xs text-gray-500 uppercase">Fashion</p>
              <div className="font-semibold text-lg truncate">{item.name}</div>
              <p className="text-sm text-green-500">By GESPO</p>

              {/* Price Section */}
              <div className="mt-2">
                <span className="text-green-600 font-bold">
                  {item.price} PKR
                </span>
                {item.oldPrice && (
                  <span className="text-gray-400 text-sm ml-2">
                    <del>{item.oldPrice} PKR</del>
                  </span>
                )}
                
              </div>
            </div>
          </div>
           </NavLink>
        ))}
       
      </div>
    </div>
  );
}
