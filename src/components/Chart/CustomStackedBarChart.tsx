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

const CustomStackedBarChart = () => {
  const textSize = 10;
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={500} height={200} data={data}>
        <defs>
          <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a3aff" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#4a3aff" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          height={textSize}
        ></XAxis>
        <XAxis
          dataKey="value1"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          height={textSize}
        ></XAxis>
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#949494", fontSize: 10 }}
          width={25}
        ></YAxis>
        <Bar dataKey="pv" stackId="a" fill="url(#color1)" />
        <Bar dataKey="uv" stackId="a" fill="#4a3aff" />
        <CartesianGrid opacity={0.025} />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomStackedBarChart;
