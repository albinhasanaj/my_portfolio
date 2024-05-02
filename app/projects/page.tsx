import React from 'react'
import ProjectsList from '@/components/ProjectsList'

import { PROJECTS } from '@/constants'

const Projects = () => {
    return (
        <main className="overflow-auto flex flex-col items-center gap-16 w-full">
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-[28px] sm:text-[40px] md:text-[64px] lg:text-[96px] font-bold text-[#018EBB] text-center text-nowrap">My Creations</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px]" />
            </div>
            <div className="flex flex-col items-center gap-16 w-full">
                {PROJECTS.map(project => (
                    <ProjectsList key={project.title} {...project} />
                ))}
            </div>
        </main>
    )
}

export default Projects