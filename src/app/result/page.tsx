"use client";

import { useSearchParams } from "next/navigation";
import { 
  getAllDivisionsOfStudent, 
  getGroupLinkByDivision, 
  divisionGroups 
} from "@/lib/division";
import RevealCard from "../components/revealcard";
import ButtonJoinGroup from "../components/button";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("pageName")?.trim() || "";
  const kelas = searchParams.get("kelas")?.trim() || "";

  // ambil semua divisi siswa
  const studentDivisions = getAllDivisionsOfStudent(name, kelas);

  // jika siswa tidak ada sama sekali
  if (studentDivisions.length === 0) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg font-semibold">
        Siswa tidak ditemukan 😢
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-50 p-4 gap-6">

      {studentDivisions.map((student, index) => {
        // info divisi
        const divInfo = divisionGroups.find(d => d.division === student.division);
        const divisionName = divInfo ? divInfo.name : `Divisi ${student.division}`;

        // link grup tiap divisi
        const groupLink = getGroupLinkByDivision(student.division);

        return (
          <div key={index} className="flex flex-col items-center gap-3">
            <RevealCard 
              student={student}
              divisionName={divisionName}
            />

            <ButtonJoinGroup link={groupLink} />
          </div>
        );
      })}

    </div>
  );
}
