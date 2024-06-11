'use client';

import { useEffect, useState } from 'react';

export default function TypewriterLoop({
  texts,
  speed,
}: {
  texts: Array<string>;
  speed: number;
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let isMounted = true;
    let mode = 'forward';
    const typeText = (text: string, index: number, charIndex: number) => {
      if (isMounted) {
        if (mode === 'forward') {
          const newDisplayedText = text.substring(0, charIndex + 1);
          setDisplayedText(newDisplayedText);
          setTimeout(() => {
            typeText(text, index, charIndex + 1);
          }, speed);
          if (charIndex == text.length) mode = 'backward';
        } else {
          const newDisplayedText = text.substring(0, charIndex - 1);
          setDisplayedText(newDisplayedText);
          setTimeout(() => {
            typeText(text, index, charIndex - 1);
          }, speed / 2);
          if (charIndex === 0) {
            mode = 'forward';
            const nextIndex = (index + 1) % texts.length;
            setCurrentTextIndex(nextIndex);
            setDisplayedText('');
          }
        }
      }
    };

    typeText(texts[currentTextIndex], currentTextIndex, 0);

    return () => {
      isMounted = false;
    };
  }, [currentTextIndex, speed, texts]);

  return (
    <span className="block h-10 sm:h-12 md:h-16 lg:h-20">{displayedText}</span>
  );
}
