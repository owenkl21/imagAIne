import React from "react";
import Image from "next/image";
import AuthImg from "@public/auth.jpeg";
import Logo from "@/components/logo";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Signup from "../../components/signup";


const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section (Image + Branding) */}
      <div className="relative w-full flex flex-col bg-muted text-foreground">
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10"/>
        <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10"/>
        
        <Image
          src={AuthImg}
          alt="Login Image"
          className="w-full h-[30vh] md:h-[50vh] lg:h-full object-cover"
        />

        {/* Logo */}
        <div className="absolute top-5 left-5 z-20">
          <Logo />
        </div>

        {/* Quote - Visible only on large screens */}
        <div className="hidden lg:block absolute bottom-5 p-10 text-primary-foreground z-20">
          <blockquote>
            <TypingAnimation className="text-lg font-normal" duration={30}>
              “ImagAIne is a game changer for me. I have been able to generate high-quality professional headshots within minutes. It has saved me countless hours of work and cost as well.”
            </TypingAnimation>
            <footer className="font-semibold"> - David S.</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Section (Signup Form) */}
      <div className="flex justify-center items-center px-6 mt-5 mb-5 md:px-20 lg:px-40">
        <Signup />
      </div>
    </main>
  );
};

export default AuthenticationPage;
