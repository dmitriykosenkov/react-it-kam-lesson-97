import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";
const Clock = (props) => {
  let [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    let clockId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clockId);
  });
  return (
    <div>
      <div className={styles.time}>
        <div className={styles.timer}>{currentTime.toLocaleTimeString()}</div>
        <div className={styles.date}>{currentTime.toLocaleDateString()}</div>
      </div>
    </div>
  );
};
export default Clock;
