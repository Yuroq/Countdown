import { useState } from "react";
import "../Styles/InputField.css";
import InputSelectors from "./InputSelectors";

function InputField(props) {
  const [monthInput, setMonthInput] = useState("");
  const [dayInput, setDayInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const setHourInput = props.setHourInput;
  const setInputDate = props.setInputDate;
  const setMinuteInput = props.setMinuteInput
  const setAmPm = props.setAmPm
  const setInvalidInputMessage = props.setInvalidInputMessage
  const onClickHandler = () => {
    if(monthInput == "" || dayInput == "" || yearInput == "") {
setInvalidInputMessage(true)
    }
    setInputDate(`${monthInput} ${dayInput} ${yearInput}`);
  };
console.log(monthInput)
  return (
    <div className="input-Field-Div">
      <select
        className="select select-info w-full max-w-xs"
        onChange={(input) => setMonthInput(input.target.value)}
      >
        <option disabled selected>
          Select Month
        </option>
        {InputSelectors.months.map((month) => {
          return <option>{month}</option>;
        })}
      </select>
      <select
        className="select select-info w-full max-w-xs"
        onChange={(input) => setDayInput(input.target.value)}
      >
        <option disabled selected>
          Select Day
        </option>
        {InputSelectors.days.map((day) => {
          return <option>{day}</option>;
        })}
      </select>
      <select
        className="select select-info w-full max-w-xs"
        onChange={(input) => setYearInput(input.target.value)}
      >
        <option disabled selected>
          Select Year
        </option>
        {InputSelectors.years.map((year) => {
          return <option>{year}</option>;
        })}
      </select>
      <select
        className="select select-info w-full max-w-xs"
        onChange={(input) => setHourInput(input.target.value)}
      >
        <option disabled selected>
          Select Hour
        </option>
        {InputSelectors.hours.map((hour) => {
          return <option>{hour}</option>;
        })}
      </select>
        <select
        className="select select-info w-full max-w-xs"
        onChange={(input) => setMinuteInput(input.target.value)}
      >
        <option disabled selected>
          Select Minute
        </option>
        {InputSelectors.minutes.map((minute) => {
          return <option>{minute}</option>;
        })}
      </select>
      <div className="AmPM-div">
      <select
        className="select select-info w-full max-w-xs"
        onChange={(input) => setAmPm(input.target.value)}
      >
        <option disabled selected>
          Time
        </option>
        {InputSelectors.time.map((time) => {
          return <option>{time}</option>;
        })}
      </select>
      </div>
      <div className="start-btn">
      <button className="btn btn-active btn-secondary" onClick={onClickHandler}>
        Start!
      </button>
      </div>
    </div>
  );
}

export default InputField;
