import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Change this to the exact number of frames you extracted from your video
  const frameCount = 196; 

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // We store our images here so they are ready to draw instantly
    const images = [];
    
    // GSAP will animate this object from 0 to 149
    const mountainSequence = { frame: 0 }; 

    // 1. Preload all the images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Adjust the path and padding to match how you named your files!
      // This looks for: /mountain-frames/0001.jpg, 0002.jpg, etc.
      img.src = `/mountain-frames/${i.toString().padStart(4, '0')}.jpg`;
      images.push(img);
    }

    // 2. The drawing function (makes sure the image covers the whole screen like a background)
    const render = () => {
      if (!images[mountainSequence.frame] || !images[mountainSequence.frame].complete) return;
      
      const img = images[mountainSequence.frame];
      
      // Math to make the image act like "object-fit: cover"
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    // Draw the very first frame as soon as it loads
    images[0].onload = render;

    // 3. The GSAP Scroll Timeline
    gsap.to(mountainSequence, {
      frame: frameCount - 1,
      snap: "frame", // Ensures we only ask for whole numbers (Frame 1, not Frame 1.5)
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // The 0.5 adds a tiny bit of smoothing to the scroll link
      },
      onUpdate: render // Every time the user scrolls, draw the new frame!
    });

    // 4. Keep canvas sharp if the user resizes the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [frameCount]);

  return (
    // Height determines how long the scroll takes. 300vh gives a nice, long sweep.
    <div ref={containerRef} className="relative z-0 h-[300vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full bg-black">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
}