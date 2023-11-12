import { useEffect, useState } from "react";
import "../Styles/CoundownView.css";

import DayView from "./timestamps/DayView";
import HourView from "./timestamps/HourView";
import MinuteView from "./timestamps/MinuteView";
import SecondsView from "./timestamps/SecondsView";
import InputField from "./Input";
import TimerEndMessage from "./errorsMessages/TimerEndMessage";
import InvalidInputMessage from "./errorsMessages/InvalidInputMessage";
import moment from "moment";
function CoundownView() {
  const [timerEndMessage, setTimerEndMessage] = useState(false);
  const [invalidInputMessage, setInvalidInputMessage] = useState(false);
  const [hourInput, setHourInput] = useState(0);
  const [minutesInput, setMinutesInput] = useState(0);
  const [amPm, setAmPm] = useState("");
  const [days, setDays] = useState(() => {
    const savedDays = localStorage.getItem("days");
    const initialValue = JSON.parse(savedDays);
    return initialValue || 0;
  });
  const [hours, setHours] = useState(() => {
    const savedHours = localStorage.getItem("hours");
    const initialValue = JSON.parse(savedHours);
    return initialValue || 0;
  });
  const [minutes, setMinutes] = useState(() => {
    const savedMinutes = localStorage.getItem("minutes");
    const initialValue = JSON.parse(savedMinutes);
    
    return initialValue || 0;
  });
  const [seconds, setSeconds] = useState(59);
  const [inputDate, setInputDate] = useState(() => {
    const savedDate = localStorage.getItem("date");
    const initialValue = JSON.parse(savedDate)
    return initialValue || 0;
  });

  useEffect(() => {
    if (hourInput == 0 || minutesInput == 0) {
      setInvalidInputMessage(true);
    }
    setInvalidInputMessage(false);
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const formatHour = moment(`${hourInput}`, [`h:mm ${amPm}`]).format("HH");
    changingDate.setHours(formatHour);
    changingDate.setMinutes(minutesInput);
    const totalSeconds = (changingDate - currentDate) / 1000;

    if (totalSeconds < 0 && currentDate >= changingDate && inputDate != false) {
      setInvalidInputMessage(true);
      return;
    }

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
    setTimerEndMessage(false);
    localStorage.setItem("date", JSON.stringify(inputDate));
  }, [inputDate, hourInput, minutesInput, amPm]);

  useEffect(() => {
    if (
      days == 0 &&
      hours == 0 &&
      minutes == 0 &&
      seconds == 0 &&
      inputDate != 0
    ) {
      setTimerEndMessage(true);
    }
    function SubtractDays() {
      if (days != 0) {
        setDays(days - 1);
      }
      if (days > 0) {
        setHours(24);
      }
    }
    function SubtractHours() {
      if (hours != 0) {
        setHours(hours - 1);
      }
      if (hours > 0) {
        setMinutes(59);
      }
    }
    if (seconds === 0) {
      if (minutes != 0) {
        setMinutes(minutes - 1);
      }
      if (minutes > 0) {
        setSeconds(59);
      }
    }
    if (minutes === 0) {
      SubtractHours();
    }

    if (hours === 0) {
      SubtractDays();
    }

    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  function ResetHandler() {
    setInputDate(false);
    setDays(false);
    setHours(false);
    setMinutes(false);
    setSeconds(false);

    localStorage.setItem("date", JSON.stringify(inputDate));
  }
  return (
    <>
      {timerEndMessage ? <TimerEndMessage /> : ""}
      {invalidInputMessage ? <InvalidInputMessage /> : ""}
      <div className="Countdown-view">
        <InputField
          setInputDate={setInputDate}
          setHourInput={setHourInput}
          setMinuteInput={setMinutesInput}
          setAmPm={setAmPm}
          setInvalidInputMessage={setInvalidInputMessage}
        />
        <div className="remaining-time-divs">
          <DayView daysCount={days} />
          <HourView hoursCount={hours} />
          <MinuteView minutesCount={minutes} />
          <SecondsView secondsCount={seconds} />
        </div>
        <button class="reset-button" role="button" onClick={ResetHandler}>
          Reset
        </button>
      </div>
    </>
  );
}

export default CoundownView;
