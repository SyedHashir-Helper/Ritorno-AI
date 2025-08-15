import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (!hasAnimated) {
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current < target) {
          setCount(Math.ceil(current));
        } else {
          setCount(target);
          setHasAnimated(true);
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [target, duration, hasAnimated]);
  
  return <span className="text-4xl font-bold text-white">{count}{suffix}</span>;
};

export default AnimatedCounter;