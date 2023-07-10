import React, { useEffect, useState } from "react";

import Confetti from "react-confetti";

interface Props {
  name: string;
}

export default function SubmitSuccess(props: Props) {
  const [pieces, setPieces] = useState(200);
  const { name } = props;
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3500);
  };
  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <div className="md:h-[420px] h-[300px] flex flex-col gap-2 text-center items-center justify-center text-2xl md:text-4xl pb-4 md:pb-24">
      <p>{`Thank you for your message ${name}!`}</p>
      <p>{`I'll get back to you as soon as possible.`}</p>
      <Confetti numberOfPieces={pieces} />
    </div>
  );
}
