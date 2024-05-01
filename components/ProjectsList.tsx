"use client";
import Image from 'next/image'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

type ProjectsListProps = {
    title: string;
    description: string;
    logo: string;
    tags: string[];
    colors: string[];
    github: string;
}

const ProjectsList = ({ title, description, logo, tags, colors, github }: ProjectsListProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)


    return (
        <div className="card__background max-w-[1000px] w-2/3 h-auto py-12 flex flex-col rounded-[25px] overflow-hidden">
            <div className="flex flex-col gap-12">

                <div className="flex w-full h-full items-center gap-2 justify-between px-10 lg:px-40">
                    <Image
                        src="/images/expand.png"
                        width={32}
                        height={32}
                        alt="Expand"
                        className={`cursor-pointer ${isExpanded ? 'rotate-180' : ''} transition-transform duration-300 w-[24px] h-auto lg:w-[32px]`}
                        onClick={() => setIsExpanded(prev => !prev)}
                    />
                    <h3 className="text-center lg:text-[24px] font-bold">{title}</h3>
                    <Image
                        src={logo}
                        height={64}
                        width={64}
                        alt={title}
                        className="hidden sm:flex w-[64px] h-auto"
                    />
                </div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-12">
                            <p className="text-center w-2/3 text-[16px] lg:text-[20px]">{description}</p>
                            <div className="flex flex-col gap-4 lg:flex-row w-full items-center justify-between px-20 lg:px-40">
                                <div className="flex gap-2 flex-wrap justify-center">
                                    {tags.map((tag, i) => (
                                        <span key={tag}
                                            style={{ color: colors[i] }}
                                            className="text-[16px] bg-[rgba(255,255,255,0.1)] rounded-[5px]"
                                        >{tag}</span>


                                    ))}
                                </div>
                                <Link
                                    target="_blank"
                                    href={github}
                                >
                                    <Image
                                        src="/images/github.png"
                                        width={64}
                                        height={64}
                                        alt="Github"
                                        className="cursor-pointer w-[48px] h-auto lg:w-[64px]"
                                    />
                                </Link>

                            </div>
                        </motion.div>

                    )}
                </AnimatePresence>


            </div>
        </div>
    )
}

export default ProjectsList