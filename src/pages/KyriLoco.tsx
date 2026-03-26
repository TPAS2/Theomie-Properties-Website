import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KyriLoco() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden relative">
      {/* Back button */}
      <a href="/" className="absolute top-6 left-6 z-50">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </a>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-950 to-blue-900/30 animate-pulse"></div>

      {/* Floating orbs */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'][Math.floor(Math.random() * 6)]
            }40, transparent)`,
            animation: `float${i % 4} ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Spinning rings */}
      <div className="absolute w-[600px] h-[600px] border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute w-[500px] h-[500px] border-2 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute w-[400px] h-[400px] border-2 border-pink-500/20 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
      <div className="absolute w-[300px] h-[300px] border-2 border-yellow-500/20 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>

      {/* Particle effects */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981'][Math.floor(Math.random() * 5)],
            animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite, drift ${Math.random() * 20 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: `0 0 10px currentColor`,
          }}
        />
      ))}

      {/* Main text */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <h1
          className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse"
          style={{
            textShadow: '0 0 80px rgba(168, 85, 247, 0.5)',
            animation: 'textGlow 2s ease-in-out infinite alternate, bounce 2s ease-in-out infinite',
          }}
        >
          Kyri Loco
        </h1>

        {/* Subtitle with wave animation */}
        <div className="mt-8 flex justify-center gap-1">
          {['✨', '🔥', '💫', '⚡', '🌟', '💥', '✨'].map((emoji, i) => (
            <span
              key={i}
              className="text-4xl"
              style={{
                animation: `wave 1s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                display: 'inline-block',
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            boxShadow: '0 0 6px #fff, 0 0 12px #fff',
            animation: `shootingStar ${Math.random() * 3 + 2}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(50px, -50px) rotate(90deg); }
          50% { transform: translate(100px, 0) rotate(180deg); }
          75% { transform: translate(50px, 50px) rotate(270deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, -80px) scale(1.2); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(60px, -40px); }
          66% { transform: translate(-40px, 60px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-100px) rotate(180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, -100px); }
        }
        @keyframes textGlow {
          0% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.8)); }
          100% { filter: drop-shadow(0 0 40px rgba(6, 182, 212, 0.8)); }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(300px) translateY(300px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
