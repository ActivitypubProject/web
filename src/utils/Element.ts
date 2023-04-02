import React, { ReactElement, ReactNode } from "react"

const getFindChildren = (children: React.ReactNode[]) => {
  return (name: string): ReactElement => {
    const result = children.find((child: any) => {
      return child.type.name === name;
    })
    return result as ReactElement || null;
  };
}

const getPassedChildren = (children: React.ReactNode[]) => {
  const findChildren = getFindChildren(children);
  const Header = findChildren('Header');
  const SideBar = findChildren('SideBar');
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
  getFindChildren,
  getPassedChildren,
}


