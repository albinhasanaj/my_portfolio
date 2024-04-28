import RenderModels from "@/components/Models/RenderModels"
import Rocket from "@/components/Models/Rocket"

const HomePage = () => {
    return (
        <main className="flex flex-col items-center gap-2 h-full overflow-hidden">
            <div className="flex flex-col items-center mt-32 md:mt-40">
                <h1 className="text-[28px] md:text-[64px] lg:text-[96px] font-bold text-[#018EBB] text-center">Fullstack Developer</h1>
                <div className="w-full md:w-3/4 bg-white h-[1px]" />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[14px] w-2/3 md:text-[18px] lg:text-[24px] text-center">Welcome to my portfolio! My name is Albin Hasanaj, and I code😜</p>
                <span className="opacity-50 text-[14px]">Psst... look out for stars that might twinkle</span>
            </div>
            <RenderModels width="500px" height="500px">
                <Rocket animation="idle" scale={3} />
            </RenderModels>
            <div className="w-full h-[50px] bg-[#018EBB] absolute bottom-0 blur-[200px]" />
        </main>
    )
}

export default HomePage