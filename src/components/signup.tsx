"use client";
import React, { useState } from "react";
import { MagicCard } from "./ui/magic-card";
import { Separator } from "./ui/separator";
import LoginForm  from "@components/loginForm"
import ForgotForm from "./forgotForm";
import SignUpForm from "./signUpForm";
import { Button } from "./ui/button";



const Signup = () => {
  const [mode, setMode] = useState('signup')

  

  return (
    <MagicCard className="flex flex-col px-6 sm:px-10 py-8 min-w-[350px] w-full sm:w-3/4 md:w-4/5 lg:w-3/4 xl:w-3/4 h-auto">
      <div className="flex flex-col space-y-2 justify-center items-center mb-5">
        {/* Dynamic Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-card-foreground">
          {mode === 'reset' ? 'Reset Password' : mode === 'login' ? "Login" : "Sign Up"}
        </h1>
        <Separator className=""/>
        {/* Dynamic Subtitle */}
        <h2 className="text-sm sm:text-sm md:text-md font-normal text-black/60  text-center ">
          {mode === 'reset' ? 'Enter your email address to reset your password': mode === 'login' ? 'Enter your credentials to log in' : 'Enter your information below to create an account'}
        </h2>
        
      </div>
      {mode === 'signup' && <> <SignUpForm />
        <div className="flex flex-col justify-center items-center mt-6">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="text-xs sm:text-sm md:text-md mr-2">
               Already have an account?
              </h2>
              <Button
                type="button"
                onClick={() => setMode('login')}
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
            </h2></>
        
      }
      {mode === 'reset' && 
        <ForgotForm /> 
      }
      {mode === 'login' && 
        <LoginForm /> 
      }
    </MagicCard>
  );
};

export default Signup;
