import React from "react";
interface InfoProps {
  text: string;
}
const InfoLine: React.FC<InfoProps> = ({ text }) => {
  return (
    <span className=" border border-fuchsia-500 rounded pl-2 py-2 mb-2">
      {text}
    </span>
  );
};
export default InfoLine;
