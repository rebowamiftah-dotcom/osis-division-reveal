// src/lib/divisions.ts

export interface StudentDivision {
  id: number;
  name: string;
  kelas: string;
  division: number;
  role?: string;
  subDivision?: string;
  pj?: string;
  multi?: boolean;
}

export const studentDivisions: StudentDivision[] = [
  // =========================
  //        PENGURUS INTI
  // =========================
  { id: 0, name: "kinan", kelas: "11 dkv", division: 0, role: "ketua osis" },
  { id: 1, name: "hamsah", kelas: "10 tkr", division: 0, role: "wakil ketua osis" },
  { id: 2, name: "shasa", kelas: "11 dkv", division: 0, role: "sekretaris 1" },
  { id: 3, name: "julian", kelas: "10 dkv", division: 0, role: "sekretaris 2" },
  { id: 4, name: "miftah", kelas: "11 rpl", division: 0, role: "bendahara 1" },
  { id: 5, name: "shofi", kelas: "10 dkv", division: 0, role: "bendahara 2" },

  // =========================
  //      1. OLAHRAGA
  // =========================
  { id: 6, name: "arvino chandra kusuma", kelas: "10 tkr", division: 1, role: "anggota", pj: "hamsah" },
  { id: 7, name: "m syahrul hermawan", kelas: "10 dkv", division: 1, role: "ketua", pj: "hamsah" },
  { id: 8, name: "daffa nabil", kelas: "11 rpl", division: 1, role: "anggota", pj: "hamsah" },
  { id: 9, name: "m rezvan raka yanuar", kelas: "11 rpl", division: 1, role: "anggota", pj: "hamsah" },

  // =========================
  //      2. HUMAS
  // =========================
  { id: 10, name: "fadli zakki haitsam", kelas: "11 dkv", division: 2, role: "anggota", pj: "shasa" },
  { id: 11, name: "syaiful ulum", kelas: "10 rpl", division: 2, role: "anggota", pj: "shasa" },
  { id: 12, name: "m rizky firmansyah", kelas: "10 rpl", division: 2, role: "wakil", pj: "shasa" },
  { id: 13, name: "nadhir joshafarra", kelas: "10 rpl", division: 2, role: "anggota", pj: "shasa" },
  { id: 14, name: "m fariz fathurahman", kelas: "10 tkr", division: 2, role: "ketua", pj: "shasa" },

  // =========================
  //      3. BELA NEGARA
  // =========================
  { id: 15, name: "safa aulia rahmawati", kelas: "10 rpl", division: 3, role: "wakil", pj: "hamsah" },
  { id: 16, name: "ismail", kelas: "11 tsm rpl", division: 3, role: "ketua", pj: "hamsah" },

  // =========================
  //      4. MEDIA KREATIF
  // =========================
  { id: 17, name: "syifa setyarini", kelas: "11 dkv", division: 4, subDivision: "media visual", role: "ketua", pj: "kinan" },
  { id: 18, name: "khairinnisa putri faulia", kelas: "10 dkv", division: 4, subDivision: "media visual", role: "wakil", pj: "kinan" },
  { id: 19, name: "rinaldi febriansyah arbain", kelas: "11 tsm rpl", division: 4, subDivision: "media visual", role: "anggota", pj: "kinan" },

  { id: 20, name: "rifky hanif", kelas: "11 dkv", division: 4, subDivision: "media audio visual", role: "ketua", pj: "kinan" },
  { id: 21, name: "farrel akram adisya", kelas: "10 dkv", division: 4, subDivision: "media audio visual", role: "wakil", pj: "kinan" },
  { id: 22, name: "nadya shafwah", kelas: "11 dkv", division: 4, subDivision: "media audio visual", role: "anggota", pj: "kinan" },

  // =========================
  //      5. EKONOMI KREATIF
  // =========================
  { id: 23, name: "safa rana fauziah", kelas: "10 dkv", division: 5, role: "anggota", pj: "miftah" },
  { id: 24, name: "aqila ramadhani", kelas: "10 rpl", division: 5, role: "ketua", pj: "miftah" },

  // =========================
  //      6. PUBDOK
  // =========================
  { id: 25, name: "m rizky", kelas: "10 dkv", division: 6, role: "anggota", pj: "shofi" },
  { id: 26, name: "nicklas fahri zaidan", kelas: "11 rpl", division: 6, role: "ketua", pj: "shofi" },
  { id: 27, name: "fattan ahmad azkan", kelas: "11 dkv", division: 6, role: "anggota", pj: "shofi" },

  // =========================
  //      7. AGAMA
  // =========================
  { id: 28, name: "nurul adilla khaira", kelas: "10 dkv", division: 7, role: "wakil", pj: "julian & shofi" },
  { id: 29, name: "alfarhat odang", kelas: "10 rpl", division: 7, role: "anggota", multi: true, pj: "julian & shofi" },
  { id: 30, name: "destia salma putri lestari", kelas: "11 rpl", division: 7, role: "ketua", pj: "julian & shofi" },
  { id: 31, name: "m aditya firdaus", kelas: "10 rpl", division: 7, role: "anggota", multi: true, pj: "julian & shofi" },

  // =========================
  //      8. GREENLIFE
  // =========================
  { id: 32, name: "m aditya firdaus", kelas: "10 rpl", division: 8, role: "anggota", multi: true, pj: "kinan" },
  { id: 33, name: "alfarhat odang", kelas: "10 rpl", division: 8, role: "wakil", multi: true, pj: "kinan" },
  { id: 34, name: "ahmad baihaqi", kelas: "11 rpl", division: 8, role: "anggota", pj: "kinan" },
  { id: 35, name: "hilman zaky maulanan", kelas: "11 rpl", division: 8, role: "ketua", pj: "kinan" },
];

// =========================
//  FUNCTIONS
// =========================

// Ambil berdasarkan ID
export function getDivisionById(id: number) {
  return studentDivisions.find((div) => div.id === id);
}

// Cari berdasarkan nama + kelas
export function findStudentDivision(name: string, kelas: string) {
  return studentDivisions.find(
    (s) =>
      s.name.toLowerCase().trim() === name.toLowerCase().trim() &&
      s.kelas.toLowerCase().trim() === kelas.toLowerCase().trim()
  );
}
