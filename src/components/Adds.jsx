import adds from "../assets/Images/adds.png";
import { LuArrowUpRight } from "react-icons/lu";
import icon1 from "../assets/SVG/icon1.svg";
import icon2 from "../assets/SVG/icon2.svg";
import icon3 from "../assets/SVG/icon3.svg";
import icon4 from "../assets/SVG/icon4.svg";
import icon5 from "../assets/SVG/icon5.svg";

export default function Adds() {
  const features = [
    { icon: icon1, title: "Best prices & offers", desc: "Orders $50 or more" },
    { icon: icon2, title: "Fast delivery", desc: "Within 24 hours" },
    { icon: icon3, title: "Wide assortment", desc: "100+ products" },
    { icon: icon4, title: "Easy returns", desc: "Hassle-free policy" },
    { icon: icon5, title: "Secure payments", desc: "100% secure checkout" },
  ];

  return (
    <div className="py-10 space-y-10 w-full max-w-7xl mx-auto">
  {/* Top Advertisement Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl bg-[#e4fff3] rounded-xl p-5 mx-auto items-center text-gray-600 gap-8">
    
    {/* Left Content */}
    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
      <h1 className="text-4xl font-semibold leading-snug">
        Stay home & get your daily needs from our shop
      </h1>
      <p className="text-xl font-normal mt-4">
        Start Your Daily Shopping with Nest Mart
      </p>

      {/* Subscribe Box */}
      <div className="mt-6 flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm w-full max-w-md">
        <div className="flex items-center px-4">
          <LuArrowUpRight className="text-3xl text-[#34ad78] md:hidden lg:block" />
        </div>
        <input
          type="search"
          placeholder="Your email address"
          className="flex-1 px-4 py-3 border-none outline-none text-gray-700"
        />
        <button className="bg-[#34ad78] text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-all">
          Subscribe
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="hidden md:block">
      <img
        src={adds}
        alt="Advertisement"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>

  {/* Features Section */}
  <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
    {features.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-4 bg-gray-100 px-3 py-4 rounded-xl text-center sm:text-left"
      >
        <img
          src={item.icon}
          alt={item.title}
          className="w-12 h-12 hover:translate-y-[-5px] transition-all duration-500"
        />
        <div>
          <h1 className="font-semibold text-lg">{item.title}</h1>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
