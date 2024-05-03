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
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-all focus:outline-none focus:ring-0 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-500 hover:scale-95 hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)]">
            Check out my skills
        </button>
    );
};

export default MagicButton;
