import Header from "./header";
import Content from "./content";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import Footer from "./footer";

export default function AppSideBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      {children}
      <Sidebar side="right">
        <Header />
        <Content />
        <Footer />
      </Sidebar>
    </SidebarProvider>
  );
}
