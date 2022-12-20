import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                hidden: {
                    opacity: 0,
                    y: "5vh",
                    transition: { ease: [0.2, 0.2, -0.05, 0.95] },
                },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInWhenVisible;
