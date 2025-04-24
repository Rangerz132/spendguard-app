const Gauge = (props: { value: number; maxValue: number }) => {
  const percentile = (props.value / props.maxValue) * 100;
  const clampedValue = Math.max(0, Math.min(percentile, 100));
  return (
    <div className="w-full h-2 rounded-full bg-black theme-light:bg-theme-light-grey">
      <div
        className={`h-full rounded-full `}
        style={{
          width: `${clampedValue}%`,
          backgroundImage: `linear-gradient(270deg, rgba(74, 58, 255, 1) 0%, rgba(74, 58, 255, 0.40) 75%)`,
        }}
      ></div>
    </div>
  );
};

export default Gauge;
