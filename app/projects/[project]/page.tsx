import { MY_PROJECTS, CODE_ALONG_PROJECTS } from "@/constants"
import Image from "next/image"

const Project = ({ params }: { params: { project: string } }) => {
    // Combines both project lists and finds the project matching the provided title.
    const project = [...MY_PROJECTS, ...CODE_ALONG_PROJECTS].find(project => project.title === params.project);

    return (
        <main className="flex justify-center">
            <div className="w-[75%] md:w-[50%] flex flex-col my-20 gap-20">
                {/* Conditional rendering to check if there are images and if the project exists */}
                {project && project.images.length > 0 ? (
                    project.images.map((image, index) => ( // Removed the extra braces around the map
                        <Image
                            key={index}
                            src={`/${image}`}
                            width={1200}
                            height={800}
                            alt={project.title}
                            className="rounded-[5px]"
                        />
                    ))
                ) : (
                    <div>
                        {/* Safe access to project.title using optional chaining */}
                        <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">No images yet :(</h1>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Project;
