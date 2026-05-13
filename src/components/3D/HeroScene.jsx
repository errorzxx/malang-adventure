import { useRef, Suspense } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { Environment, Sparkles, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function AnimatedMountain({ scrollTriggerRef }) {
  const mountainRef = useRef(null);
  
  // Loading the real model
  const { scene } = useGLTF('/mountain.gltf'); 

  useGSAP(() => {
    if (!mountainRef.current || !scrollTriggerRef.current) return;

    // STARTING POSITION: Start at an angle, slightly zoomed in
    mountainRef.current.rotation.y = -Math.PI / 1.5; 
    mountainRef.current.scale.set(1.5, 1.5, 1.5);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTriggerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, 
      }
    });

    // ACTION: Rotate to center (y: 0) and zoom out to normal (scale: 1)
    tl.to(mountainRef.current.rotation, { y: 0, ease: 'power2.out', duration: 1 }, 0);
    tl.to(mountainRef.current.scale, { x: 1, y: 1, z: 1, ease: 'power2.out', duration: 1 }, 0);

    // THE STOP: This empty animation forces the mountain to stay perfectly still 
    // for the second half of the user's scroll.
    tl.to({}, { duration: 1 }); 

  }, { dependencies: [scrollTriggerRef] });

return (
    // We keep the animation group here
    <group ref={mountainRef} position={[0, 0, 0]}>
       {/* 
          CRITICAL FIX: We scale the raw model up drastically here! 
          Try changing '30' to '50' or '10' until it fills your screen perfectly.
       */}
       <primitive object={scene} scale={30} position={[-2, -1, -1]} />
    </group>
  );
}

export default function HeroScene() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative z-0 h-[300vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={1.5} color="#ffffff" />
          <directionalLight position={[10, 20, 10]} intensity={2} color="#ffffff" />
          
          <Suspense fallback={null}>
            <AnimatedMountain scrollTriggerRef={containerRef} />
          </Suspense>

          <Sparkles count={800} scale={20} size={2} speed={0.5} opacity={0.5} color="#ffffff" />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}