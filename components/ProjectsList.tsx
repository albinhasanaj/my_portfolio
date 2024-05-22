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
        <div className="card__background max-w-[950px] w-3/4 h-auto py-8 lg:py-12 flex flex-col rounded-[25px] overflow-hidden">
            <div className="flex flex-col gap-12">

                <div className="flex w-full h-full items-center gap-2 justify-between px-10 lg:px-20">
                    <Image
                        src="/images/expand.png"
                        width={32}
                        height={32}
                        alt="Expand"
                        className={`cursor-pointer ${isExpanded ? 'rotate-180' : ''} transition-transform duration-300 w-[24px] h-auto lg:w-[32px]`}
                        onClick={() => setIsExpanded(prev => !prev)}
                    />
                    <h5 className="heading5 font-bold text-end">{title}</h5>
                    <Image
                        src={logo}
                        height={64}
                        width={64}
                        alt={title}
                        className="hidden sm:flex w-[48px] md:w-[64px] h-auto"
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
                            <p className="text-center paragraph-contained">{description}</p>
                            <div className="flex flex-col gap-4 lg:flex-row w-full items-center justify-between px-10 lg:px-20">
                                <div className="flex flex-col gap-2">

                                    <div className="flex gap-2 flex-wrap justify-center">
                                        {tags.map((tag, i) => (
                                            <span key={tag}
                                                style={{ color: colors[i] }}
                                                className="span bg-[rgba(255,255,255,0.1)] rounded-[5px]"
                                            >{tag}</span>


                                        ))}
                                    </div>
                                    <Link
                                        className="span !text-start hover:underline cursor-pointer"
                                        href={`/projects/${title}`}
                                    >
                                        See project
                                    </Link>
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