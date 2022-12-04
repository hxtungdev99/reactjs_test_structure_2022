import React from "react";
import "./index.scss";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: any;
}

const InputCus: React.FC<InputProps> = ({ type, placeholder, onChange }) => {
  return <input className="input" type={type} placeholder={placeholder} onChange={onChange} />;
};

export default InputCus;
