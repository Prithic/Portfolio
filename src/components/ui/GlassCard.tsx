import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    // 3D Tilt config
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (hoverEffect) {
            const xPct = mouseX / rect.width - 0.5;
            const yPct = mouseY / rect.height - 0.5;
            x.set(xPct);
            y.set(yPct);
        }

        if (!isFocused) {
            setPosition({ x: mouseX, y: mouseY });
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        if (hoverEffect) {
            x.set(0);
            y.set(0);
        }
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden glass-panel rounded-2xl p-6 transition-colors duration-500",
                hoverEffect && "hover:border-white/20",
                className
            )}
            style={{
                rotateX: hoverEffect ? rotateX : 0,
                rotateY: hoverEffect ? rotateY : 0,
                transformPerspective: 1000,
            }}
            {...props}
        >
            {/* Spotlight Overlay */}
            {hoverEffect && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                    }}
                />
            )}

            <div
                className="relative z-10 w-full h-full"
                style={{ transform: hoverEffect ? "translateZ(30px)" : "none" }}
            >
                {children}
            </div>
        </motion.div>
    );
}
