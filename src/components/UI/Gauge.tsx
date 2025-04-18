const Gauge = (props: { value: number; maxValue: number }) => {
  const percentile = (props.value / props.maxValue) * 100;
  const clampedValue = Math.max(0, Math.min(percentile, 100));
  return (
    <div className="w-full h-2 rounded-full bg-black theme-light:bg-theme-light-dark-grey">
      <div
        className={`h-full rounded-full bg-theme-dark-grey theme-light:bg-black left-0`}
        style={{ width: `${clampedValue}%` }}
      ></div>
    </div>
  );
};

export default Gauge;
