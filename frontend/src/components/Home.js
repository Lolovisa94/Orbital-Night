import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Button variant="contained" class="home-button"
        onClick={() => navigate("/Hummpe")}>H</Button>
        <Button variant="contained" class="home-button"
        onClick={() => navigate("/Lovisa")}>L</Button>
      </Box>
    );
  };

  export default Home;