import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify'

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log(data);
    toast.success("Your Form has been Submitted",{position:'bottom-right',theme:'dark'});
  };

  return (
    <>
       <ToastContainer/>
    <div
      className="h-[110vh] flex justify-center items-center bg-gray-100 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* Name */}
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 8, message: "min-length: 8" },
            maxLength: { value: 15, message: "max-length: 15" },
          })}
          type="text"
          placeholder="Enter Your Name"
          className={`w-full px-4 py-2 border rounded-lg outline-none ${
            errors.name ? "border-red-500" : "border-gray-500"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter Your Email"
          className={`w-full px-4 py-2 border rounded-lg outline-none ${
            errors.email ? "border-red-500" : "border-gray-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <div className="relative">
          <input
            {...register("password", { required: "Password is required",
                pattern:{
                        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                        message:"uppercase, lowercase, special-character, number",
                    }
            },
            )}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            className={`w-full px-4 py-2 border rounded-lg outline-none ${
              errors.password ? "border-red-500" : "border-gray-500"
            }`}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {/* Confirm Password */}
        <div className="relative">
          <input
            {...register("cpassword", {
              required: "Confirm Password is required",
              validate:(value) => {
               return value === watch("password") || "password do not match"
              }
            })}
  
            type={showPassword2 ? "text" : "password"}
            placeholder="Confirm Password"
            className={`w-full px-4 py-2 border rounded-lg outline-none ${
              errors.cpassword ? "border-red-500" : "border-gray-500"
            }`}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            onClick={() => setShowPassword2(!showPassword2)}
          >
            {showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        {errors.cpassword && (
          <p className="text-red-500 text-sm">{errors.cpassword.message}</p>
        )}

        {/* Remember Me */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register("check", { required: "You must agree to continue" })}
              type="checkbox"
              className="accent-blue-500"
            />
            Remember me
          </label>
          {errors.check && (
            <p className="text-red-500 text-sm">{errors.check.message}</p>
          )}

          <a
            href="#"
            className="text-blue-500 hover:underline hover:text-red-600 transition"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <input
          disabled={isSubmitting}
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          className="w-full bg-[#34ad78] text-white py-2 rounded-lg cursor-pointer hover:bg-green-600 transition disabled:opacity-50"
        />
      </form>
    </div>
 
    </>
  );
}
