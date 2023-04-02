import { FC } from "react";

export interface mainProps {
  children: React.ReactNode[] | React.ReactNode
}

const Main: FC<mainProps> = ({ children }) => {
  return (
    <div className="w-full min-w-full h-full">
      {children}
    </div>
  )
}

export default Main;