"use client";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants/menuItems";
import { useUser } from "@/context/UserProvider";

export function DashboardHeader() {
  const pathName = usePathname(); // ✅ Updates dynamically on navigation
  const {user} = useUser();

  const currentItem = menuItems.find((item) => item.url === pathName);
  
  return (
    <div className="flex flex-col m-1 items-center justify-center">
       <h1 className="text-2xl font-semibold font-sans">
        {pathName === "/dashboard"
          ? `Welcome, ${user?.name || "User"}`
          : currentItem?.title}
      </h1>
    </div>
  );
}
