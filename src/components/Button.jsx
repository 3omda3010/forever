import React from "react";

const Button = ({children}) => {
  return (
    <button type="submit" className="cursor-pointer bg-black text-white px-10 text-xs py-4 ">
      {children}
    </button>
  );
};

export default Button;
