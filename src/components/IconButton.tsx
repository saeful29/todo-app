import React, { LegacyRef, ReactEventHandler, useRef } from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: ReactEventHandler;
  variant?: "danger" | "primary" | "success" | "warning";
};

type RefType = HTMLButtonElement;

const IconButton = React.forwardRef<RefType, Props>((props, ref) => {
  const { children, onClick, variant = "primary" } = props;
  switch (variant) {
    case "primary":
      return (
        <button
          className='p-2 bg-indigo-500 drop-shadow-md rounded-md text-white active:bg-indigo-600 transition-all'
          onClick={onClick}
          ref={ref}
        >
          {children}
        </button>
      );

    case "danger":
      return (
        <button
          className='py-2 px-2 bg-rose-500 drop-shadow-md rounded-md text-white active:bg-rose-600 transition-all'
          onClick={onClick}
          ref={ref}
        >
          {children}
        </button>
      );
    case "success":
      return (
        <button
          className='py-2 px-2 bg-green-500 drop-shadow-md rounded-md text-white active:bg-green-600 transition-all'
          onClick={onClick}
          ref={ref}
        >
          {children}
        </button>
      );
    case "warning":
      return (
        <button
          className='py-2 px-2 bg-yellow-500 drop-shadow-md rounded-md text-white active:bg-yellow-600 transition-all'
          onClick={onClick}
          ref={ref}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className='py-2 px-2 bg-indigo-500 drop-shadow-md rounded-md text-white active:bg-indigo-600 transition-all'
          onClick={onClick}
          ref={ref}
        >
          {children}
        </button>
      );
  }
});
export default IconButton;
