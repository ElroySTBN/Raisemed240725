import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ReactNode, useRef, useEffect } from 'react';

// Scroll-triggered morphing shapes
export function MorphingShape({ 
  className = '',
  initialPath,
  finalPath,
  strokeColor = '#3B82F6'
}: {
  className?: string,
  initialPath: string,
  finalPath: string,
  strokeColor?: string
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.2']
  });
  
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.path
          d={initialPath}
          stroke={strokeColor}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// Perspective card that tilts based on scroll
export function PerspectiveCard({ 
  children, 
  className = '' 
}: { 
  children: ReactNode,
  className?: string 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  
  return (
    <div ref={ref} className="perspective-1000">
      <motion.div 
        className={className}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Sliding text reveal with mask
export function SlidingTextReveal({ 
  text, 
  className = '',
  direction = 'up'
}: {
  text: string,
  className?: string,
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const directionMap = {
    up: { y: '100%' },
    down: { y: '-100%' },
    left: { x: '100%' },
    right: { x: '-100%' }
  };
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={directionMap[direction]}
        whileInView={{ x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ 
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1]
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

// Floating elements that move based on scroll
export function FloatingElements({ 
  className = '' 
}: {
  className?: string
}) {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -180]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-sm"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-sm"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-sm"
        style={{ y: y3 }}
      />
    </div>
  );
}

// Scroll-triggered progress line
export function ScrollProgressLine({ 
  className = '',
  color = '#3B82F6'
}: {
  className?: string,
  color?: string
}) {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className={`h-1 bg-gradient-to-r from-transparent via-current to-transparent ${className}`}
      style={{
        scaleX: scrollYProgress,
        color: color,
        transformOrigin: '0%'
      }}
    />
  );
}

// 3D rotating card on scroll
export function Rotating3DCard({ 
  children,
  className = '',
  rotationIntensity = 20
}: {
  children: ReactNode,
  className?: string,
  rotationIntensity?: number
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-rotationIntensity, 0, rotationIntensity]
  );
  
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [rotationIntensity, 0, -rotationIntensity]
  );
  
  return (
    <div ref={ref} className="perspective-1000">
      <motion.div
        className={className}
        style={{
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d'
        }}
        whileHover={{
          rotateY: 5,
          rotateX: -5,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Elastic bounce entrance
export function ElasticEntrance({ 
  children,
  className = '',
  delay = 0
}: {
  children: ReactNode,
  className?: string,
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        scale: 0.3,
        rotate: -10
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55],
        scale: {
          type: "spring",
          damping: 8,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Text that writes itself on scroll
export function TypewriterText({ 
  text,
  className = '',
  speed = 50
}: {
  text: string,
  className?: string,
  speed?: number
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.4']
  });
  
  const charactersToShow = useTransform(
    scrollYProgress,
    [0, 1],
    [0, text.length]
  );
  
  const displayText = useTransform(
    charactersToShow,
    (latest) => text.slice(0, Math.round(latest))
  );
  
  return (
    <div ref={ref} className={className}>
      <motion.span>{displayText}</motion.span>
      <motion.span
        className="animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        |
      </motion.span>
    </div>
  );
}

// Morphing background gradient
export function MorphingGradient({ 
  className = '',
  colors = ['from-blue-600', 'via-purple-600', 'to-blue-800']
}: {
  className?: string,
  colors?: string[]
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 50%', '100% 50%']
  );
  
  return (
    <motion.div
      ref={ref}
      className={`bg-gradient-to-r ${colors.join(' ')} ${className}`}
      style={{
        backgroundPosition,
        backgroundSize: '200% 200%'
      }}
    />
  );
}