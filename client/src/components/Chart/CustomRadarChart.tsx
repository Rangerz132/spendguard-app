import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const CustomRadarChart = (props: { data: any[] }) => {
  return (
    <ResponsiveContainer width="75%" height={200}>
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={props.data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a3aff" stopOpacity={0.7} />
            <stop offset="50%" stopColor="#4a3aff" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <PolarGrid opacity={0.05} />
        <PolarAngleAxis dataKey="value1" />
        <PolarRadiusAxis opacity={0.05} />
        <Radar
          dataKey="value2"
          stroke="#4a3aff"
          fill="url(#color)"
          fillOpacity={0.05}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;
