"use client";
import { Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { MoonLoader } from "react-spinners";

const RenderModels = ({ children, width, height }: { children: ReactNode, width: string, height: string }) => {
    return (
        <>
            <Canvas style={{ height: height, width: width }}>
                <Suspense fallback={<Html><MoonLoader color='white' /></Html>}>
                    {children}
                </Suspense>
                <Environment preset="city" />
            </Canvas>
        </>
    );
}

export default RenderModels;
