import { FC } from "react";

interface buttonProps {
  clickHandler?: any;
  text: string;
  color?: string;
  size?: "large" | "medium" | "small"
}

const Button: FC<buttonProps> = ({
  clickHandler = () => { },
  text,
  color = "green",
  size = "medium"
}) => {
  let bgColor, textColor, hoverColor, width, height;
  switch (size) {
    case "medium":
      width = "w-44"
      height = "h-11"
      break;
    case "large":
      width = "w-52"
      height = "h-14"
      break;
    case "small":
      width = "w-24"
      height = "h-10"
      break;
  }

  bgColor = `bg-${color}-400`;
  hoverColor = `hover:bg-${color}-600`;
  textColor = "text-white";

  return (
    <button className={`rounded-full ${bgColor} ${hoverColor} ${textColor} ${width} ${height} text-sm`} onClick={clickHandler}>
      {text}
    </button >
  )
}

export default Button;