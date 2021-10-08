import {
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import * as React from "react";

import Card from '@mui/material/Card';
import CircleIcon from "@mui/icons-material/Circle";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import classes from './WelcomeMessage.module.css';

function WelcomeMessage(props) {
  const [alignment, setAlignment] = React.useState("All");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  console.log(props.timestamp)
  let timestring

  try {
    const lu = new Date(props.timestamp[0].timestamp * 1000)
    timestring = lu.toLocaleString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric'}) + " at " + lu.toLocaleString(navigator.language, {hour: 'numeric', minute: 'numeric'})
  } catch (e) {
    timestring = "Loading..."
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Typography variant="h4">
          <b>Welcome to LaundryConnect 2.0! </b>
        </Typography>
        <Typography variant="h6">
          Because Laundry Connect sucks at web design, and WPI deserves a better how-busy-is-the-laundry-room experience.
        </Typography>
        <Card className={classes.card}>
          <List>
        <div style={{display: "inline-flex"}}>
        <ListItem>
        <CircleIcon fontSize="small" style={{ color: '#90ee90' }} />&nbsp;
                <Typography>
                  Available
                </Typography>
  </ListItem>
                
              </div>
              <div style={{display: "inline-flex"}}>
              <ListItem>
        <CircleIcon fontSize="small" style={{ color: '#fdec96' }} />&nbsp;
                <Typography>
                  Almost Done
                </Typography>
                </ListItem>
              </div>
              <div style={{display: "inline-flex"}}>
              <ListItem>
        <CircleIcon fontSize="small" style={{ color: '#fdb996' }} />&nbsp;
                <Typography>
                  In Use
                </Typography>
                </ListItem>
              </div>
              <div style={{display: "inline-flex"}}>
              <ListItem>
        <CircleIcon fontSize="small" style={{ color: '#fc647d' }} />&nbsp;
                <Typography>
                  Just Started
                </Typography>
                </ListItem>
              </div>
              <div style={{display: "inline-flex"}}>
              <ListItem>
        <CircleIcon fontSize="small" style={{ color: '#000000' }} />&nbsp;
                <Typography>
                  Out of Order
                </Typography>
                </ListItem>
              </div>
              </List>
        </Card>
        <Typography variant="small">
          Last updated: {timestring}
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            onClick={() => {
              props.setFavorites(false);
            }}
            value="All"
          >
            All Locations
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              props.setFavorites(true);
            }}
            value="Selected"
          >
            Favorite Locations
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </div>
  );
}

export default WelcomeMessage;
