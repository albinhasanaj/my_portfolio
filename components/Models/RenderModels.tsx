"use client";
import { Fragment, useEffect, useState } from 'react';
import { Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { MoonLoader } from "react-spinners";

const RenderModels = ({ children, width, height }: { children: ReactNode, width: string, height: string }) => {
    // State to keep track of whether WebGL is supported
    const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean>(false);

    useEffect(() => {
        const checkWebGLSupport = () => {
            // Try to get a WebGL context
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl && gl instanceof WebGLRenderingContext) {
                setIsWebGLAvailable(true);
            } else {
                setIsWebGLAvailable(false);
            }
        };

        checkWebGLSupport();
    }, []);

    // Only render the Canvas and models if WebGL is supported
    return (
        <Fragment>
            {isWebGLAvailable ? (
                <Canvas style={{ height: height, width: width }}>
                    <Suspense fallback={<Html><MoonLoader color='white' /></Html>}>
                        {children}
                    </Suspense>
                    <Environment preset="city" />
                </Canvas>
            ) : (
                <div style={{ height: height, width: width, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    WebGL is not supported on your device.
                </div>
            )}
        </Fragment>
    );
}

export default RenderModels;
