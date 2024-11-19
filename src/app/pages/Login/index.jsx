"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; // Zod for schema validation
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../navbar";
import Login from "../../../../public/Assets/Login.png";
import GoogleLogo from "../../../../public/Assets/googlelogo.png";

// Zod Schema for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

export default function Index() {
  const router = useRouter();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), // Resolving with Zod schema
  });

  // Mock authentication function
  const onSubmit = (data) => {
    console.log("Login Successful with data:", data);
    alert("Login Successful!");
    router.push("/Home"); // Redirect to home page
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[36px]">
      <Navbar />
      <div className="h-auto w-[1200px] flex flex-col lg:flex-row justify-between items-center bg-black p-10">
        {/* Login Image: Hidden on mobile devices */}
        <div className="hidden lg:block w-full lg:w-[584px] h-auto flex justify-center lg:justify-start">
          <Image
            src={Login}
            alt="Image"
            className="w-full lg:w-[584px] h-auto lg:h-[554.81px] object-contain"
          />
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[416px] h-auto lg:h-[553px] rounded-[16px] flex flex-col justify-center items-center gap-[36px] px-4"
        >
          <center>
            <h1 className="text-[32px] lg:text-[40px] font-bold">Login</h1>
          </center>

          {/* Google Sign-in */}
          <div className="w-full lg:w-[344px] max-h-[46px] border-2 px-[12px] py-[8px] rounded-[8px] flex justify-center items-center gap-[10px]">
            <div className="w-[215.2px] h-[22px] flex justify-center items-center gap-[4px]">
              <Image
                src={GoogleLogo}
                alt="Google"
                className="w-[20.45px] h-[19.71px] hover:scale-110 transition-all"
              />
              <p className="text-[13px] font-bold">Login with Google</p>
            </div>
          </div>

          {/* OR Divider */}
          <div className="w-[180px] h-auto flex justify-between items-center mt-3">
            <div className="h-[1px] w-[50%] bg-gray-300"></div>
            <p className="text-[18px] font-medium text-gray-500">OR</p>
            <div className="h-[1px] w-[50%] bg-gray-300"></div>
          </div>

          {/* Email Input */}
          <div className="w-full lg:w-[364px] mt-3">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full h-[46px] text-[14px] font-medium bg-transparent border-b placeholder-gray-400 focus:outline-none text-white"
            />
            <p className="text-red-500 text-[12px]">{errors.email?.message}</p>
          </div>

          {/* Password Input */}
          <div className="w-full lg:w-[364px] mt-3">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full h-[46px] text-[14px] font-medium bg-transparent border-b placeholder-gray-400 focus:outline-none text-white"
            />
            <p className="text-red-500 text-[12px]">
              {errors.password?.message}
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-[142px] h-auto p-[12px_16px] rounded-[12px] border-2 border-slate-100 font-medium text-[14px] hover:scale-105 transition-all mt-4"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="w-full lg:w-[284px] h-[22px] flex items-center justify-center mt-3">
            <span className="text-[15px]">Don’t have an account?</span>
            <span className="text-green-500 text-[15px] cursor-pointer hover:underline">
              Get Started
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
