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
  return data?.reduce((acc, curr) => +(+(acc + curr?.salary) / 2).toFixed(2), 0);
}

export { formatDataSet, getTotal };
