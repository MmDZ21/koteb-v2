import Header from "@/components/layout/header/Header";

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
    </div>
  );
}
