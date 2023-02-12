import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import GeneralComponent from "../GeneralComponent/GeneralComponent";

function BarGraph({ data }) {
  function getComponentToRender() {
    if (data && Array.isArray(data) && data.length) {
      return (
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 35,
              bottom: 30,
            }}
          >
            <XAxis dataKey="location">
              <Label value="Location" offset={-10} position="insideBottom" />
            </XAxis>
            <Tooltip isAnimationActive={false} />
            <YAxis />
            <Bar dataKey="salary" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return <GeneralComponent val="NoData" />;
    }
  }

  return getComponentToRender();
}

export default BarGraph;
