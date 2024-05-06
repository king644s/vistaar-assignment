import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedicinesReducer } from "../../state/slices/medicineSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const initialState = {
  name: "",
  cause: "",
  type: "",
  startTime: null,
  endTime: null,
};
const Admin = () => {
  const MedicineReduxData = useSelector((state) => state.medicine.data);
  const [medicineData, setMedicineData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setMedicineData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMedicine = () => {
    dispatch(addMedicinesReducer(medicineData));
    setMedicineData(initialState);
  };

  console.log(MedicineReduxData, medicineData, "vdvgf");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Doctor's zone add the pills</Typography>
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Name</InputLabel>
          <TextField
            onChange={handleChange}
            value={medicineData.name}
            name="name"
            placeholder="Name"
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Cause</InputLabel>
          <TextField
            onChange={handleChange}
            value={medicineData.cause}
            name="cause"
            placeholder="Cause"
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Type</InputLabel>
          <TextField
            onChange={handleChange}
            value={medicineData.type}
            name="type"
            placeholder="Type"
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Start Time</InputLabel>
          <DatePicker
            value={medicineData.startTime}
            onChange={(value) =>
              setMedicineData((prev) => ({ ...prev, startTime: value }))
            }
            name="startTime"
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel>End Time</InputLabel>
          <DatePicker
            value={medicineData.endTime}
            minDate={medicineData.startTime ? medicineData.startTime : null}
            onChange={(value) =>
              setMedicineData((prev) => ({ ...prev, endTime: value }))
            }
            name="endTime"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={handleAddMedicine}
            disabled={
              medicineData.cause === "" ||
              medicineData.endTime === null ||
              medicineData.name === "" ||
              medicineData.startTime === null ||
              medicineData.type === ""
            }
          >
            Add
          </Button>
        </Grid>
        {MedicineReduxData.length > 0
          ? MedicineReduxData.map((item, index) => {
              return (
                <Grid key={index} item xs={12}>
                  <Typography variant="h5">Pill {index + 1} </Typography>
                  <Typography variant="body1">
                    Name :{item.name ? item.name : ""}
                  </Typography>
                  <Typography variant="body1">
                    Cause :{item.cause ? item.cause : ""}
                  </Typography>
                  <Typography variant="body1">
                    Type :{item.type ? item.type : ""}
                  </Typography>
                  <Typography variant="body1">
                    Start Time :{item.startTime ? item.startTime.format() : ""}
                  </Typography>
                  <Typography variant="body1">
                    End Time :{item.endTime ? item.endTime.format() : ""}
                  </Typography>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </LocalizationProvider>
  );
};

export default Admin;
