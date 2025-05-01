import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomStackedBarChart = (props: { data: unknown[] }) => {
  const textSize = 10;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={500} height={200} data={props.data}>
        <defs>
          <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a3aff" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#4a3aff" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="value1"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          height={textSize}
        ></XAxis>
        <YAxis
          dataKey="value3"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          width={25}
        ></YAxis>
        <Bar dataKey="value2" stackId="a" fill="#4a3aff" />
        <Bar dataKey="value3" stackId="a" fill="url(#color1)" />
        <CartesianGrid opacity={0.025} />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomStackedBarChart;
