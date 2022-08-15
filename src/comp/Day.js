import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function Day({}) {
  const [day, setDay] = useState("");
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  useEffect(() => {
    const date = new Date();
    const dd = date.getDay();
    setDay(days[dd]);
  }, [day, days]);

  return (
    <>
      <div className="clock__hour">{day}</div>
    </>
  );
}

export default Day;
