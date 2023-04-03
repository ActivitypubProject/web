import React, { FC } from "react";
import { getPassedChildren } from "@/utils/elements";

const Layout: Layout = ({ children }) => {
  const { Header, SideBar, Main, Footer } = getPassedChildren(children);

  console.log(SideBar)
  return (
    <div className="h-full">
      {Header &&
        <header className="h-1/6 border-blue-400 border-solid bg-slate-400">
          {Header}
        </header>
      }

      <div className="flex h-5/6">
        {SideBar &&
          <nav className="flex-none w-1/4 bg-zinc-500">
            {SideBar}
          </nav>
        }
        <main className="flex-1 bg-neutral-700">
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