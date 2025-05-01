import {
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomLineChart = (props: { data: unknown[] }) => {
  const textSize = 10;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={props.data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a3aff" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#4a3aff" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          dataKey="value2"
          stroke="#4a3aff"
          fill="url(#color)"
          type="monotone"
        ></Area>
        <XAxis
          dataKey="value1"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          height={textSize}
        ></XAxis>
        <YAxis
          dataKey="value2"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          width={25}
        ></YAxis>
        <CartesianGrid opacity={0.025} />
        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
