import React from "react";
import Image from "next/image";
import AuthImg from "@public/auth.jpeg";
import Logo from "@/components/logo";
import { TypingAnimation } from "@/components/ui/typing-animation";
import AuthForm from "../../components/AuthForm";

const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Left Section (Image + Branding) */}
      <div className="relative w-full flex flex-col bg-muted text-foreground">
        
        {/* Top Gradient (Hidden on sm & md, visible from lg+) */}
        <div className="hidden lg:block w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10" />
        
        {/* Bottom Gradient (Hidden on sm & md, visible from lg+) */}
        <div className="hidden lg:block w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10" />

        {/* Background Image */}
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
              “ImagAIne is a game changer for me. I have been able to generate
              high-quality professional headshots within minutes. It has saved
              me countless hours of work and cost as well.”
            </TypingAnimation>
            <footer className="font-semibold"> - David S.</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Section (Signup Form) */}
      <div className="flex justify-center items-center px-4 w-full">
        <div className="w-full flex justify-center sm:w-11/12 md:w-5/6 lg:w-full xl:w-full 2xl:w-full">
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default AuthenticationPage;
