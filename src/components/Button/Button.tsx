import React from "react";
import clsx from "clsx";

type ButtonType = "submit" | "plain" | "danger";

const buttonClasses = {
  submit: "bg-blue-500 hover:bg-blue-700 text-white",
  plain: "bg-gray-300 hover:bg-gray-400 text-gray-800",
  danger: "bg-red-500 hover:bg-red-700 text-white",
}

type ButtonProps = {
  buttonType?: ButtonType;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ buttonType="submit", children, className, onClick }: ButtonProps) => {
  const _className = clsx(
    "font-bold py-2 px-4 rounded",
    buttonClasses[buttonType],
    className
  );

  return <button className={_className} onClick={onClick}>{children}</button>;
}

export default Button;
