import { nodeArrayProps } from "@/types/reactNode";
import { ReactElement, ReactNode } from "react"

const getFindChildren = (children: ReactNode[]) => {
  return (name: string) => {
    const result = children.find((child: any) => {
      return child.type.name === name;
    })
    return result as ReactElement;
  }
};

const getPassedChildren = (children: ReactNode[]) => {
  const findChildren = getFindChildren(children);
  const Header = findChildren('Header');
  const SideBar = findChildren('Sidebar');
  const Main = findChildren('Main');
  const Footer = findChildren('Footer');
  return {
    Header,
    SideBar,
    Main,
    Footer,
  }
}

export {
  getPassedChildren,
}