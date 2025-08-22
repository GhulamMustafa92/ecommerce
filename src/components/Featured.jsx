import React from "react";

export default function Featured() {
  return (
    <div className="w-full">
      <div className="my-10 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-black px-5 py-8 ">Featured Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4  mx-auto">
          <div className="flex justify-center cursor-pointer ">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-white p-2 flex items-center justify-center overflow-hidden hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                className="w-[65%] h-full object-contain "
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#feefea] p-7 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525218436_ele.png"
                className="w-65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#fdf0ff] p-2 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525231018_bag.png"
                className="w-[65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#def3ff] p-2 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525239704_foot.png"
                className="w-[65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#ffe8f8] p-2 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525248057_gro.png"
                className="w-[65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#e3fffa] p-2 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525255799_beauty.png"
                className="w-[65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#fff3ff] p-2 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525275367_well.png"
                className="w-[65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
           <div className="flex justify-center  cursor-pointer">
            <div className="rounded-full w-30 h-30 border border-gray-200 bg-[#deffd9] p-2 flex items-center justify-center overflow-hidden  hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-400">
              <img
                src="https://api.spicezgold.com/download/file_1734525286186_jw.png"
                className="w-[65%] h-full object-contain"
                alt="Electronics"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
