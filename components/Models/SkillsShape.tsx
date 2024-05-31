"use client";
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, useTexture, Html } from '@react-three/drei';
import { MoonLoader } from 'react-spinners';
import * as THREE from 'three';

const SkillIcon = ({ skill }: { skill: string }) => {
    const decal = useTexture(`/icons/skills/${skill}.svg`);
    const modelRef = useRef<THREE.Group>(null);

    // Rotate back and forth using a sin function
    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.x = Math.sin(state.clock.getElapsedTime());
        }
    });

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2} ref={modelRef}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <mesh castShadow receiveShadow scale={2.5}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#696969" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} />
            </mesh>
        </Float>
    );
};

const SkillsShapeCanvas = ({ skill }: { skill: string }) => {
    const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean>(false);

    useEffect(() => {
        const checkWebGLSupport = () => {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            setIsWebGLAvailable(!!gl);
        };

        checkWebGLSupport();
    }, []);

    return (
        <>
            {isWebGLAvailable ? (
                <Canvas frameloop='always' gl={{ preserveDrawingBuffer: true }} style={{ width: '150px', height: 'auto' }}>
                    <Suspense fallback={<Html><MoonLoader color='white' /></Html>}>
                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                        <SkillIcon skill={skill} />
                    </Suspense>
                </Canvas>
            ) : (
                <div style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    WebGL is not supported on your device.
                </div>
            )}
        </>
    );
};

export default SkillsShapeCanvas;
