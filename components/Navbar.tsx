"use client";
import Image from "next/image"
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";

import { NAV_LINKS } from "@/constants";
import { FadeIn } from "@/motion";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const { startTransition, endTransition } = useStore();
    const router = useRouter();

    const handleNavigation = (href: string, e: FormEvent) => {
        e.preventDefault();
        setToggleMenu(false);
        startTransition();
        setTimeout(() => {
            router.push(href);
        }, 500);
        setTimeout(() => {
            endTransition();
        }, 1000);
    }

    return (
        <nav className="w-full navbar__background">
            {/* desktop */}
            <div className="hidden lg:flex py-8 justify-around items-center ">
                <h2
                    className="text-[20px] font-bold cursor-pointer w-[250px]"
                    onClick={(e) => handleNavigation("/", e)}
                >Albin Hasanaj</h2>
                <ul className="flex gap-12 text-[20px]">
                    {NAV_LINKS.map((link) => (
                        <li
                            key={link.title}
                            className="text-[20px] nav_links relative cursor-pointer"
                            onClick={(e) => handleNavigation(link.href, e)}
                        >{link.title}</li>

                    ))}
                </ul>
            </div>
            {/* mobile */}
            <div className="flex lg:hidden py-8 px-4 md:px-20 justify-between items-center relative">
                <h2
                    className="text-[20px] font-bold cursor-pointer"
                    onClick={(e) => handleNavigation("/", e)}
                >Albin Hasanaj</h2>
                <Image
                    src={toggleMenu ? "/icons/cross.svg" : "/icons/hamburger.svg"}
                    alt="Hamburger Icon"
                    width={48}
                    height={48}
                    aria-label="Toggle Menu"
                    aria-controls="mobile-menu"
                    onClick={() => setToggleMenu(prev => !prev)}
                    className="cursor-pointer"
                />
                <AnimatePresence>
                    {toggleMenu && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={FadeIn}
                            className="h-full w-full absolute menu__background left-0 top-28">
                            <ul className="flex h-full justify-center items-center gap-6">
                                {NAV_LINKS.map((link) => (
                                    <li
                                        key={link.title}
                                        className="text-[20px] nav_links relative cursor-pointer"
                                        onClick={(e) => handleNavigation(link.href, e)}
                                    >{link.title}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>

        </nav >
    )
}

export default Navbar