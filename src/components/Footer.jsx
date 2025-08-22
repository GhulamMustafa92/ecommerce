import logo from '../assets/Images/logo.jpg'
import { IoLocationSharp } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

export default function Footer() {
  return (
   <div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-[90%] mx-auto gap-4">
    {/* Logo Column - 2 Columns Wide */}
    <div className="col-span-2 text-gray-500">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <p className="m-5 text-sm pt-5">
        <IoLocationSharp className="inline mx-2 text-[#34ad78] text-2xl" />
        Awesome grocery store website template
      </p>
      <p className="m-5 text-sm pt-5">
        <FaHeadphonesAlt className="inline mx-2 text-[#34ad78] text-2xl" />
        Call Us: (+91) - 540-025-124553
      </p>
      <p className="m-5 text-sm pt-5">
        <MdOutlineEmail className="inline mx-2 text-[#34ad78] text-2xl" />
        Email: sale@Nest.com
      </p>
      <p className="m-5 text-sm pt-5">
        <IoMdTime className="inline mx-2 text-[#34ad78] text-2xl" />
        Hours: 10:00 - 18:00, Mon - Sat
      </p>
    </div>

    {/* Other Columns */}
    <div>
      <p className="m-5 text-xl font-semibold">Company</p>
      <p className="m-5 text-sm text-gray-600">About Us</p>
      <p className="m-5 text-sm text-gray-600">Delivery Information</p>
      <p className="m-5 text-sm text-gray-600">Privacy Policy</p>
      <p className="m-5 text-sm text-gray-600">Terms & Conditions</p>
      <p className="m-5 text-sm text-gray-600">Contact Us</p>
      <p className="m-5 text-sm text-gray-600">Support Center</p>
      <p className="m-5 text-sm text-gray-600">Careers</p>
    </div>

    <div>
      <p className="m-5 text-xl font-semibold">Company</p>
      <p className="m-5 text-sm text-gray-600">About Us</p>
      <p className="m-5 text-sm text-gray-600">Delivery Information</p>
      <p className="m-5 text-sm text-gray-600">Privacy Policy</p>
      <p className="m-5 text-sm text-gray-600">Terms & Conditions</p>
      <p className="m-5 text-sm text-gray-600">Contact Us</p>
      <p className="m-5 text-sm text-gray-600">Support Center</p>
      <p className="m-5 text-sm text-gray-600">Careers</p>
    </div>

    <div>
      <p className="m-5 text-xl font-semibold">Corporate</p>
      <p className="m-5 text-sm text-gray-600">About Us</p>
      <p className="m-5 text-sm text-gray-600">Delivery Information</p>
      <p className="m-5 text-sm text-gray-600">Privacy Policy</p>
      <p className="m-5 text-sm text-gray-600">Terms & Conditions</p>
      <p className="m-5 text-sm text-gray-600">Contact Us</p>
      <p className="m-5 text-sm text-gray-600">Support Center</p>
      <p className="m-5 text-sm text-gray-600">Careers</p>
    </div>

    <div>
      <p className="m-5 text-xl font-semibold">Popular</p>
      <p className="m-5 text-sm text-gray-600">About Us</p>
      <p className="m-5 text-sm text-gray-600">Delivery Information</p>
      <p className="m-5 text-sm text-gray-600">Privacy Policy</p>
      <p className="m-5 text-sm text-gray-600">Terms & Conditions</p>
      <p className="m-5 text-sm text-gray-600">Contact Us</p>
      <p className="m-5 text-sm text-gray-600">Support Center</p>
      <p className="m-5 text-sm text-gray-600">Careers</p>
    </div>
  </div>
</div>

  )
}
