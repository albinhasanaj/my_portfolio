import RenderModels from "@/components/Models/RenderModels"
import Rocket from "@/components/Models/Rocket"

import { FONT_SIZES } from "@/constants"

const HomePage = () => {
    return (
        <main className="flex flex-col items-center gap-2 overflow-hidden">
            <div className="flex flex-col items-center mt-20">
                <h1 className={`${FONT_SIZES.heading1} font-bold text-[#018EBB] text-center text-nowrap`}>Fullstack Developer</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px]" />
            </div>
            <div className="flex flex-col items-center">
                <p className={`${FONT_SIZES.paragraph} text-center`}>Welcome to my portfolio! My name is Albin Hasanaj, and I code😜</p>
                <span className={`${FONT_SIZES.span} opacity-50`}>Psst... look out for stars that might twinkle</span>
            </div>
            <RenderModels width="250px" height="250px">
                <Rocket animation="idle" scale={4} />
            </RenderModels>
            <div className="w-full h-[50px] bg-[#018EBB] absolute bottom-0 blur-[200px]" />
        </main >
    )
}

export default HomePage