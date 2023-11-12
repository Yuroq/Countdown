function HourView(props) {
  const hoursCount = props.hoursCount;
  return (
    <div className="Hour-view">
      <div>
      <h2 className="count-label">Hours</h2>
        <h2 className="Hour-count">
          {!isNaN(+hoursCount) && hoursCount > 0 ? hoursCount : 0}
        </h2>
      </div>
    </div>
  );
}

export default HourView;
