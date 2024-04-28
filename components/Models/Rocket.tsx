"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Rocket({ animation, scale }: { animation: "idle" | "fly", scale: number }) {
    const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current && animation === "idle") {
            (modelRef.current as THREE.Object3D).position.y = Math.sin(state.clock.getElapsedTime()) * 0.25;
            (modelRef.current as THREE.Object3D).rotation.y = Math.cos(state.clock.getElapsedTime()) * 0.01;
        } else if (animation === "fly") {
            // Define radius and speed
            const radius = 2;
            const speed = 0.5;
            const time = state.clock.getElapsedTime() * speed;

            // Circular motion
            (modelRef.current as THREE.Object3D).position.x = Math.cos(time) * radius;
            (modelRef.current as THREE.Object3D).position.z = Math.sin(time) * radius;

            // Rotating towards the direction of the motion
            (modelRef.current as THREE.Object3D).rotation.z = Math.sin(time) * 0.4;
            (modelRef.current as THREE.Object3D).rotation.y = (-time - Math.PI / 2);
            (modelRef.current as THREE.Object3D).rotation.x = Math.sin(time) * 0.4;
        }
    })

    return (
        <group
            dispose={null}
            ref={modelRef}
            scale={[scale, scale, scale]}
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