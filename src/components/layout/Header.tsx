import { FC, ReactNode } from "react";
import { basicProps } from "../../types/reactNode"


const Header: FC<basicProps> = ({ children }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      {children}
    </div>
  )
}

export default Header;