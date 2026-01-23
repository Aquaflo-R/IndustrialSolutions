import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedHeading = ({
  text,
  className = "",
  fromColor = "#b3b3b3",
  toColor = "#235347",
}) => {
    const headingRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: headingRef,
        offset: ["start 80%", "start 30%"],
    });

    const lines = text.split("|").map(line => line.trim());

    return (
        <h1
            ref={headingRef}
            className={`font-bold leading-snug break-words overflow-hidden ${className}`}
        >
            {lines.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                {line.split("").map((char, charIndex) => {
                    const globalIndex =
                    lines.slice(0, lineIndex).join("").length + charIndex;

                    const totalChars = lines.join("").length;

                    const color = useTransform(
                    scrollYProgress,
                    [globalIndex / totalChars, (globalIndex + 1) / totalChars],
                    [fromColor, toColor]
                    );

                    return (
                    <motion.span key={charIndex} style={{ color }}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                    );
                })}
                </span>
            ))}
        </h1>
    );
};

export default AnimatedHeading;