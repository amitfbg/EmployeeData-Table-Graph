import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Table from "../components/react-table/Table";
import SearchBar from "../components/searchbar/SearchBar";
import TabBar from "../components/tab-bar/TabBar";
import { formatDataSet, getTotal } from "../utils";
import dataSet from "../EmployeeDataset.json";
import BarGraph from "../components/bar-graph/BarGraph";

const Container = styled.div`
  height: 100%;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: green;
`;
const TabAndSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
`;
const ContainerBody = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: calc(100vh - 10rem);
`;

const tabOptions = [
  { label: "Table View", value: "table-view", id: "table-view" },
  { label: "Graph View", value: "graph-view", id: "graph-view" },
];

function MainView() {
  const [selectedTab, setSelectedTab] = useState("table-view");
  const [searchedData, setSearchedData] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const tableData = useMemo(() => {
    const temp = formatDataSet(dataSet);
    setFilteredList(temp);
    return temp;
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
      Cell: (props) => "$" + props?.value?.toLocaleString("en-US"),
      Footer: () => <span>${getTotal(filteredList)}</span>,
    },
  ];

  useEffect(() => {
    let filteredData = tableData;
    filteredData = filteredData?.filter((curr) =>
      curr?.["location"]?.toLowerCase()?.includes(searchedData?.toLowerCase())
    );
    setFilteredList(filteredData);
  }, [searchedData, tableData]);

  function handleTabChange(event, newValue) {
    setSelectedTab(newValue);
  }

  function handleSearchChange(e) {
    setSearchedData(e.target.value);
  }

  function getSelectedTabContent() {
    if (selectedTab === "table-view") {
      return (
        <Table
          column={tableColumn}
          data={filteredList}
          resolveData={(filteredList) => filteredList}
          showPaginationBottom={false}
          showPageSizeOptions={false}
          defaultPageSize={10}
        />
      );
    }
    if (selectedTab === "graph-view") {
      return <BarGraph data={filteredList} />;
    }
    return <div></div>;
  }

  return (
    <Container>
      <Header>Employee Data View</Header>
      <TabAndSearchContainer>
        <TabBar
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
          tabOptions={tabOptions}
        />
        <SearchBar
          id="search-bar"
          type="text"
          label="Search"
          placeholder="Please type Location"
          handleSearchChange={handleSearchChange}
          currStateSet={setSearchedData}
          currValue={searchedData}
        />
      </TabAndSearchContainer>
      <ContainerBody>{getSelectedTabContent()}</ContainerBody>
    </Container>
  );
}

export default MainView;
