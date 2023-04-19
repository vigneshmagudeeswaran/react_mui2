import React from "react";
import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1"> Heading</Typography>
      <Typography variant="h2"> Heading</Typography>
      <Typography variant="h3"> Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Heading 4
      </Typography>
      <Typography variant="h5" gutterBottom>
        Heading
      </Typography>
      <Typography variant="h6"> Heading</Typography>
      <Typography variant="subtitle1"> Sub title 1</Typography>
      <Typography variant="subtitle2"> Sub title 2</Typography>
      <Typography variant="body1">
        Mahendra Singh Dhoni commonly known as MS Dhoni, is a former Indian
        cricketer and captain of the Indian national team in limited-overs
        formats from 2007 to .
      </Typography>
      <Typography variant="body2">
        Mahendra Singh Dhoni commonly known as MS Dhoni, is a former Indian
        cricketer and captain of the Indian national team in limited-overs
        formats from 2007 to .
      </Typography>
    </div>
  );
}

export default MuiTypography;
