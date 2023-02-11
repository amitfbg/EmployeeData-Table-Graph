import React, { useMemo } from "react";
import "./App.css";
import { formatDataSet, getTotal } from "./utils";
import dataSet from "./EmployeeDataset.json";
import Table from "./components/react-table/Table";

function App() {
  const tableData = useMemo(() => {
    return formatDataSet(dataSet);
  }, []);

  const tableColumn = [
    {
      Header: "Location",
      accessor: "location",
      Footer: "Total",
    },
    {
      Header: "Salary",
      accessor: "salary",
      Cell: (props) => (
        <span className="number">${props?.value?.toLocaleString("en-US")}</span>
      ),
      Footer: () => <span className="number">${getTotal(tableData)}</span>,
    },
  ];

  return (
    <div className="App">
      <Table column={tableColumn} data={tableData} />
    </div>
  );
}

export default App;
