import { useCallback } from "react";
import Button from "../Button";

const GetStartForm = ({
  buttonTitle,
  onChangeHandler,
  onFocusHandler,
  onHandleClick,
  placeholder = "enter your email",
  type = "email",
  value = "",
  filled = true,
  clsStyle = "py-3 px-8 border-yellow-900",
  inputSty = "text-white placeholder:text-white border-white bg-gray-100 bg-opacity-10",
  formMainDiv = "max-md:flex-wrap",
}) => {
  const handlerChange = useCallback(
    (e) => {
      onChangeHandler && onChangeHandler(e);
    },
    [onChangeHandler]
  );

  const handlerFocus = useCallback(
    (e) => {
      onFocusHandler && onFocusHandler(e);
    },
    [onFocusHandler]
  );

  const handlerClick = useCallback(
    (e) => {
      onHandleClick && onHandleClick(e);
    },
    [onHandleClick]
  );
  return (
    <div className={`flex gap-2 xl:gap-4 ${formMainDiv}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handlerChange(e)}
        onFocus={handlerFocus}
        className={`max-md:w-full h-[50px] leading-5 py-2 px-8 border border-1 rounded-full focus:ring-0 focus:outline-none focus-visible:ring-0 ${inputSty}`}
      />

      <Button
        filled={filled}
        data={buttonTitle}
        clsStyle={clsStyle}
        action={handlerClick}
      />
    </div>
  );
};

export default GetStartForm;
