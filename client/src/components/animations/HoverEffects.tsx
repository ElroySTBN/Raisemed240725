import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverEffectProps extends MotionProps {
  children: ReactNode;
  effect?: 'lift' | 'scale' | 'rotate' | 'glow' | 'bounce' | 'tilt';
  className?: string;
}

const hoverEffects = {
  lift: {
    whileHover: { 
      y: -8,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    transition: { type: 'spring', stiffness: 300 }
  },
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  },
  rotate: {
    whileHover: { rotate: [0, -1, 1, -1, 0] },
    transition: { duration: 0.5 }
  },
  glow: {
    whileHover: {
      boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
      scale: 1.02
    },
    transition: { duration: 0.3 }
  },
  bounce: {
    whileHover: {
      y: [0, -10, 0],
      transition: {
        y: { repeat: Infinity, duration: 0.6 }
      }
    }
  },
  tilt: {
    whileHover: { rotateZ: 2, scale: 1.02 },
    transition: { type: 'spring', stiffness: 300 }
  }
};

export function HoverEffect({ children, effect = 'lift', className = '', ...props }: HoverEffectProps) {
  const config = hoverEffects[effect];
  
  return (
    <motion.div
      className={className}
      {...config}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedButton({ children, className = '', ...props }: HoverEffectProps) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      {children}
    </motion.button>
  );
}