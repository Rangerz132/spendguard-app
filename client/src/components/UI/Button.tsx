import React from "react";

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`${className} cursor-pointer`}>
      {children}
    </button>
  );
};

export default Button;
