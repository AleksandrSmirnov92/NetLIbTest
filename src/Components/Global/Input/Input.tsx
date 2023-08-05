import React from "react";
interface InputStyle {
  labelText?: string;
  hoverColor?: string;
  borderColor?: string;
  plaseholder?: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({
  borderColor,
  plaseholder,
  type,
  labelText,
  value,
  setValue,
}: InputStyle) => {
  return (
    <div>
      {labelText ? <label htmlFor={"input"}>{labelText}</label> : ""}
      <input
        className={`${borderColor} text-sm w-full flex text-gray-500  text-start border-solid border px-2 py-2 mb-4 hover:border-blue-400 focus:outline-none  focus:border-gray-500`}
        type={type}
        id="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={plaseholder}
      />
    </div>
  );
};
export default Input;
