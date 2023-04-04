import React, { FC } from "react";
import { getPassedChildren } from "@/utils/elements";

const Layout: Layout = ({ children }) => {
  const { Header, SideBar, Main, Footer } = getPassedChildren(children);

  console.log(SideBar)
  return (
    <div className="h-full">
      {Header &&
        <header className="h-1/6 border-solid border-white">
          {Header}
        </header>
      }

      <div className="flex h-5/6">
        {SideBar &&
          <nav className="flex-none w-1/4 border-solid border-white">
            {SideBar}
          </nav>
        }
        <main className="flex-1 border-solid border-white">
          {Main}
        </main>
      </div>

      {Footer &&
        <footer className="">
          {Footer}
        </footer>
      }
    </div>
  )
}
export default Layout