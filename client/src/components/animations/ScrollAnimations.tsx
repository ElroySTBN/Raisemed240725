import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'revealUp' | 'morphIn' | 'slideRotate' | 'elastic' | 'typewriter' | 'magneticReveal' | 'liquidDrop' | 'prismShift';
  delay?: number;
  duration?: number;
  className?: string;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  slideLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  slideRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  scale: {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
  },
  rotate: {
    initial: { opacity: 0, rotate: -15, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  revealUp: {
    initial: { opacity: 0, y: 100, clipPath: 'inset(100% 0 0 0)' },
    animate: { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' },
    transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] }
  },
  morphIn: {
    initial: { opacity: 0, scale: 0.8, borderRadius: '50%' },
    animate: { opacity: 1, scale: 1, borderRadius: '0%' },
    transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  slideRotate: {
    initial: { opacity: 0, x: -100, rotate: -10 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 1.3, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  elastic: {
    initial: { opacity: 0, scale: 0.3, rotate: -12 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55] }
  },
  typewriter: {
    initial: { opacity: 0, width: 0, overflow: 'hidden' },
    animate: { opacity: 1, width: 'auto', overflow: 'visible' },
    transition: { duration: 1.8, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  magneticReveal: {
    initial: { opacity: 0, y: 80, skewY: 5 },
    animate: { opacity: 1, y: 0, skewY: 0 },
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] }
  },
  liquidDrop: {
    initial: { opacity: 0, scale: 0, borderRadius: '50%', y: -50 },
    animate: { opacity: 1, scale: 1, borderRadius: '12px', y: 0 },
    transition: { duration: 1.4, ease: [0.68, -0.55, 0.265, 1.55] }
  },
  prismShift: {
    initial: { opacity: 0, rotateY: 45, rotateX: 15, scale: 0.8 },
    animate: { opacity: 1, rotateY: 0, rotateX: 0, scale: 1 },
    transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export function ScrollAnimation({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  duration,
  className = '' 
}: ScrollAnimationProps) {
  const config = animations[animation];
  
  return (
    <motion.div
      className={className}
      initial={config.initial}
      whileInView={config.animate}
      viewport={{ once: true, margin: '-50px', amount: 0.3 }}
      transition={{
        ...config.transition,
        delay,
        ...(duration && { duration })
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.15 }: { children: ReactNode[], className?: string, staggerDelay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Parallax Scroll Effect Component
export function ParallaxScroll({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: ReactNode, 
  speed?: number,
  className?: string 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

// Reveal Text Animation Component
export function RevealText({ 
  text, 
  className = '',
  delay = 0,
  duration = 1.2
}: { 
  text: string,
  className?: string,
  delay?: number,
  duration?: number 
}) {
  const words = text.split(' ');
  
  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            transition: {
              duration,
              delay: delay + (index * 0.08),
              ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Magnetic Hover Effect
export function MagneticElement({ 
  children, 
  className = '',
  strength = 30 
}: { 
  children: ReactNode,
  className?: string,
  strength?: number 
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    ref.current.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
  };
  
  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)';
    }
  };
  
  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

// Scroll-triggered counter animation
export function AnimatedCounter({ 
  from = 0,
  to,
  duration = 2,
  className = '',
  suffix = ''
}: {
  from?: number,
  to: number,
  duration?: number,
  className?: string,
  suffix?: string
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.4']
  });
  
  const count = useTransform(scrollYProgress, [0, 1], [from, to]);
  
  return (
    <motion.div ref={ref} className={className}>
      <motion.span>
        {count.get().toFixed(0)}{suffix}
      </motion.span>
    </motion.div>
  );
}