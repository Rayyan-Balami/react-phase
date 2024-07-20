import { useEffect, useState } from "react";

export default function DateTimeWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const [timePart, amPmPart] = timeString.split(' ');

  return (
    <>
      <span>
        {time.getDate()} {time.toLocaleString('default', { month: 'long' })} {time.getFullYear()}
      </span>
      <span className="z-10 flex items-center text-4xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
        {timePart}
      </span>
      <span className="z-10 flex items-center text-xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
        {amPmPart}
      </span>
    </>
  );
}
