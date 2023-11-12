function MinuteView(props) {
  const minutesCount = props.minutesCount;
  return (
    <div className="Minute-view">
      <div>
      <h2 className="count-label">Minutes</h2>
        <h2 className="Minute-count">
          {!isNaN(+minutesCount) && minutesCount > 0 ? minutesCount : 0}
        </h2>
      </div>
    </div>
  );
}

export default MinuteView;
