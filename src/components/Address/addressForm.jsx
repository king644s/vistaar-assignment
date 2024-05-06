import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const AminitiesData = [
  "Swimming pool",
  "Gym/fitness center",
  "On-site laundry",
  "Parking space",
  "Balcony/patio",
  "Central heating/air conditioning",
  "Dishwasher",
  "Pet-friendly",
];

const UtilitiesData = [
  "Water",
  "Electricity",
  "Gas",
  "Internet",
  "Cable/satellite TV",
  "Trash/recycling",
];

const InitialData = {
  address: "",
  type: "",
  aminities: {},
  utilities: "",
  selectUtilities: [],
};
const initialCheckBoxData = {
  "Swimming pool": false,
  "Gym/fitness center": false,
  "On-site laundry": false,
  "Parking space": false,
  "Balcony/patio": false,
  "Central heating/air conditioning": false,
  Dishwasher: false,
  "Pet-friendly": false,
};

function displayTrueAmenities(amenities) {
  const trueAmenities = [];
  for (const [key, value] of Object.entries(amenities)) {
    if (value === true) {
      trueAmenities.push(key);
    }
  }
  return trueAmenities;
}

const AddressForm = ({ addData }) => {
  const [formData, setFormData] = useState(InitialData);
  const [checkBoxData, setCheckBoxData] = useState(initialCheckBoxData);
  console.log(formData, checkBoxData, "kjafd");
  const handleFormChange = ({ target: { name, value } }) => {
    if (value === name) {
      setCheckBoxData((prev) => ({ ...prev, [name]: !checkBoxData[name] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    addData({
      ...formData,
      AminitiesData: displayTrueAmenities(checkBoxData),
    });
    setFormData(InitialData);
    setCheckBoxData(initialCheckBoxData);
  };
  return (
    <>
      <form>
        <Grid container rowGap={5}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel>Property Address</FormLabel>
              <TextField
                multiline
                rows={5}
                value={formData.address}
                name="address"
                onChange={handleFormChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Property Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.type}
                name="type"
                label="Property Type"
                onChange={handleFormChange}
              >
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Condo">Condo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel>Aminities</FormLabel>
              {AminitiesData.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox checked={checkBoxData[item]} />}
                    onChange={handleFormChange}
                    label={item}
                    name={item}
                    value={item}
                  />
                );
              })}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Utilities
              </FormLabel>
              <RadioGroup
                row
                value={formData.utilities}
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={handleFormChange}
                name="utilities"
              >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formData.utilities == "yes" ? (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label">
                  Select utilities
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  name="selectUtilities"
                  value={formData.selectUtilities}
                  onChange={handleFormChange}
                  input={<OutlinedInput label="Select utilities" />}
                  // MenuProps={MenuProps}
                >
                  {UtilitiesData.map((name) => {
                    return (
                      <MenuItem
                        key={name}
                        value={name}
                        // style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AddressForm;
