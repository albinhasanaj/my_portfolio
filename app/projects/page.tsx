import React from 'react'
import ProjectsList from '@/components/ProjectsList'

import { PROJECTS } from '@/constants'

const Projects = () => {
    return (
        <main className="overflow-auto flex flex-col items-center gap-16 w-full">
            <div className="flex flex-col items-center mt-20">
                <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">My Creations</h1>

                <div className="w-full md:w-3/4 bg-white h-[1px] mt-4" />
            </div>
            <div className="flex flex-col items-center gap-16 w-full">
                {PROJECTS.map((project, index) => (
                    <>
                        <ProjectsList key={project.title} {...project} />
                        {index === PROJECTS.length - 1 && (
                            <div className="mt-10" />
                        )}
                    </>

                ))}
            </div>
        </main>
    )
}

export default Projects