import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'



useGLTF.preload('/jkt5.glb')

export default function Model({ colors }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/jkt5.glb")

  return (
    <group ref={group} dispose={null}
    
    position={[0, 0, -50]} // Position: [x, y, z]
    // rotation={[Math.PI / 4, Math.PI / 4, 0]} // Rotation: [x, y, z]
    scale={[0.1, 0.1, 0.1]} // Scale: [x, y, z]
    
    >
      {/* <mesh geometry={nodes.snapBody.geometry} material={materials.snapBody}>
        <meshStandardMaterial attach="material" color={colors.snapBody} />
      </mesh> */}
      <mesh geometry={nodes.zipperBody.geometry} material={materials.zipperBody}>
        <meshStandardMaterial attach="material" color={colors.zipperBody} />
      </mesh>
      <mesh geometry={nodes.snaps.geometry} material={materials.snaps}>
        <meshStandardMaterial attach="material" color={colors.snaps} />
      </mesh>
      <mesh geometry={nodes.collar1.geometry} material={materials.collar1}>
        <meshStandardMaterial attach="material" color={colors.collar1} />
      </mesh>
      {/* <mesh geometry={nodes.collar2.geometry} material={materials.collar2}>
        <meshStandardMaterial attach="material" color={colors.collar2} />
      </mesh> */}
      <mesh geometry={nodes.bottom.geometry} material={materials.bottom}>
        <meshStandardMaterial attach="material" color={colors.bottom} />
      </mesh>
      <mesh geometry={nodes.rightHand.geometry} material={materials.rightHand}>
        <meshStandardMaterial attach="material" color={colors.hand} />
      </mesh>
      <mesh geometry={nodes.rightShol.geometry} material={materials.rightShol}>
        <meshStandardMaterial attach="material" color={colors.shol} />
      </mesh>
      <mesh geometry={nodes.rightEnd.geometry} material={materials.rightEnd}>
        <meshStandardMaterial attach="material" color={colors.end} />
      </mesh>
      <mesh geometry={nodes.leftHand.geometry} material={materials.leftHand}>
        <meshStandardMaterial attach="material" color={colors.hand} />
      </mesh>
      <mesh geometry={nodes.leftShol.geometry} material={materials.leftShol}>
        <meshStandardMaterial attach="material" color={colors.shol} />
      </mesh>
      <mesh geometry={nodes.leftEnd.geometry} material={materials.leftEnd}>
        <meshStandardMaterial attach="material" color={colors.end} />
      </mesh>
    </group>
  )
}

