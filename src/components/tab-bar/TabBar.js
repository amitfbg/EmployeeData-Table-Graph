import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

function TabBar({ selectedTab, handleTabChange, tabOptions }) {
  return (
    <Box sx={{ padding: "1rem" }}>
      <TabContext value={selectedTab}>
        <Box>
          <TabList onChange={handleTabChange}>
            {tabOptions?.map(({ label, value, id }) => (
              <Tab key={id} label={label} value={value} />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}

export default TabBar;
