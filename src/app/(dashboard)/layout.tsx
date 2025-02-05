import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <div className='border border-red-500 flex flex-row'>
      <SidebarTrigger className="ml-1" />
      <div className='flex flex-col'>
      <h1>This is the header</h1>
      <h2>this is the description</h2>
      </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 pt0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
