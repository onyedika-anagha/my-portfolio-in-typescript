import { useEffect, useState } from "react";

const Typed = () => {
  const [text, setText] = useState("");
  const [nextText, setNextText] = useState(false);

  const fullText = [
    `Hi! My name is Onyedika Johnpaul Anagha...`,
    `Do you wish to take your business online?.`,
    `Do you need a website?.`,
    `Do you need an app?.`,
    `Do you wish for your brand to appear on search engines(Google)?.`,
    `I'm your guy...`,
  ];
  const [index, setIndex] = useState(0);
  const [indexOfTexts, setIndexOfTexts] = useState(0);
  useEffect(() => {
    const arrLength = fullText.length;

    const currentText = fullText[indexOfTexts].toString();
    if (index < currentText.length && !nextText) {
      // console.log("first");
      setTimeout(
        () => {
          setText(text + currentText[index]);
          setIndex(index + 1);
        },
        index === currentText.length - 1 ? 2000 : 40
      );
    } else {
      // console.log("second");
      if (index !== 0) {
        setTimeout(() => {
          const newText = text.slice(0, index);
          setText(newText);
          setIndex(index - 1);
        }, 40);
        setNextText(true);
      } else {
        // console.log("switch");
        setText("");
        setNextText(false);
        if (indexOfTexts === arrLength - 1) {
          setIndexOfTexts(0);
        } else {
          setIndexOfTexts(indexOfTexts + 1);
        }
      }
    }
  }, [index, nextText]);
  return text;
};

export default Typed;