function formatDataSet(data) {
  let output = {};
  if (Array.isArray(data) && data.length) {
    data.forEach((currObj) => {
      let tempLocation = currObj?.location;
      let tempSalary = Number(currObj?.currSalary?.replace(/\$/g, "")) || 0;
      if (output[tempLocation]) {
        output[tempLocation] = +(output[tempLocation] + tempSalary).toFixed(2);
      } else {
        output[tempLocation] = tempSalary;
      }
    });
  }
  let tableData = [];
  for (let key in output) {
    tableData.push({ location: key, salary: output[key] });
  }
  output = {};
  return tableData;
}

function getTotal(data) {
  if (data && Array.isArray(data) && data.length)
    return +(
      data.reduce((acc, curr) => +(acc + curr?.salary).toFixed(2), 0) /
      data.length
    ).toFixed(2);
  return 0;
}

export { formatDataSet, getTotal };
