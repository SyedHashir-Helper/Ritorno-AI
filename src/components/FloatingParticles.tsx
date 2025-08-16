const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
              opacity: opacity,
              background: '#AD2831'
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;