function SecondsView(props) {
  const secondsCount = props.secondsCount;
  return (
    <div className="Seconds-view">
      <div>
      <h2 className="count-label">Seconds</h2>
        <h2 className="seconds-count">
          {!isNaN(+secondsCount) && secondsCount > 0 ? secondsCount : 0}
        </h2>
      </div>
    </div>
  );
}

export default SecondsView;
