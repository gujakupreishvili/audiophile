import { useState, useEffect } from "react";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-30T00:00:00").getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-[29px]">
      <h1 className="text-[48px] text-black">Big Summer Sale</h1>
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[20px]">
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl">
            {String(timeLeft.days).padStart(2, "0")} <span>DAYS</span>
          </button>
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl">
            {String(timeLeft.hours).padStart(2, "0")} <span>HOURS</span>
          </button>
        </div>
        <div className="flex gap-[20px]">
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl">
            {String(timeLeft.minutes).padStart(2, "0")} <span>MINUTES</span>
          </button>
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl">
            {String(timeLeft.seconds).padStart(2, "0")} <span>SECONDS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
