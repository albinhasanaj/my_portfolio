"use client";
import { useEffect, useState } from "react";

// Add a boolean property to indicate if the star should twinkle
const createStars = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
    shouldTwinkle: Math.random() < 0.2, // 20% chance to twinkle
});

const StarsBackGround = () => {
    const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; animationDuration: string; shouldTwinkle: boolean; }>>([]);

    useEffect(() => {
        const stars = Array.from({ length: 50 }, createStars);
        setStars(stars);
    }, []);

    return (
        <div className={`fixed inset-0 z-[-1]`}>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className={`absolute w-1 h-1 rounded-full ${star.shouldTwinkle ? "twinkle" : "bg-slate-800"}`}
                    style={{
                        top: star.top,
                        left: star.left,
                        animation: star.shouldTwinkle
                            ? `twinkle ${star.animationDuration} alternate infinite`
                            : `move ${star.animationDuration} alternate infinite`
                    }}
                />
            ))}
        </div>
    )
}

export default StarsBackGround;