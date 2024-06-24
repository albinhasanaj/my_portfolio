import React, { Fragment } from 'react'
import ProjectsList from '@/components/ProjectsList'

import { MY_PROJECTS, CODE_ALONG_PROJECTS } from '@/constants'

const Projects = () => {
    return (
        <main className="overflow-auto flex flex-col items-center gap-16 w-full">
            <div className="flex flex-col items-center mt-20">
                <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">My Creations</h1>

                <div className="w-full md:w-3/4 bg-white h-[1px] mt-4" />
            </div>

            <div className="flex flex-col items-center gap-16 w-full">
                {MY_PROJECTS.map((project) => (
                    <Fragment
                        key={project.title}
                    >
                        <ProjectsList {...project} />
                    </Fragment>
                ))}
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">Code Alongs</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px] mt-4" />
            </div>
            <div className="flex flex-col items-center gap-16 w-full">
                {CODE_ALONG_PROJECTS.map((project, index) => (
                    <Fragment key={project.title}>
                        <ProjectsList {...project} />
                        {index === CODE_ALONG_PROJECTS.length - 1 && (
                            <div className="mt-10" />
                        )}
                    </Fragment>
                ))}
            </div>
        </main>
    )
}

export default Projects