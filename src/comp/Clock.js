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
  const twelveHour = hour % 12;
  const tH = `${twelveHour}:${minutes}:${seconds} ${ampm}`;
  const tfH = `${hour}:${minutes}:${seconds}`;

  return (
    <>
      <div className="clock__hour">{is24H ? tfH : tH}</div>
    </>
  );
}

export default DigitalClock;
