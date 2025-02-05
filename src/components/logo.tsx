import { Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SparklesText } from "./ui/sparkles-text";


const Logo = () => {
  return (
    <>
      <div className="bg-white/20 p-3 rounded-xl">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles
            className="size-8 stroke-primary-foreground"
            strokeWidth={1.5}
          />
          <SparklesText
            className="text-primary-foreground font-sans text-3xl"
            colors={{ first: "#A07CFE", second: "#FE8FB5" }}
            sparklesCount={5}
            text="Imag{AI}ne"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
