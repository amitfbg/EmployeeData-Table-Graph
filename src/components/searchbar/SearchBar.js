import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import Clear from "@mui/icons-material/Clear";

const Container = styled.div`
  min-width: 15rem;
  margin-left: 1rem;
`;

function SearchBar({
  id,
  type,
  label,
  placeholder,
  handleSearchChange,
  currStateSet,
  currValue,
}) {
  return (
    <Container>
      <TextField
        id={id}
        type={type || "text"}
        label={label || "Default"}
        value={currValue || ""}
        variant="outlined"
        fullWidth
        placeholder={placeholder || "please enter "}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  currStateSet("");
                }}
                edge="end"
              >
                {currValue !== "" && <Clear />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}

export default SearchBar;
