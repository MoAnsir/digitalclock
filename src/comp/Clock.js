import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function DigitalClock({ is24H }) {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const clock = () => {
      const date = new Date();

      const hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();

      setHour(hh);
      setMinutes(mm);
      setSeconds(ss);
    };
    clock();

    const interval = setInterval(() => {
      clock();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ampm = hour >= 12 ? "PM" : "AM";
  const hourFormat = hour % 12;
  const minuteFormat = minutes < 10 ? "0" + minutes : minutes;
  const secondFormat = seconds < 10 ? "0" + seconds : seconds;
  const tH = `${hourFormat}:${minuteFormat}:${secondFormat} ${ampm}`;
  const tfH = `${hour}:${minuteFormat}:${secondFormat}`;

  // const tH2 = () => (
  //   <div className="clock__timer">
  //     <div className="clock__timer--hour">
  //       <div className="clock__timer--hour-1st"></div>
  //       <div className="clock__timer--hour-2nd"></div>
  //     </div>
  //     <div className="clock__timer--colon">:</div>
  //     <div className="clock__timer--min"></div>
  //     <div className="clock__timer--colon">:</div>
  //     <div className="clock__timer--sec"></div>
  //   </div>
  // );

  return (
    <>
      <div className="clock__timer">{is24H ? tfH : tH}</div>
    </>
  );
}

export default DigitalClock;
