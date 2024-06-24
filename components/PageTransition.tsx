"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ClimbingBoxLoader } from "react-spinners";
import useStore from "@/store/useStore";
import { Fragment } from "react";
const PageTransition = () => {
    const isChangingPage = useStore((state) => state.isChangingPage);
    return (
        <AnimatePresence>
            {isChangingPage && (
                <Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#09090B] z-[11] flex items-center justify-center"
                    >

                        <ClimbingBoxLoader color="#018EBB" size={25} speedMultiplier={1.5} />

                    </motion.div>
                </Fragment>

            )}
        </AnimatePresence>
    )
}

export default PageTransition