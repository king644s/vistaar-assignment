import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import AddressForm from "./addressForm";
import AddressCard from "./addressCard";

const Address = () => {
  const [formdata, setFormData] = useState([]);

  const handleFormChange = (data) => {
    // return console.log(data, "ckjvdasfv");
    setFormData((prev) => [...prev, data]);
  };

  const removeObjectFromArray = (address) => {
    setFormData((prevArray) =>
      prevArray.filter((obj) => obj.address !== address)
    );
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={5}>
          <AddressForm addData={handleFormChange} />
        </Grid>
        <Grid item xs={7}>
          <AddressCard data={formdata} removeCard={removeObjectFromArray} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Address;
