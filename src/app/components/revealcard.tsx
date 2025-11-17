"use client";

"use client";

import { StudentDivision } from "@/lib/studentdivision";

interface RevealCardProps {
  student: StudentDivision;
  divisionName: string;
  backgroundImage?: string;
}


export default function RevealCard({ student, divisionName, backgroundImage }: RevealCardProps) {
  const isPengurusInti = student.division === 0;

  // ===============================
  //  PERBAIKAN LOGIKA ROLE LENGKAP
  // ===============================
  const roleText = isPengurusInti
    ? student.role
    : student.subDivision
      ? `${student.role} ${student.subDivision}`
      : `${student.role} Divisi ${divisionName}`;

  return (
    <div className="w-full flex flex-col items-center text-center px-4">

      {/* CARD */}
      <div
        className="
          w-full max-w-3xl 
          p-10 md:p-14 
          rounded-3xl
          relative overflow-hidden 
          shadow-[0_15px_50px_rgba(0,0,0,0.22)]
          animate-[cardReveal_0.9s_ease-out]
          bg-white/70 backdrop-blur-xl
        "
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/65 to-white/90 backdrop-blur-sm"></div>

        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="confetti"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10">

          <h1
            className="
              text-3xl md:text-5xl font-extrabold 
              mb-6 
              text-transparent bg-clip-text
              bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500
              animate-[pulseGlow_2.2s_ease-in-out_infinite]
            "
          >
            🎉 CONGRATULATIONS! 🎉
          </h1>

          <h2 className="text-xl md:text-3xl font-bold mb-2 text-gray-900">
            Halo, <span className="text-cyan-600 font-extrabold">{student.name}</span>! 👋
          </h2>

          <p className="text-gray-700 mb-2 md:text-lg">Kamu terpilih sebagai:</p>

          {/* ROLE */}
          <p
            className="
              text-3xl md:text-5xl 
              font-extrabold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-600 to-cyan-400 
              my-4 drop-shadow-xl
              animate-[pop_0.55s_ease-out]
            "
          >
            {roleText}
          </p>

          {/* DIVISION (kalau bukan inti) */}
          {!isPengurusInti && (
            <p className="text-lg md:text-xl text-gray-800 font-semibold mt-2">
              di Divisi <span className="text-blue-600">{divisionName}</span>
            </p>
          )}

          <div className="text-3xl mt-3 animate-[fadeUp_1s_ease-out]">🎆✨🎇✨🎆</div>

          <p className="text-gray-700 mt-6 md:text-lg flex items-center justify-center">
            🎉 Selamat bergabung di divisi terbaik kamu! 🎉
          </p>

          <div className="text-2xl mt-4 animate-[softBounce_1.6s_infinite]">
            🎊✨🎉✨🎊
          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes cardReveal {
          0% { opacity: 0; transform: scale(0.92) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(0,255,255,0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(0,200,255,0.7)); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes softBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .confetti {
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(circle, #ff6b6b 12%, transparent 12%),
            radial-gradient(circle, #ffd93d 12%, transparent 12%),
            radial-gradient(circle, #6bcfff 12%, transparent 12%),
            radial-gradient(circle, #7dff85 12%, transparent 12%);
          background-size: 12px 12px;
          animation: confettiFall 4s linear infinite;
          opacity: .45;
        }
        @keyframes confettiFall {
          0% { background-position: 0 0, 30px -40px, 60px -20px, 90px -60px; }
          100% { background-position: 0 200px, 30px 160px, 60px 180px, 90px 140px; }
        }
      `}</style>
    </div>
  );
}
