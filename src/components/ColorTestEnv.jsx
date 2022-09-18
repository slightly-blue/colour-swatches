import React from "react";
import { Canvas } from '@react-three/fiber'

import * as THREE from 'three'
import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, ContactShadows, Shadow, Plane, Sphere, Cube } from '@react-three/drei'


const ColorTestEnv = () => {


  const baseColor = '#90c4ce';
  //TODO: 
  // - snap back camera
  // - make a nice env 
  // - clicking a 3d item with a color selected should paint it   
  // - selected color should appear in teh bottom left corner of this component

  // - how textures / materials work 

  return (
    <div style={{ width: '50%', height: '100vh', backgroundColor: baseColor }}>
      <Canvas shadows >

        <AccumulativeShadows temporal frames={100} color={baseColor} colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={2} scale={12} position={[0, -0.5, 0]}>
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>

        {/* sphere */}
        <mesh castShadow position={[-2, -0.245, 1]}>
          <sphereGeometry args={[0.25, 64, 64]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        {/* stor kub */}
        <mesh castShadow position={[0, 0.25, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="indianred" />
        </mesh>

        {/* liten kub */}
        <mesh castShadow position={[2, -0.24, 1]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="blue" />
        </mesh>


        {/* avlång */}
        <mesh castShadow position={[0.5, 0, 1]} rotation={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 0.5]} />
          <meshStandardMaterial color="indianred" />
        </mesh>

        <OrbitControls autoRotate={false} enableZoom={true} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default ColorTestEnv 