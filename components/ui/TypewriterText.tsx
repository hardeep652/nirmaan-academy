"use client";

import { useEffect, useState } from "react";

export default function TypewriterText() {
  const phrases = ["DDCET Classes", "Degree Engineering", "Diploma Engineering"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    const currentWord = phrases[currentPhrase];
    let timeout: NodeJS.Timeout;

    if (isPause) {
      // Pause before starting next phrase
      timeout = setTimeout(() => {
        setIsPause(false);
        setIsDeleting(false);
      }, 500);
    } else if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 80); // 80ms per character
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // 2 second pause after typing
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 40); // 40ms per character
      } else {
        // Move to next phrase with pause
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsPause(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase, isPause]);

  return (
    <span className="text-orange-500 font-bold inline-flex items-center">
      {displayText}
      <span className="cursor-blink ml-1">|</span>
    </span>
  );
}
