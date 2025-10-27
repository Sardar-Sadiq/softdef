import React from "react";

interface ButtonProps {
  className?: string;
}

const Button = ({ className }: ButtonProps) => {
  return (
    <div>
      <button className={`w-44 h-14 border border-white rounded-xl text-lg inter font-normal hover:bg-white/10 transition-colors duration-300 ${className || ''}`}>
        <a href="#">Buy Now</a>
      </button>
    </div>
  );
};

export default Button;
