"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const INK = "#111114";
const ULTRA = "#2929E8";

// Abstract system architecture: base slab, services, towers, gateways.
// Positions are [x, y, z]; sizes are [w, h, d].
const blocks: { p: [number, number, number]; s: [number, number, number] }[] = [
  { p: [0, -1.7, 0], s: [5.4, 0.18, 5.4] },
  { p: [-1.5, -1.0, -1.2], s: [1.6, 1.1, 1.6] },
  { p: [0.3, -0.6, 1.5], s: [2.3, 0.5, 1.1] },
  { p: [1.9, -0.2, -0.7], s: [0.9, 2.6, 0.9] },
  { p: [2.4, 0.5, 1.0], s: [0.55, 3.2, 0.55] },
  { p: [-2.3, -0.1, 0.9], s: [1.2, 0.4, 2.1] },
  { p: [-0.6, 0.5, -0.5], s: [2.0, 0.55, 1.4] },
  { p: [0.6, 1.3, 0.2], s: [1.1, 0.75, 1.1] },
  { p: [-1.9, 1.1, -1.6], s: [0.65, 1.8, 0.65] },
  { p: [0.0, 2.1, -0.9], s: [1.8, 0.28, 1.0] },
  { p: [1.2, 2.7, -0.2], s: [0.5, 0.9, 0.5] },
];

// The highlighted component — the one piece rendered solid, in ultramarine
const ultraBlock = { p: [-0.5, -0.25, 0.6], s: [1.35, 0.7, 1.35] };

function WireBlock({
  p,
  s,
  solid = false,
}: {
  p: [number, number, number];
  s: [number, number, number];
  solid?: boolean;
}) {
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(...s)),
    [s]
  );

  return (
    <group position={p}>
      {solid && (
        <mesh>
          <boxGeometry args={s} />
          <meshBasicMaterial color={ULTRA} />
        </mesh>
      )}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={INK} transparent opacity={solid ? 1 : 0.75} />
      </lineSegments>
    </group>
  );
}

function Structure({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const all = useMemo(() => [...blocks, ultraBlock], []);

  // The canvas wrapper is pointer-events: none, so read the cursor
  // from the window instead of the R3F event system.
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    if (!group.current || !animate) return;
    const t = state.clock.elapsedTime;

    group.current.rotation.y = t * 0.1 + pointer.current.x * 0.3;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.12,
      0.05
    );

    group.current.children.forEach((child, i) => {
      child.position.y = all[i].p[1] + Math.sin(t * 0.6 + i * 1.3) * 0.07;
    });
  });

  return (
    <group ref={group} rotation={[0, Math.PI / 5, 0]}>
      {blocks.map((block, i) => (
        <WireBlock key={i} p={block.p} s={block.s} />
      ))}
      <WireBlock p={ultraBlock.p} s={ultraBlock.s} solid />
    </group>
  );
}

/** Isometric wireframe "system blueprint" floating behind the hero type. */
export function HeroScene() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      orthographic
      camera={{ zoom: 52, position: [8, 6.5, 8] }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Structure animate={!reduced} />
    </Canvas>
  );
}
