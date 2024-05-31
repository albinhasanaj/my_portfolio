"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Rocket({ animation, scale }: { animation: "idle", scale: number }) {
    const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
    const modelRef = useRef<THREE.Group>(null);

    // get pixels width
    const width = window.innerWidth;
    const calculatedScale = width < 768 ? scale * 0.85 : scale;

    useFrame((state) => {
        if (modelRef.current && animation === "idle") {
            (modelRef.current as THREE.Object3D).position.y = Math.sin(state.clock.getElapsedTime()) * 0.25;
            (modelRef.current as THREE.Object3D).rotation.y = Math.cos(state.clock.getElapsedTime()) * 0.01;
        }
    })

    return (
        <group
            dispose={null}
            ref={modelRef}
            scale={[calculatedScale, calculatedScale, calculatedScale]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes['Rocket_Ship_01_Material_#28_0'] as THREE.Mesh).geometry}
                material={materials.PaletteMaterial001}
                position={[0.421, 0.421, -0.033]}
                rotation={[-Math.PI / 2, Math.PI / 4, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes['Rocket_Ship_01_Material_#30_0'] as THREE.Mesh).geometry}
                material={materials.PaletteMaterial002}
                position={[0.421, 0.421, -0.033]}
                rotation={[-Math.PI / 2, Math.PI / 4, 0]}
                scale={0.01}
            />
        </group>
    )
}



useGLTF.preload('/models/scene-transformed.glb')

