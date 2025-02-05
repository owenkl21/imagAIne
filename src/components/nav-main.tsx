"use client";

import {
  SquareTerminal,
  Image,
  Frame,
  Layers,
  Images,
  CreditCard,
  Settings2,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// This is sample data.
const data = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquareTerminal,
  },
  {
    title: "Generate Image",
    url: "/image-generation",
    icon: Image,
  },
  {
    title: "My Models",
    url: "/models",
    icon: Frame,
  },
  {
    title: "Train Models",
    url: "/model-training",
    icon: Layers,
  },
  {
    title: "My Images",
    url: "/gallery",
    icon: Images,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/account-settings",
    icon: Settings2,
  },
];
export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className={cn(
              pathname === item.url
                ? "text-white rounded-md bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                : "text-muted-foreground"
            )}
          >
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={cn(
                  pathname === item.url
                    ? "pointer-events-auto hover:font-semibold hover:text-white hover:bg-transparent"
                    : "hover:bg-sidebar-accent hover:font-semibold"
                )}
                tooltip={item.title}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
