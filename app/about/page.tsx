/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image"
import RenderModels from "@/components/Models/RenderModels";
import Rocket from "@/components/Models/Rocket";
import MagicButton from "@/components/MagicButton";


import { ABOUT_ME } from "@/constants";

const AboutPage = () => {

    return (

        <main className="flex flex-col">
            <div className="flex flex-col gap-4 justify-around items-center">
                <div className="flex flex-col items-center mt-20 lg:mt-32">
                    <h1 className="heading1 font-bold text-[#018EBB] text-center text-nowrap">Who Am I?</h1>
                    <div className="w-full md:w-3/4 bg-white h-[1px] mt-4" />
                </div>
                <div className="w-full flex justify-center relative mt-20">
                    <Image
                        src="/images/me.png"
                        width={800}
                        height={800}
                        alt="Albin Hasanaj"
                        className="h-auto w-[200px] lg:w-[325px] image-border"
                    />
                    <div className="beam" />
                </div>

            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <RenderModels width="100%" height="50%">
                    <Rocket animation="fly" scale={2} />
                </RenderModels>
            </div>
            {ABOUT_ME.map((paragraph, index) => (
                <div className="flex flex-col items-center justify-center h-screen px-4 py-10"
                    key={index}>
                    <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-2xl">
                        {paragraph}
                    </p>
                    {index === ABOUT_ME.length - 1 && (
                        <div className="mt-10">
                            <MagicButton />
                        </div>
                    )}
                </div>
            ))}
        </main>
    )
}

export default AboutPage