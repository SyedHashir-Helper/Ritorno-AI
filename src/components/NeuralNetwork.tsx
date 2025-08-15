const NeuralNetwork = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <svg className="w-full h-full" viewBox="0 0 1000 1000">
      {[...Array(15)].map((_, i) => (
        <g key={i}>
          <circle
            cx={50 + (i % 5) * 200}
            cy={100 + Math.floor(i / 5) * 200}
            r="4"
            fill="#10b981"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          {i < 10 && (
            <line
              x1={50 + (i % 5) * 200}
              y1={100 + Math.floor(i / 5) * 200}
              x2={50 + ((i + 5) % 5) * 200}
              y2={100 + Math.floor((i + 5) / 5) * 200}
              stroke="#06d6a0"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          )}
        </g>
      ))}
    </svg>
  </div>
);

export default NeuralNetwork;