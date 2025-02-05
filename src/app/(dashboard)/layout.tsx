import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
        <div className="border border-red-500 flex flex-row items-center">
          <SidebarTrigger className="m-1" />
          <div className="flex flex-col m-1 items-center justify-center">
            <DashboardHeader />
          </div>
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 pt0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
    </UserProvider>
  );
}
