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
  disabled?: boolean;
}

export const Button = ({ buttonType="submit", children, className, onClick, disabled=false }: ButtonProps) => {
  function _onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }
  }
  const _className = clsx(
    "font-bold py-2 px-4 rounded",
    buttonClasses[buttonType],
    {
      "opacity-50 pointer-events-none": disabled,
    },
    className
  );

  return <button className={_className} onClick={_onClick} disabled={disabled}>{children}</button>;
}
