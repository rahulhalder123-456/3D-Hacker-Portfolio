"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { Vector3, Color, BufferAttribute, Points, Group } from "three";

// Particle system
function Particles({ count = 2000 }) {
  const mesh = useRef<Points>(null);
  const { viewport } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Position vertices in a 3D grid
  const positionsRef = useRef(new Float32Array(count * 3));
  const colorsRef = useRef(new Float32Array(count * 3));
  const sizesRef = useRef(new Float32Array(count));

  useEffect(() => {
    const color = new Color();
    const positions = positionsRef.current;
    const colors = colorsRef.current;
    const sizes = sizesRef.current;

    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5; // Push back in Z

      // Color
      const rand = Math.random();
      if (rand > 0.97) {
        // Bright green particles (rare)
        color.setRGB(0, 1, 0.4);
      } else if (rand > 0.93) {
        // Teal particles (uncommon)
        color.setRGB(0, 0.8, 0.8);
      } else {
        // Dark green/blue for most particles
        color.setRGB(0, 0.3 + Math.random() * 0.2, 0.2 + Math.random() * 0.3);
      }

      color.toArray(colors, i * 3);

      // Size variation
      sizes[i] = Math.random() * 1.5;
    }

    if (mesh.current) {
      mesh.current.geometry.setAttribute(
        'position',
        new BufferAttribute(positions, 3)
      );
      mesh.current.geometry.setAttribute(
        'color',
        new BufferAttribute(colors, 3)
      );
      mesh.current.geometry.setAttribute(
        'size',
        new BufferAttribute(sizes, 1)
      );
    }
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    // Slow rotation of the entire particle system
    mesh.current.rotation.y += delta * 0.05;
    mesh.current.rotation.x += delta * 0.01;

    // Mouse interaction - particles move slightly towards mouse position
    const mousePosition = new Vector3(
      mouse.x * 2,
      mouse.y * 2,
      0
    );

    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      if (Math.random() > 0.99) {
        const posX = positions[i];
        const posY = positions[i + 1];
        const posZ = positions[i + 2];

        // Subtle movement towards mouse
        positions[i] += (mousePosition.x - posX) * 0.001;
        positions[i + 1] += (mousePosition.y - posY) * 0.001;

        // Random z movement for depth effect
        positions[i + 2] += (Math.random() - 0.5) * 0.02;

        // Boundary check - reset if too far
        if (Math.abs(posX) > 10 || Math.abs(posY) > 10 || Math.abs(posZ) > 10) {
          positions[i] = (Math.random() - 0.5) * 20;
          positions[i + 1] = (Math.random() - 0.5) * 20;
          positions[i + 2] = (Math.random() - 0.5) * 20 - 5;
        }
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positionsRef.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colorsRef.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizesRef.current}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Grid component for the ground
function Grid() {
  const gridRef = useRef<Group>(null);

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.rotation.x = -Math.PI / 2; // Keep grid flat
      gridRef.current.position.y = -3; // Position below the camera
    }
  });

  return (
    <group ref={gridRef}>
      <gridHelper
        args={[40, 40, new Color(0x004d00), new Color(0x004d00)]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: false }}
      >
        <color attach="background" args={["#050505"]} />
        <Particles />
        <Grid />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={0.5}
          />
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
