"use client";

import { usePathname } from "next/navigation";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import NavbarHero from "./Header/Header.jsx";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout =
    pathname.includes("/admin") ||
    pathname.includes("/a/d/m/i/n/admin") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  if (hideLayout) {
    // Admin page (or login/register) → no Header/Footer
    return <>{children}</>;
  }

  // All other pages → normal layout
  return (
    <>
      {/* <Header /> */}
      <NavbarHero/>
      {children}
      <Footer />
    </>
  );
}
