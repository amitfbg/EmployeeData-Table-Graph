import React from "react";
import { BarChart, Bar, XAxis, YAxis, Label } from "recharts";

function BarGraph({ data }) {
  console.log(data);
  return (
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 50,
        bottom: 30,
      }}
    >
      <XAxis dataKey="location">
        <Label value="Location" offset={-10} position="insideBottom" />
      </XAxis>
      <YAxis />
      <Bar dataKey="salary" fill="#8884d8" />
    </BarChart>
  );
}

export default BarGraph;
