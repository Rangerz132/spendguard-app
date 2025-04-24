import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomBarChart = (props: { data: any[] }) => {
  const textSize = 10;
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={500} height={300} data={props.data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
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
          dataKey="value2"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          width={25}
        ></YAxis>
        <CartesianGrid opacity={0.025} />

        <Bar
          dataKey="value2"
          fill="url(#color)"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
