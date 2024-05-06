import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const AddressCard = ({ data, removeCard }) => {
  const handleDelete = (address) => {
    removeCard(address);
  };
  return (
    <Grid container>
      {data.length > 0
        ? data.map((item, index) => {
            return (
              <Grid
                container
                item
                xs={6}
                sx={{ padding: 2, border: "1px solid red" }}
              >
                <Grid item xs={12}>
                  <Typography variant="h6">Property Address:</Typography>
                  <Typography variant="body1">{item.address}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Property Type:</Typography>
                  <Typography variant="body1">{item.type}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Amminities</Typography>
                  <Typography variant="body1">
                    {item.AminitiesData.length > 0
                      ? item.AminitiesData.map((itemName, index) => {
                          return (
                            <span key={index}>
                              {itemName}
                              {" ,"}
                            </span>
                          );
                        })
                      : ""}
                  </Typography>
                </Grid>
                {item.utilities ? (
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      What utilities are included in rent ?
                    </Typography>
                    <Typography variant="body1">
                      {item.selectUtilities.length > 0
                        ? item.selectUtilities.map((itemName, index) => {
                            return (
                              <span key={index}>
                                {itemName}
                                {" ,"}
                              </span>
                            );
                          })
                        : ""}
                    </Typography>
                  </Grid>
                ) : null}
                <Grid item xs={12}>
                  <Button onClick={() => handleDelete(item.address)}>
                    Delete
                  </Button>
                </Grid>
              </Grid>
            );
          })
        : null}
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default AddressCard;
