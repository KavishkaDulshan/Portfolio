import React from 'react'

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Floating colored circles */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(240, 60%, 65%) 0%, transparent 70%)',
          top: '5%',
          left: '10%',
          animation: 'float1 20s ease-in-out infinite, colorShift1 15s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(280, 60%, 70%) 0%, transparent 70%)',
          top: '70%',
          right: '5%',
          animation: 'float2 25s ease-in-out infinite, colorShift2 18s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute w-72 h-72 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(320, 60%, 75%) 0%, transparent 70%)',
          bottom: '30%',
          left: '70%',
          animation: 'float3 30s ease-in-out infinite, colorShift3 22s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute w-64 h-64 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(200, 60%, 70%) 0%, transparent 70%)',
          top: '40%',
          right: '60%',
          animation: 'float4 18s ease-in-out infinite, colorShift4 16s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute w-88 h-88 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(160, 60%, 65%) 0%, transparent 70%)',
          bottom: '10%',
          right: '80%',
          animation: 'float5 22s ease-in-out infinite, colorShift5 20s ease-in-out infinite',
        }}
      />

      <div 
        className="absolute w-56 h-56 rounded-full opacity-12"
        style={{
          background: 'radial-gradient(circle, hsl(60, 60%, 72%) 0%, transparent 70%)',
          top: '15%',
          left: '85%',
          animation: 'float6 35s ease-in-out infinite, colorShift6 14s ease-in-out infinite',
        }}
      />

      <div 
        className="absolute w-68 h-68 rounded-full opacity-18"
        style={{
          background: 'radial-gradient(circle, hsl(120, 60%, 68%) 0%, transparent 70%)',
          bottom: '60%',
          left: '45%',
          animation: 'float7 28s ease-in-out infinite, colorShift7 19s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(40px, -30px) scale(1.2); }
          50% { transform: translate(-25px, 45px) scale(0.8); }
          75% { transform: translate(30px, 20px) scale(1.1); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -20px) scale(1.3); }
          66% { transform: translate(35px, 40px) scale(0.9); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(25px, -35px) scale(0.7); }
          60% { transform: translate(-40px, 25px) scale(1.2); }
          80% { transform: translate(15px, -15px) scale(1.0); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 50px) scale(1.4); }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(45px, -25px) scale(1.1); }
          80% { transform: translate(-20px, 30px) scale(0.85); }
        }

        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-35px, 40px) scale(1.25); }
          70% { transform: translate(20px, -30px) scale(0.9); }
        }

        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, 35px) scale(0.8); }
          75% { transform: translate(-40px, -20px) scale(1.3); }
        }

        @keyframes colorShift1 {
          0% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(90deg); }
          50% { filter: hue-rotate(180deg); }
          75% { filter: hue-rotate(270deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes colorShift2 {
          0% { filter: hue-rotate(0deg); }
          33% { filter: hue-rotate(120deg); }
          66% { filter: hue-rotate(240deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes colorShift3 {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes colorShift4 {
          0% { filter: hue-rotate(0deg); }
          40% { filter: hue-rotate(144deg); }
          80% { filter: hue-rotate(288deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes colorShift5 {
          0% { filter: hue-rotate(0deg); }
          60% { filter: hue-rotate(216deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes colorShift6 {
          0% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(90deg); }
          50% { filter: hue-rotate(180deg); }
          75% { filter: hue-rotate(270deg); }
          100% { filter: hue-rotate(360deg); }
        }

        @keyframes colorShift7 {
          0% { filter: hue-rotate(0deg); }
          35% { filter: hue-rotate(126deg); }
          70% { filter: hue-rotate(252deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Background