"use client";

import { useEffect, useState } from "react";

export default function TypewriterText() {
  const phrases = ["DDCET Classes", "Degree Engineering", "Diploma Engineering"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = phrases[currentPhrase];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 150); // 150ms per character
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // 2 second pause
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // 50ms per character
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        // Pause before typing next phrase
        timeout = setTimeout(() => {
          // Start typing automatically
        }, 500); // 0.5 second pause
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <span className="text-orange-500 font-bold">
      {displayText}
      <span className="cursor-blink">|</span>
    </span>
  );
}
