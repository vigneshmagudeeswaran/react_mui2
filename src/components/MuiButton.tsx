import React from "react";
import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MuiButton() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" href="https://google.com">
          Text
        </Button>
        <Button variant="outlined">Text</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          sucess
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button
            onClick={() => alert("left Clicked")}
            aria-label="alignment button group"
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
