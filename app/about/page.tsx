/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image"
import RenderModels from "@/components/Models/RenderModels";
import Rocket from "@/components/Models/Rocket";
import MagicButton from "@/components/MagicButton";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";

const AboutPage = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <Parallax pages={5}
            className="z-[-1]"
        >
            <ParallaxLayer offset={0} speed={1}>
                <main className="flex flex-col">
                    <div className="flex flex-col justify-around items-center h-[calc(100vh-120px)]">
                        <div>
                            <div className="flex flex-col items-center mt-32 md:mt-40">
                                <h1 className="text-[28px] sm:text-[40px] md:text-[64px] lg:text-[96px] font-bold text-[#018EBB] text-center text-nowrap">Who is Albin Hasanaj?</h1>
                                <div className="w-full md:w-3/4 bg-white h-[1px]" />
                            </div>
                            <div className="flex flex-col items-center mb-4">
                                <p className="text-[14px] w-2/3 md:text-[18px] lg:text-[24px] text-center">Here I am, a picture of me.</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center relative">
                            <Image
                                src="/images/me.png"
                                width={800}
                                height={800}
                                alt="Albin Hasanaj"
                                className="h-auto w-[200px] lg:w-[400px] image-border"
                            />
                            <div className="beam" />
                        </div>

                    </div>
                    <ParallaxLayer offset={1} speed={1}>
                        <div className="flex flex-col items-center justify-center h-screen">
                            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-[#018EBB] text-center px-4 py-10">Who Am I?</h1>
                            <RenderModels width="100%" height="50%">
                                <Rocket animation="fly" scale={2} />
                            </RenderModels>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={1}>
                        <div className="flex flex-col items-center justify-center h-screen px-4 py-10">
                            <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-2xl text-gradient">
                                In <span className="highlight">2006</span>, I came into the world, and as of now, I'm <span className="highlight">18 years old</span>. Growing up, I was into all sorts of things. I played different sports and tried out many hobbies, but none really stuck with me—except <span className="highlight">aviation</span>. There's just something cool about flying, right? For a long period of time, aviation was the <span className="highlight">only hobby I enjoyed</span>, that was until I saw the movie <span className="highlight">“Iron Man”</span> in the late 2020s. I never imagined a movie could change my life, but that one did.
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={1}>
                        <div className="flex flex-col items-center justify-center h-screen px-4 py-10">
                            <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-2xl text-gradient">
                                Inspired by <span className="highlight">Iron Man</span>, at 14, I was captivated by the idea of becoming a technologist. My initial foray into technology was through <span className="highlight">coding</span>, starting ambitiously with <span className="highlight">C++</span>. I independently learned various programming concepts, including data types, pointers, and classes. Recognizing the need for a foundational language, I transitioned to <span className="highlight">Python</span>, where I explored deep learning, mastering libraries like <span className="highlight">Keras, Pandas, and NumPy</span>, and delving into concepts such as <span className="highlight">CNNs, NLP, and sigmoid functions</span>.
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={1}>
                        <div className="flex flex-col items-center justify-center h-screen px-4 py-10">
                            <p className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-2xl text-gradient">
                                As of <span className="highlight">2024</span>, my journey in coding has been rich and varied. I have developed web applications, crafted games using <span className="highlight">C++</span>, and implemented deep learning projects with <span className="highlight">Python</span>. I also ventured into mobile application development using <span className="highlight">React Native</span> and <span className="highlight">Dart</span>. Recently, I have committed to mastering <span className="highlight">web development</span>, focusing on delivering robust web solutions. This commitment marks a new chapter in my career, one that you are now a part of as you read this.
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={1}>
                        <div className="flex flex-col items-center justify-center">
                            <MagicButton />
                        </div>
                    </ParallaxLayer>
                </main>
            </ParallaxLayer>
        </Parallax>
    )
}

export default AboutPage