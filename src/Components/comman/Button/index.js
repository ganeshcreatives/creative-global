import React, { useCallback } from "react";

const Button = ({
  disabled = false,
  filled = false,
  data,
  clsStyle = "py-2 px-4 sm:px-6 md:px-8 border-yellow-900",
  action,
  type = "button",
}) => {
  const handleClick = useCallback(() => {
    action && action();
  }, [action]);
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${disabled ? "cursor-not-allowed opacity-50" : ""}
      ${
        filled ? "bg-yellow-900 text-black-33" : ""
      } leading-[140%] ${clsStyle} border rounded-full font-medium`}
      onClick={handleClick}
    >
      {data}
    </button>
  );
};

export default Button;
