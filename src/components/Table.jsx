/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Table.gltf 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useConfigurator } from './contexts/Configurator';

import * as Three from 'three';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

const ANIM_SPEED = 20;

export function Table(props) {
  const { nodes, materials } = useGLTF('./models/Table.gltf');

  const {legs, legsColor, tableWidth } = useConfigurator();

  const plate = useRef();
  const leftLegs = useRef();
  const rightLegs = useRef();

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
}, [legsColor]);


const tableWidthScale = tableWidth / 100;

useFrame((_state, delta) => {
  const targetScale = new Three.Vector3(tableWidthScale, 1, 1);

  plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);

  const targetLeftPosition = new Vector3(-1.5 * tableWidthScale, 0, 0);
  leftLegs.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);

  const targetRightPosition = new Vector3(1.5 * tableWidthScale, 0, 0);
  rightLegs.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);
})


  return (
    <group {...props} dispose={null}>

      <mesh geometry={nodes.Plate.geometry} material={materials.Plate} castShadow scale={[tableWidthScale, 1, 1]} ref={plate} />

      {legs === 0 && (
        <>
         <mesh geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5 , 0, 0]}  castShadow ref={leftLegs} />
         <mesh geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5 , 0, 0]} castShadow  ref={rightLegs}/>
         </>
      )}
     {legs === 1 && (
      <>
       <mesh geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5 , 0, 0]} castShadow ref={leftLegs}/>
      <mesh geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5 , 0, 0]} castShadow ref={rightLegs} />
      </>
      
     )}
     {legs === 2 && (
      <>
       <mesh geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5 , 0, 0]} castShadow ref={leftLegs}/>
      <mesh geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5 , 0, 0]} castShadow ref={rightLegs}/>
     
      </>
      
     )}
     
    </group>
  )
}

useGLTF.preload('./models/Table.gltff')