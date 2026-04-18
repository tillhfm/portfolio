"use client";

import {useRef} from "react";
import {AnimatePresence, motion, useInView, type UseInViewOptions, type Variants,} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

/**
 * Props for the {@link BlurFade} animation wrapper.
 * @property duration - Animation duration in seconds. Default: 0.4.
 * @property delay - Extra delay in seconds on top of the 0.04 s base offset. Default: 0.
 * @property yOffset - Vertical translation in pixels for the hidden→visible transition. Default: 6.
 * @property inView - When `false` (default), fires immediately on mount.
 *   Set `true` to defer until the element scrolls into view.
 * @property variant - Custom Framer Motion variants replacing the default effect.
 *   When provided, `yOffset` and `blur` are ignored.
 * @property blur - CSS blur radius in the hidden state. Default: "6px".
 */
interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: MarginType;
    blur?: string;
}

/**
 * Animates children with a combined blur, fade, and vertical slide via Framer Motion.
 * Total delay is `0.04 + delay` s — the 0.04 s base prevents the animation firing
 * synchronously with paint. When `inView` is `true`, animation is held until
 * `useInView` reports the element has entered the viewport (triggers once only).
 */
export default function BlurFade({
                                     children,
                                     className,
                                     variant,
                                     duration = 0.4,
                                     delay = 0,
                                     yOffset = 6,
                                     inView = false,
                                     inViewMargin = "-50px",
                                     blur = "6px",
                                 }: BlurFadeProps) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, {once: true, margin: inViewMargin});
    const isInView = !inView || inViewResult;
    const defaultVariants: Variants = {
        hidden: {y: yOffset, opacity: 0, filter: `blur(${blur})`},
        visible: {y: -yOffset, opacity: 1, filter: `blur(0px)`},
    };
    const combinedVariants = variant || defaultVariants;
    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: "easeOut",
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
