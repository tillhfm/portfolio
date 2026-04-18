"use client"

import {motion} from "framer-motion"

/**
 * Animated waving hand emoji. Plays a single smooth wave shortly after mount
 * with a gentle scale pulse. Rotation pivots at the wrist so the motion reads
 * as a wave rather than a spin. Respects `prefers-reduced-motion` via Framer.
 */
export function WavingHand() {
    return (
        <motion.span
            role="img"
            aria-label="waving hand"
            className="inline-block origin-[70%_80%]"
            initial={{rotate: 0, scale: 1}}
            animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
                scale: [1, 1.15, 1.05, 1.15, 1.05, 1.1, 1],
            }}
            transition={{
                delay: 0.9,
                duration: 1.6,
                ease: "easeInOut",
                times: [0, 0.2, 0.35, 0.55, 0.7, 0.85, 1],
            }}
        >
            👋
        </motion.span>
    )
}
