import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  className = "",
  parentClassName = "",
  animateOn = "hover", // "view" | "hover"
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const revealedIndices = useRef(new Set());
  const intervalRef = useRef(null);

  useEffect(() => {
    let interval;
    if (animateOn === "view") {
        const scramble = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            revealedIndices.current.clear();
            setIsScrambling(true);
            
            let iteration = 0;
            
            intervalRef.current = setInterval(() => {
                setDisplayText((prev) =>
                    text
                    .split("")
                    .map((char, i) => {
                        if (char === " ") return " ";
                        if (revealedIndices.current.has(i) || iteration >= maxIterations) {
                             revealedIndices.current.add(i)
                             return char;
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
                );
                
                iteration++;
                if (iteration > maxIterations + text.length) { // Ensure completion
                     setIsScrambling(false);
                     clearInterval(intervalRef.current);
                     setDisplayText(text);
                }

            }, speed);
        };
        scramble();
    }
    return () => { if(intervalRef.current) clearInterval(intervalRef.current); }
  }, [text, animateOn, maxIterations, speed]);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    revealedIndices.current.clear();
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
        setDisplayText((prev) =>
            text
            .split("")
            .map((char, i) => {
                if (char === " ") return " ";
                if(Math.random() < 0.1) revealedIndices.current.add(i);

                if (revealedIndices.current.has(i)) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (revealedIndices.current.size === text.length) {
            setIsScrambling(false);
            clearInterval(intervalRef.current);
            setDisplayText(text);
        }
        iteration++;
        
         if (iteration > maxIterations * 2) { // Safety break
             setIsScrambling(false);
             clearInterval(intervalRef.current);
             setDisplayText(text);
        }

    }, speed);
  };
  
  const handleMouseEnter = () => {
      if (animateOn === "hover") scramble();
      setIsHovering(true);
  }
  const handleMouseLeave = () => {
      setIsHovering(false);
  }

  return (
    <span 
        className={`${parentClassName} inline-block whitespace-nowrap`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
