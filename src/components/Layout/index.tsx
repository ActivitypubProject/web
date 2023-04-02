import React, { FC } from "react";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";
import { getPassedChildren } from "@/utils/Element";
import Footer from "./Footer";

interface Layout extends FC<FCprops> {
  Header: typeof Header;
  SideBar: typeof SideBar;
  Main: typeof Main;
  Footer: typeof Footer;
}

interface FCprops {
  children: React.ReactNode[]
}

const Layout: Layout = ({ children }) => {
  const { Header, SideBar, Main, Footer } = getPassedChildren(children);

  return (
    <div className="h-screen flex flex-col">
      {Header &&
        <header className="h-10">
          {Header}
        </header>
      }

      <div className="flex flex-1">
        {SideBar &&
          <aside className="h-full w-1/5">
            {SideBar}
          </aside>
        }
        <main className="flex-1">
          {Main}
        </main>
      </div>

      {Footer &&
        <footer className="h-10">
          {Footer}
        </footer>
      }
    </div>
  )
}

Layout.Header = Header;
Layout.SideBar = SideBar;
Layout.Main = Main;
Layout.Footer = Footer;
export default Layout