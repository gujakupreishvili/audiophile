import { motion } from "framer-motion";
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

  const animationVariantsleft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },  
  };
  const animationVariantsright = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div className="flex flex-col items-center gap-[29px] md:w-[675px] lg:w-[1110px] lg:justify-around">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={animationVariantsright}
      className="text-[48px] text-black md:text-[60px]">Big Summer Sale</motion.h1>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={animationVariantsleft}
      className="flex flex-col gap-[20px]  md:flex-row lg:w-full justify-between ">
        <div className="flex gap-[20px] lg:w-[50%] lg:justify-between">
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl lg:w-[60%] lg:h-[140px] lg:text-[28px]">
            {String(timeLeft.days).padStart(2, "0")} <span>DAYS</span>
          </button>
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl lg:w-[60%] lg:h-[140px] lg:text-[28px]">
            {String(timeLeft.hours).padStart(2, "0")} <span>HOURS</span>
          </button>
        </div>
        <div className="flex gap-[20px] lg:w-[50%] lg:justify-between">
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl lg:w-[60%] lg:h-[140px] lg:text-[28px]">
            {String(timeLeft.minutes).padStart(2, "0")} <span>MINUTES</span>
          </button>
          <button className="flex flex-col w-[157px] bg-black text-white items-center justify-center h-[70px] rounded-xl lg:w-[60%] lg:h-[140px] lg:text-[28px]">
            {String(timeLeft.seconds).padStart(2, "0")} <span>SECONDS</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
