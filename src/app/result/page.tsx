import { Suspense } from "react";
import ResultPage from "./result-page";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultPage />
    </Suspense>
  );
}
