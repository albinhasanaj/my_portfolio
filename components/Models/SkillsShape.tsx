"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei';
import { MoonLoader } from 'react-spinners';
import { Html } from '@react-three/drei';
import * as THREE from 'three';


const SkillIcon = ({ skill }: { skill: string }) => {
    const decal = useTexture(`/icons/skills/${skill}.svg`);
    const modelRef = useRef<THREE.Group>(null);

    // useframe so it rotates back and fourth with sin function
    useFrame((state) => {
        if (modelRef.current) {
            (modelRef.current as THREE.Object3D).rotation.x = Math.sin(state.clock.getElapsedTime());
        }
    });

    return (
        <Float speed={1.75}
            rotationIntensity={1}
            floatIntensity={2}
            ref={modelRef}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <mesh
                castShadow
                receiveShadow
                scale={2.5}
            >
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#696969"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />

                <Decal
                    position={[0, 0, 1]}
                    map={decal}
                    rotation={[2 * Math.PI, 0, 6.25]}
                />

            </mesh>
        </Float>
    )
};

const SkillsShapeCanvas = ({ skill }: { skill: string }) => {
    return (
        <Canvas
            frameloop='always'
            gl={{ preserveDrawingBuffer: true }}
            style={{ width: '150px', height: 'auto' }}
        >

            <Suspense fallback={<Html><MoonLoader color='white' /></Html>}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    // only rotate x axis
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <SkillIcon skill={skill} />
            </Suspense>

        </Canvas>
    );
};

export default SkillsShapeCanvas;
