"use client";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants/menuItems";
import { useUser } from "@/context/UserProvider";
import { TypingAnimation } from "@/components/ui/typing-animation"; // ✅ Import from ShadCN UI

export function DashboardHeader() {
  const pathName = usePathname(); // ✅ Updates dynamically on navigation
  const { user } = useUser();

  const currentItem = menuItems.find((item) => item.url === pathName);
  const text =
    pathName === "/dashboard"
      ? `Welcome, ${user?.name || "User"}`
      : currentItem?.title;

  return (
    <div className="flex flex-col m-1 items-center justify-center">
      <TypingAnimation className="text-2xl font-semibold font-sans" duration={30}>
      {String(text)}
      </TypingAnimation>
    </div>
  );
}
