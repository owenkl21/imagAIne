import React from "react";
import Image from "next/image";
import AuthImg from "@public/auth.jpeg";
import Logo from "@/components/logo";

const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relatives">
      <div className="relative w-full flex flex-col bg-muted  text-foreground ">
        <Image
          src={AuthImg}
          alt="Login Image"
          className="w-full h-full object-cover"
        />
        <div className=" p-10 absolute z-20 flex items-center">
          <Logo />
        </div>
        <div className="absolute bottom-5 p-10 text-primary-foreground z-20">
          <blockquote>
            <p>
              “ImagAIne is a game changer for me. I have been able to
              generate high quality professional headshots within minutes. It
              has saved me countless hours of work and cost as well.”
            </p>
            <footer> - David S.</footer>
          </blockquote>
        </div>
      </div>

      <div className="border-2 border-solid border-blue-500">Login Form</div>
    </main>
  );
};

export default AuthenticationPage;
