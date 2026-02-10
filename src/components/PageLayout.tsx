import { ReactNode } from "react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import CookiePopup from "./CookiePopup";
import ChatWidget from "./ChatWidget";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <SiteFooter />
      <CookiePopup />
      <ChatWidget />
    </div>
  );
};

export default PageLayout;
