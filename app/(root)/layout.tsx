import Header from "@/components/layout/header/Header";
import MobileNav from "@/components/layout/Navbar/MobileNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <MobileNav /> */}
      <MobileNav />
    </div>
  );
}
