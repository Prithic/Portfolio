import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function FluidBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("Stars loaded", container);
    };

    if (!init) {
        return null; // Don't render until particles engine is ready
    }

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-screen"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: ["#ffffff", "#e0f2fe", "#bae6fd"], // Whites and very light blues
                    },
                    links: {
                        enable: false, // Turn off fluid links
                    },
                    move: {
                        direction: "none", // They move outward by default with outModes: "out"
                        enable: true,
                        outModes: {
                            default: "out", // Stars fly off the screen
                        },
                        random: true,
                        speed: { min: 0.5, max: 3 }, // Varying speeds for depth
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 150, // More stars
                    },
                    opacity: {
                        value: { min: 0.1, max: 1 },
                        animation: {
                            enable: true,
                            speed: 1,
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 2.5 }, // Varying sizes for depth
                        animation: {
                            enable: true,
                            speed: 2,
                            sync: false
                        }
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
