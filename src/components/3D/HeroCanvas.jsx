import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 196;

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !container || !context) return undefined;

    let mounted = true;
    const images = [];
    const mountainSequence = { frame: 0 };

    const render = () => {
      const currentImage = images[mountainSequence.frame];
      if (!currentImage?.complete || !currentImage.naturalWidth) return;

      const ratio = Math.max(
        canvas.width / currentImage.naturalWidth,
        canvas.height / currentImage.naturalHeight
      );
      const width = currentImage.naturalWidth * ratio;
      const height = currentImage.naturalHeight * ratio;
      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(currentImage, x, y, width, height);
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      render();
    };

    for (let index = 1; index <= frameCount; index += 1) {
      const image = new Image();
      image.src = `/mountain-frames/${index.toString().padStart(4, '0')}.jpg`;
      images.push(image);
    }

    images[0].onload = () => {
      if (!mounted) return;
      setReady(true);
      resizeCanvas();
      render();
    };

    const tween = gsap.to(mountainSequence, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.55,
      },
      onUpdate: render,
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      mounted = false;
      window.removeEventListener('resize', resizeCanvas);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-0 h-[300vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-950">
        {!ready && (
          <motion.img
            src="/mountain-frames/0001.jpg"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={`h-full w-full transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}
