"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormDivisi() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // <<--- LOADING STATE

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !kelas) {
      setError("Nama dan Kelas wajib diisi!");
      return;
    }

    setLoading(true); // MUNCULKAN LOADING

    setTimeout(() => {
      router.push(
        `/result?pageName=${encodeURIComponent(name)}&kelas=${encodeURIComponent(
          kelas
        )}`
      );
    }, 6000); // 1.8 detik animasi loading
  };

  return (
    <div
      className="
        relative min-h-screen w-full 
        flex items-center justify-center 
        px-4 sm:px-6 
        overflow-hidden
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/img/anggota.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1.5px]"></div>

      {/* Logo kiri */}
      <img
        src="/img/terput.png"
        className="
          absolute left-2 sm:left-10 
          top-1/2 -translate-y-1/2 
          opacity-25 blur-[1px]
          w-24 sm:w-60 
          animate-[float_6s_ease-in-out_infinite]
        "
        alt="Logo Sekolah"
      />

      {/* Logo kanan */}
      <img
        src="/img/osis.png"
        className="
          absolute right-2 sm:right-10 
          top-1/2 -translate-y-1/2 
          opacity-25 blur-[1px]
          w-24 sm:w-60
          animate-[float_6s_ease-in-out_infinite_reverse]
        "
        alt="Logo OSIS"
      />

      {/* ================================
          CARD LOADING / FORM SWITCHER
      ================================= */}
      {loading ? (
        /* =============================
             LOADING SCREEN
        ============================== */
        <div
          className="
            relative z-10
            bg-white/40 backdrop-blur-xl 
            border border-white/30
            shadow-[0_6px_28px_rgba(0,0,0,0.18)]
            rounded-2xl sm:rounded-3xl
            w-full max-w-sm 
            p-10 flex flex-col items-center justify-center
            animate-[fadeIn_0.5s_ease-out]
          "
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 text-center">
            Kira-kira apa ya divisi kamu
            <span className="loading-dots ml-1"></span>
          </h2>

          {/* Animasi titik bergerak */}
          <style>{`
            @keyframes dots {
              0% { content: ""; }
              33% { content: "."; }
              66% { content: ".."; }
              100% { content: "..."; }
            }
            .loading-dots::after {
              content: "";
              animation: dots 1s steps(3, end) infinite;
            }
          `}</style>
        </div>
      ) : (
        /* =============================
                FORM NORMAL
        ============================== */
        <div
          className="
            relative z-10
            bg-white/40 backdrop-blur-xl 
            border border-white/30
            shadow-[0_6px_28px_rgba(0,0,0,0.18)]
            rounded-2xl sm:rounded-3xl
            w-full max-w-sm 
            p-6 sm:p-10 
            animate-[fadeIn_0.7s_ease-out]
          "
        >
          <h1
            className="
              text-2xl sm:text-4xl 
              font-extrabold text-center mb-5 sm:mb-6
              text-transparent bg-clip-text 
              bg-gradient-to-r from-cyan-300 to-blue-500
            "
          >
            🎉 Temukan Divisi Kamu! 🎉
          </h1>

          {error && (
            <p className="text-red-500 text-center font-medium animate-pulse mb-3 sm:mb-4">
              {error}
            </p>
          )}

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full p-3 sm:p-4 mb-3 sm:mb-4 
              border border-white/40 
              rounded-xl 
              bg-white/50 backdrop-blur 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 
              text-base sm:text-lg 
              placeholder-gray-600 text-black
            "
          />

          <input
            type="text"
            placeholder=" Masukan Kelas "
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            className="
              w-full p-3 sm:p-4 mb-4 sm:mb-6
              border border-white/40 
              rounded-xl 
              bg-white/50 backdrop-blur 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 
              text-base sm:text-lg 
              placeholder-gray-600 text-black
            "
          />

          <button
            onClick={handleSubmit}
            className="
              w-full bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:brightness-110 
              text-white py-3 sm:py-4 
              rounded-xl font-semibold 
              transition transform hover:-translate-y-[2px] hover:shadow-lg 
              text-base sm:text-lg
            "
          >
            Cari Divisi Saya 🎉
          </button>
        </div>
      )}

      {/* Animasi dasar */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-53%) translateX(6px); }
          100% { transform: translateY(-50%) translateX(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
