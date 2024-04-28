"use client";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "@/store/useStore";
import StarsBackGround from "./StarsBackGround";

const PageTransition = () => {
    const isChangingPage = useStore((state) => state.isChangingPage);
    return (
        <AnimatePresence>
            {isChangingPage && (
                <>
                    <motion.div
                        key="page-transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#09090B] z-[11]"
                    />
                </>

            )}
        </AnimatePresence>
    )
}

export default PageTransition