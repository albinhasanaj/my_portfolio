/* eslint-disable react/no-unescaped-entities */
import CertCard from '@/components/CertCard'
import SkillsShapeCanvas from '@/components/Models/SkillsShape'
import { CERTIFICATIONS, SKILLS } from '@/constants'


const SkillsPage = () => {
    return (
        <main className="overflow-auto flex flex-col items-center gap-2 w-full">
            <div className="flex flex-col items-center mt-20">
                <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">Skills & Certificates</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px] mt-4" />
            </div>
            <div className="flex flex-col items-center">
                <p className="paragraph text-center">Why don't you give my skills a spin?</p>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-16 w-[75vw] max-w-[1440px] mt-4">
                {SKILLS.map((skill) => (
                    <div
                        key={skill}
                        className="cursor-grab active:cursor-grabbing"
                    >
                        <SkillsShapeCanvas key={skill} skill={skill.toLowerCase()} />
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center">
                <h2 className="heading2 font-bold text-[#018EBB] text-center text-nowrap mt-10">Certifications</h2>
                <div className="w-full md:w-3/4 bg-white h-[1px]" />
            </div>
            {/* card */}
            <div className="flex flex-wrap justify-center mb-20 gap-8 max-w-[1440px]">
                {CERTIFICATIONS.map((cert) => (
                    <CertCard key={cert.heading} {...cert} />
                ))}
            </div>
        </main>
    )
}

export default SkillsPage