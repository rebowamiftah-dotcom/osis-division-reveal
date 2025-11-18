import { studentDivisions } from "./studentdivision";

// =====================================
//  DAFTAR DIVISI + NAMA + LINK GROUP
// =====================================
export const divisionGroups = [
  { division: 0, name: "Pengurus Inti", link: "https://chat.whatsapp.com/pengurus-inti" },
  { division: 1, name: "Olahraga", link: "https://chat.whatsapp.com/IOQQfVvfgEvLZRMw4MVS3r?mode=wwt" },
  { division: 2, name: "Humas", link: "https://chat.whatsapp.com/LU4wgkdYiilDcPtdbNlDwB?mode=wwt" },
  { division: 3, name: "Bela Negara", link: "https://chat.whatsapp.com/DUyVXUDKSAV0cLDnUtEV0T?mode=wwt" },
  { division: 4, name: "Media Kreatif", link: "https://chat.whatsapp.com/D72HTxhcYg1HEuuDvXoQ1x?mode=wwt" },
  { division: 5, name: "Ekonomi Kreatif", link: "https://chat.whatsapp.com/FaFtnKyKlau8iqGwKLKuR7?mode=wwt" },
  { division: 6, name: "Pubdok", link: "https://chat.whatsapp.com/FFG8R7wt9gx6EaAxfn9Rn1" },
  { division: 7, name: "Agama", link: "https://chat.whatsapp.com/F7khL5XKPq85nzSCwqS3Yj?mode=hqrt2" },
  { division: 8, name: "Greenlife", link: "https://chat.whatsapp.com/LG5JY3yRwU25UCMJIitv4F?mode=wwt" },
];

// =====================================
//  GET LINK GROUP DIVISI
// =====================================
export function getGroupLinkByDivision(division: number) {
  return divisionGroups.find((g) => g.division === division)?.link || "#";
}

// =====================================
//  CARI SATU SISWA BERDASARKAN NAMA + KELAS
// =====================================
export function findStudentDivision(name: string, kelas: string) {
  return studentDivisions.find(
    (s) =>
      s.name.toLowerCase().trim() === name.toLowerCase().trim() &&
      s.kelas.toLowerCase().trim() === kelas.toLowerCase().trim()
  );
}

// =====================================
//  AMBIL SEMUA SISWA DALAM SATU DIVISI
// =====================================
export function getAllByDivision(division: number) {
  return studentDivisions.filter((s) => s.division === division);
}

// =====================================
//  AMBIL SEMUA DIVISI DIMANA SISWA TERDAFTAR
//  (Untuk pengguna multi-division)
// =====================================
export function getAllDivisionsOfStudent(name: string, kelas: string) {
  return studentDivisions.filter(
    (s) =>
      s.name.toLowerCase().trim() === name.toLowerCase().trim() &&
      s.kelas.toLowerCase().trim() === kelas.toLowerCase().trim()
  );
}
