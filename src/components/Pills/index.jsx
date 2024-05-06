import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import * as ics from "ics";

const dateGenerator = (inputDateString) => {
  const date = new Date(inputDateString);

  return [
    date.getFullYear(),
    date.getMonth() + 1, // Months are zero-based, so we add 1
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];
};

const Pills = () => {
  const MedicineReduxData = useSelector((state) => state.medicine.data);

  async function handleDownload(data) {
    const filename = "ExampleEvent.ics";
    const event = {
      start: dateGenerator(data.startTime.format()),
      end: dateGenerator(data.endTime.format()),
      title: data.name,
      description: `cause: ${data.cause}, type: ${data.type}, `,
    };
    const file = await new Promise((resolve, reject) => {
      ics.createEvent(event, (error, value) => {
        if (error) {
          reject(error);
        }

        resolve(new File([value], filename, { type: "text/calendar" }));
      });
    });
    const url = URL.createObjectURL(file);

    // trying to assign the file URL to a window could cause cross-site
    // issues so this is a workaround using HTML5
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }

  const downLoadInvite = (data) => {
    handleDownload(data);
    return;
  };

  return (
    <>
      <Grid container>
        {MedicineReduxData.length > 0 ? (
          MedicineReduxData.map((item, index) => {
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
                <Button
                  variant="contained"
                  onClick={() => downLoadInvite(item)}
                >
                  Download calender invite
                </Button>
              </Grid>
            );
          })
        ) : (
          <Typography variant="h4">Pills not added</Typography>
        )}
      </Grid>
    </>
  );
};

export default Pills;
