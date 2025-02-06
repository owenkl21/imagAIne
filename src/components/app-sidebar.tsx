import * as React from "react";
import { SparklesIcon } from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

import { createClient } from "@/lib/supabase/server";
import { NavUser } from "./nav-user";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const user = {
    name: data.user?.user_metadata.full_name,
    email: data.user?.user_metadata.email ?? "",
  };
  console.log(data);

  console.log(user);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <SparklesIcon className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{"Imag{AI}ne"}</span>
            <span className="truncate text-xs">Pro</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
