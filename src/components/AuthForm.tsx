"use client";
import React, { useState } from "react";
import { MagicCard } from "./ui/magic-card";
import { Separator } from "./ui/separator";
import LoginForm from "@components/loginForm";
import ForgotForm from "./forgotForm";
import SignUpForm from "./signUpForm";
import { Button } from "./ui/button";

const Signup = () => {
  const [mode, setMode] = useState("login");

  return (
    <MagicCard className="flex flex-col px-6 sm:px-10 py-8 min-w-[350px] w-full sm:w-3/4 md:w-4/5 lg:w-3/4 xl:w-3/4  2xl:max-w-[500px] h-auto mb-5">
      <div className="flex flex-col space-y-2 justify-center items-center mb-5">
        {/* Dynamic Heading */}
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-card-foreground">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </h1>
        <Separator className="" />
        {/* Dynamic Subtitle */}
        <h2 className="text-sm sm:text-sm md:text-md font-normal text-black/60  text-center ">
          {mode === "reset"
            ? "Enter your email address to reset your password"
            : mode === "login"
            ? "Enter your credentials to log in"
            : "Enter your information below to create an account"}
        </h2>
      </div>
      {mode === "signup" && (
        <>
          {" "}
          <SignUpForm />
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="text-xs sm:text-sm md:text-md mr-2">
                Already have an account?
              </h2>
              <Button
                type="button"
                onClick={() => setMode("login")}
                className="text-xs sm:text-sm md:text-md bg-transparent border-none p-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:brightness-125"
                variant={"link"}
              >
                Log in
              </Button>
            </div>
          </div>
          <h2 className="text-xs sm:text-sm md:text-md text-center">
            By clicking, you agree to{" "}
            <Button
              type="button"
              className="relative text-xs sm:text-sm md:text-md bg-transparent border-none p-0 no-underline hover:no-underline focus:no-underline"
              variant={"link"}
            >
              <span
                className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent cursor-pointer
                before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] 
                before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 
                before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                hover:before:scale-x-100"
              >
                Terms of Service
              </span>
            </Button>{" "}
            and{" "}
            <Button
              type="button"
              className="relative text-xs sm:text-sm md:text-md bg-transparent border-none p-0 no-underline hover:no-underline focus:no-underline"
              variant={"link"}
            >
              <span
                className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent cursor-pointer
                before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] 
                before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 
                before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                hover:before:scale-x-100"
              >
                Privacy Policy
              </span>
            </Button>{" "}
            .
          </h2>
        </>
      )}
      {mode === "reset" && <><ForgotForm />
        <div className=" flex justify-center items-center w-full  ">
              <Button
                type="button"
                onClick={() => setMode("login")}
                className="text-xs sm:text-sm md:text-md bg-transparent border-none p-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:brightness-125"
                variant={"link"}
              >
                <span
                  className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent cursor-pointer
                before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] 
                before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 
                before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                hover:before:scale-x-100"
                >
                  Back to login
                </span>
              </Button>
            </div>
      </>}
      {mode === "login" && (
        <>
          {" "}
          <LoginForm />
          <div className="flex flex-row justify-center mt-6 w-full  ">
            <div className="flex flex-row items-center w-full justify-start   p-2">
              <h2 className="text-xs sm:text-sm md:text-md mr-2">
                Need an account?
              </h2>
              <Button
                type="button"
                onClick={() => setMode("signup")}
                className="text-xs sm:text-sm md:text-md bg-transparent border-none p-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:brightness-125"
                variant={"link"}
              >
                <span
                  className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent cursor-pointer
                before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] 
                before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 
                before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                hover:before:scale-x-100"
                >
                  Sign Up
                </span>
              </Button>
            </div>
            <div className=" flex justify-end items-center w-full  ">
              <Button
                type="button"
                onClick={() => setMode("reset")}
                className="text-xs sm:text-sm md:text-md bg-transparent border-none p-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:brightness-125"
                variant={"link"}
              >
                <span
                  className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent cursor-pointer
                before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] 
                before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 
                before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                hover:before:scale-x-100"
                >
                  Forgot Password?
                </span>
              </Button>
            </div>
          </div>
        </>
      )}
    </MagicCard>
  );
};

export default Signup;
