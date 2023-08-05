import React from "react";
interface ButtonProps {
  text?: string;
  textColor?: string;
  bg?: string;
  clickButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
let Button: React.FC<ButtonProps> = ({ text, textColor, bg, clickButton }) => {
  return (
    <div>
      <button
        className={`w-full flex justify-center  py-2 px-2 rounded-md ${bg} hover:opacity-75 `}
        onClick={(e) => {
          clickButton(e);
        }}
      >
        <span className={`${textColor}`}>{text}</span>
      </button>
    </div>
  );
};
export default Button;
