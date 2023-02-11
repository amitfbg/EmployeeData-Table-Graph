import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

function Table({ data, column, ...otherProps }) {
  return (
    <div>
      <ReactTable data={data} columns={column} {...otherProps} />
    </div>
  );
}

export default Table;
