import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com/_himanshuyadav7/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/_himanshuyadav7" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://github.com/yhimanshu-yadav" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Himanshu Yadav
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
