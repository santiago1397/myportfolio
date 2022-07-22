import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
    text: string;
    delay?: number;
    replay?: boolean;
    duration?: number;
}

export const LetterAnimation: React.FC<Props> = ({
    text,
    delay = 0,
    duration = 0.05,
    replay,
    ...props
}: Props) => {
    const letters = Array.from(text);

    const container: Variants = {
        hidden: {
            opacity: 0
        },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay }
        })
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 35,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 35,
                stiffness: 200
            }
        }
    };

    return (


        <motion.h1
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child} >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>

    );
};
export default LetterAnimation;

export const LetterAnimation2: React.FC<Props> = ({
    text,
    delay = 0,
    duration = 0.05,
    replay,
    ...props
}: Props) => {
    const letters = Array.from(text);

    const container: Variants = {
        hidden: {
            opacity: 0
        },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay }
        })
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 35,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 35,
                stiffness: 200
            }
        }
    };

    return (


        <motion.h3
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            

            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child} >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h3>

    );
};