import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
    delay?: number;
    gradient?: boolean;
}

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

export function GlitchText({ text, className = "", delay = 0, gradient = true }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState('');
    const [isHovering, setIsHovering] = useState(false);
    const controls = useAnimation();

    const scrambleText = async () => {
        let iterations = 0;
        const maxIterations = text.length;

        const interval = setInterval(() => {
            setDisplayText(prev => {
                return text
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) return text[index];
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('');
            });

            if (iterations >= maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
            }

            iterations += 1 / 3; // Controls speed of decryption
        }, 30);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            scrambleText();
            controls.start({ opacity: 1, y: 0 });
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    const handleHover = () => {
        if (!isHovering) {
            setIsHovering(true);
            scrambleText();
            setTimeout(() => setIsHovering(false), text.length * 30 * 3);
        }
    };

    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            onHoverStart={handleHover}
            className={`inline-block font-mono cursor-default ${gradient ? 'text-gradient' : ''} ${className}`}
        >
            {displayText || text.replace(/./g, '_')}
        </motion.span>
    );
}
