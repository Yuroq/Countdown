import "../../Styles/CoundownView.css";

function DayView(props) {
  const daysCount = props.daysCount;
  return (
    <div className="Day-view">
      <div>
      <h2 className="count-label">Days</h2>
        <h2 className="Day-count">
          {!isNaN(+daysCount) && daysCount > 0 ? daysCount : 0}
        </h2>
      </div>
    </div>
  );
}

export default DayView;
