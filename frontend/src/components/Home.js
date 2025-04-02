import React from "react";
import { Avatar, Box } from "@mui/material";

const Home = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Avatar
          alt="Avatar 1"
          src="https://via.placeholder.com/150"
          sx={{ width: 150, height: 150, margin: 2 }}
        />
        <Avatar
          alt="Avatar 2"
          src="https://via.placeholder.com/150"
          sx={{ width: 150, height: 150, margin: 2 }}
        />
      </Box>
    );
  };

  export default Home;