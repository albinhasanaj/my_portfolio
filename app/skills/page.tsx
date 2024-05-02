/* eslint-disable react/no-unescaped-entities */
import SkillsShapeCanvas from '@/components/Models/SkillsShape'
import { SKILLS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


const SkillsPage = () => {
    return (
        <main className="overflow-auto flex flex-col items-center gap-2 w-full">
            <div className="flex flex-col items-center mt-20">
                <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">Plenty of Skills</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px]" />
            </div>
            <div className="flex flex-col items-center">
                <p className="paragraph text-center">Why don't you give my skills a spin?</p>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-16 max-w-[1440px] mt-4">
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
            <div className="flex flex-col items-center mb-20">
                <div className="flex flex-col items-center bg-[#E5E4E2] p-4 rounded-lg shadow-lg mt-4">
                    <div className="md:flex-row flex flex-col items-center gap-4">
                        <Image
                            src="/images/pythoncert.png"
                            width={200}
                            height={200}
                            alt="Python Certification"
                            className="w-[128px] h-[128px] md:w-[200px] md:h-[200px]"
                        />
                        <div className="flex flex-col gap-2 text-black">
                            <h6 className="text-[20px] font-semibold text-[#02A0C7]">Python Certification</h6>
                            <p className="text-[14px]">Issued by: Certiport</p>
                            <p className="text-[14px]">Issued on: 2024</p>
                            <p className="text-[14px]">Credential ID: <Link
                                target="_blank"
                                className="text-[#02A0C7] underline"
                                href="https://www.credly.com/badges/461a2b59-5cd2-4c79-a5cb-d2a341f0a576"
                            >90079336</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SkillsPage