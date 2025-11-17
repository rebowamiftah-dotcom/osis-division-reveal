"use client";

export default function ButtonJoinGroup({ link }: { link: string }) {
  return (
    <div className="text-center mt-4 animate-fadeIn">
      <p className="mb-3 font-semibold text-gray-700 text-sm md:text-base">
        Tekan tombol di bawah untuk masuk ke grup divisi kamu
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          px-6 py-3 
          text-white 
          font-semibold 
          rounded-xl 
          bg-green-600 
          shadow-md 
          hover:bg-green-700
          hover:shadow-lg
          transition-all
          duration-200
          active:scale-95
        "
      >
        Masuk Grup Divisi
      </a>
    </div>
  );
}
