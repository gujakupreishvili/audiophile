import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Popup() {
  return (
    <div className='fixed left-0 top-0 w-full h-full'>
      <div className='absolute w-full h-full bg-gray-400 opacity-[0.5]'></div>
      <div className='bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 shadow-lg rounded-lg'>
        <div className="w-[64px] h-[64px] rounded-[32px] bg-[#D87D4A] flex items-center justify-center">
          <FaCheck className="text-white" />
        </div>
        <h1 className="text-xl font-bold mt-4">THANK YOU FOR YOUR ORDER</h1>
        <p className="text-gray-600 mt-2">You will receive an email confirmation shortly.</p>
        <div className="mt-6">
          <CountdownCircleTimer
            isPlaying
            duration={10} 
            colors={['#D87D4A', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 3, 0]}
          >
            {({ remainingTime }) => {
              const days = Math.floor(remainingTime / (24 * 60 * 60));
              const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
              const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
              const seconds = remainingTime % 60;

              return (
                <div className="text-center">
                  <div className="text-xl font-bold">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</div>
                  <p className="text-gray-500 text-sm">Time until delivery</p>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>
        <Link to="/">
        <button className=" w-[100%] h-[48px] mt-[30px] bg-[#D87D4A] text-white text-[13px] font-bold text-center">
        BACK TO HOME
        </button>
        </Link>
      </div>
    </div>
  );
}

