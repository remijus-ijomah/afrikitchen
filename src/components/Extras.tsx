import React, { useState, useEffect } from "react";
import { extras, offers } from "../data";

const Extras = () => {
  const [currentText, setcurrentText] = useState("");
  const [currentIndex, setCurrentindex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const i = loopNum % offers.length;
      const fullText = offers[i];

      setcurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1),
      );

      if (!isDeleting && currentText === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typingTimeout = setTimeout(() => setTypingSpeed(50), 500);
      } else {
        typingTimeout = setTimeout(handleTyping, isDeleting ? 60 : 50);
      }
    };
    handleTyping();

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopNum]);
  //console.log(extras)
  return (
    <>
      <div className="max-w-[1366px] mx-auto pt-20">
        <h2 className="text-orange-600 font-bold text-3xl text-center mb-5">
          Extra Spiced Meats For Your Craving
        </h2>
        <div className="w-full flex flex-row justify-center">
          <h1 className="text-orange font-bold px-4 sm:px-0">
            We Also Offer :
          </h1>
          <span className="text-[red] font-semibold text-center w-[200px] px-auto">
            {currentText}
          </span>
        </div>

        {/**Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 py-8">
          {extras.map((extra, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-lg p-4 flex justify-between items-center"
            >
              <h2 className="font-bold sm:text-xl">{extra.name}</h2>
              <img
                src={extra.image}
                alt={extra.name}
                className="w-20  h-[100px] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Extras;
