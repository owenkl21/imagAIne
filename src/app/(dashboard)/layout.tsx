import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserProvider } from "@/context/UserProvider";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-row w-fit items-center gap-2 my-4">
            <SidebarTrigger className="m-1 hover:bg-clip" />
            <Separator orientation="vertical" className="h-5 w-[1px] bg-gray-300" />
            <div className="flex flex-col m-1 items-center justify-center">
              <DashboardHeader />
            </div>
          </div>
          <Separator orientation="horizontal" className="h-[1px] w-full bg-gray-300" />
          <main className="flex flex-1 flex-col gap-4 px-10 py-4 pt0">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
}
