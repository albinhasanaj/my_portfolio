"use client";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";

const MagicButton = () => {
    const router = useRouter();
    const { startTransition, endTransition } = useStore();

    const handleNavigation = () => {
        startTransition();
        setTimeout(() => {
            router.push("/skills");
        }, 500);
        setTimeout(() => {
            endTransition();
        }, 1000);
    }

    return (
        <button

            onClick={handleNavigation}
            className="inline-flex px-20 py-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-[20px] lg:text-[36px]">
            Check out my skills
        </button>
    );
};

export default MagicButton;
