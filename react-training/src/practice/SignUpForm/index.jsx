import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import SignUpProvider from "./SignUpContext";

export default function SignUpFormApp() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    // using number because we have only 2 pages
    setPage(2);
  };

  const handlePrev = () => {
    setPage(1);
  };

  return (
    <SignUpProvider>
      {page === 1 ? (
        <Page1 onNext={handleNext} />
      ) : (
        <Page2 onPrev={handlePrev} />
      )}
    </SignUpProvider>
  );
}
