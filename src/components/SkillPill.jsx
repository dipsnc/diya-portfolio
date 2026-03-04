import { motion } from "framer-motion";

export default function SkillPill({text}) {
    return (
        <motion.span
            whileHover={{ scale: 1.1, rotate: 2}}
            whileTap={{ scale: 0.9 }}
            className="bg-accent/20 text-text-primary text-xs lg:text-sm px-2 py-1 rounded-full border border-accent whitespace-nowrap"
        >
            {text}
        </motion.span>
    )
}