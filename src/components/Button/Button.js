import Spinner from "components/Spinner/Spinner";
import React from "react";

const Button = ({backgroundColor, title, onClick, loading, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      class={`block text-center text-white bg-${backgroundColor}-800 p-3 duration-300 rounded-sm hover:bg-gray-500 w-full ${
        disabled || loading ? "cursor-not-allowed" : ""
      }`}
    >
      {loading ? <Spinner /> : title}
    </button>
  );
};

export default Button;
