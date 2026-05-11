import { useEffect, useState } from "react";

function App() {
  // can use a single useState by using object.
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [ampm, setAmpm] = useState("");
  const clock = () => {
    setInterval(() => {
      const time = new Date();

      if (time.getHours() >= 12) {
        setAmpm("PM");
      } else {
        setAmpm("AM");
      }

      setHour(time.getHours() % 12 || 12);
      setMinute(time.getMinutes());
      setSecond(time.getSeconds());
    }, 1000);
  };
  // console.log(time.getHours() % 12 || 12);
  // console.log(time.getMinutes());
  // console.log(time.getSeconds());
  useEffect(() => {
    clock();
  }, []);

  return (
    <div className="w-full h-screen bg-blue-950 text-amber-50 font-semibold flex items-center justify-center gap-10 shadow-xl/30">
      <div className="flex flex-col items-center justify-center gap-3 bg-blue-900 p-10 rounded-2xl">
        <h1 className=" text-3xl"> Digital Clock</h1>
        <div className="bg-blue-500 flex gap-2 text-3xl w-60 justify-center items-baseline p-3 rounded-2xl text-black shadow-xl/30">
          <div>{hour.toString().padStart(2,'0')} : </div>
          <div> {minute.toString().padStart(2,'0')} : </div>
          <div> {second.toString().padStart(2,'0')}</div>
          <div>{ampm}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
