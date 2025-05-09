import React, { useState } from "react";
import CustomBtn from "./CustomBtn";
import { useAlert } from "../context/AlertContext";

export default function TextForm() {
  const { showAlert } = useAlert();
  const UpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase");
  };

  const LowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const SentenceCase = () => {
    const newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
    showAlert("Converted to Sentencecase");
  };

  const Capitalize = () => {
    const capitalize = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(capitalize);
    showAlert("Converted to Capitalize");
  };

  const Clear = () => {
    setText("");
    showAlert("Cleared");
  };

  const reverse = () => {
    setText(text.split(" ").reverse().join(" "));
    showAlert("Converted to Reverse");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      showAlert("Text copied to clipboard!");
    } catch (err) {
      showAlert("copied");
    }
  };

  const alternateCase = () => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      result += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    setText(result);
    showAlert("Converted to alternateCase");
  };

  const [text, setText] = useState("");
  return (
    <div className="mx-auto p-10 dark:bg-[#060815] bg-white ">
      <h2 className="text-xl font-bold mb-2 text-center dark:text-white text-black">
        👇 ENTER YOUR TEXT BELOW TO ANALYZE
      </h2>
      <textarea
        rows="10"
        value={text}
        onChange={handleOnChange}
        className="w-full p-3 border border-grey-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 value dark:bg-[#0e101c] dark:focus:ring-offset-blue-300 dark:text-white"
        placeholder="Type something... "
      />

      <div className="flex gap-1.5 flex-row w-full flex-wrap">
        <CustomBtn
          btnText="UPPERCASE"
          btnColor="bg-yellow-500 dark:bg-yellow-900 "
          OnClick={UpperCase}
        />

        <CustomBtn
          btnText="LOWERCASE"
          btnColor="bg-blue-500 dark:bg-blue-800"
          OnClick={LowerCase}
        />

        <CustomBtn
          btnText="SENTENCE CASE"
          btnColor="bg-red-500 dark:bg-red-800"
          OnClick={SentenceCase}
        />

        <CustomBtn
          btnText="CAPITALIZE"
          btnColor="bg-green-500 dark:bg-green-800"
          OnClick={Capitalize}
        />

        <CustomBtn
          btnText="REVERSE"
          btnColor="bg-orange-500 dark:bg-orange-800"
          OnClick={reverse}
        />

        <CustomBtn
          btnText="ALTERNATE CASE"
          btnColor="bg-gray-500 "
          OnClick={alternateCase}
        />

        <CustomBtn btnText="CLEAR" btnColor="bg-pink-500" OnClick={Clear} />

        <CustomBtn btnText="COPY" btnColor="bg-purple-500" OnClick={copy} />
      </div>
      <div className="w-full bg-gray-100 dark:bg-[#0e101c] p-3 rounded-2xl mt-2  dark:text-white">
        <h2 className="font-bold ">Your Text summary</h2>
        <div className="border border-black"></div>
        <p>
          Word = {text == "" ? 0 : text.split(" ").length} characters ={" "}
          {text.length} & minute read = {0.008 * text.split(" ").length}
        </p>
      </div>
    </div>
  );
}
