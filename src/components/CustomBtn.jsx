import React from "react";

export default function CustomBtn({ btnText, btnColor, txtColor="text-white", OnClick }) {
  return (
    <button
      type="Submit"
      className={`font-bold p-1.5 cursor-pointer  ${btnColor}  rounded-2xl text-shadow-md ${txtColor} hover:bg-slate-800 transition duration-500`}
      onClick={OnClick}
    >
      {btnText}
    </button>
  );
}
