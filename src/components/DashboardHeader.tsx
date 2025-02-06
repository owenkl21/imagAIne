"use client";

import { usePathname } from "next/navigation";
import { menuItems } from "@/constants/menuItems";
import { useUser } from "@/context/UserProvider";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "./ui/aurora-text"; // or adjust path as needed

export function DashboardHeader() {
  const pathname = usePathname();
  const { user } = useUser();

  console.log("Current pathname:", pathname);
  console.log("Current user:", user);

  // Find the current menu item based on the pathname.
  const currentItem = menuItems.find((item) => item.url === pathname);
  console.log("Found menu item:", currentItem);

  // Determine the text to display.
  const text =
    pathname === "/dashboard"
      ? `Welcome, ${user?.name || "User"}`
      : currentItem?.title || "Dashboard";

  console.log("Display text:", text);

  return (
    <div className="flex flex-col m-1 items-center justify-center">
      <AuroraText>
      <TypingAnimation className="text-2xl font-semibold font-sans" duration={30}>
        {text}
      </TypingAnimation>
      </AuroraText>
    </div>
  );
}
