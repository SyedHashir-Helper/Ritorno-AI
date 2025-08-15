import useScrollY from '../hooks/UseScrollY';

const MatrixRain = () => {
  const scrollY = useScrollY();
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-green-400 text-xs font-mono"
          style={{
            left: `${i * 5}%`,
            top: `-20px`,
            animation: `matrixRain ${3 + Math.random() * 2}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          {['01', '10', '11', '00'][Math.floor(Math.random() * 4)]}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;