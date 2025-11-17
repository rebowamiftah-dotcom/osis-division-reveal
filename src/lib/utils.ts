import { studentDivisions } from "./studentdivision";

export function getDivisionById(id: number) {
  return studentDivisions.find((div) => div.id === id);
}
