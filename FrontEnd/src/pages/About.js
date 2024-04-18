import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h3">Welcome To Bite Buddy</Typography>
        <p>
        Bite Buddy extends a warm welcome to our esteemed patrons, inviting them to delve into the essence of our culinary ethos through our 'About' section. As purveyors of gastronomic delight, we recognize the pivotal role food plays in fostering cultural exchange and communal bonds. At Bite Buddy, our unwavering commitment to culinary excellence is matched only by our dedication to customer satisfaction. Behind every meticulously crafted dish lies a harmonious blend of tradition, innovation, and uncompromising quality standards. Our team, comprised of seasoned professionals deeply entrenched in the culinary arts, endeavors to curate an unparalleled dining experience for our discerning clientele.
        </p>
        <br />
        <p>
        Within the confines of Bite Buddy's 'About' segment, patrons are granted an exclusive glimpse into the meticulous craftsmanship and unwavering dedication that define our culinary narrative. With a profound reverence for gastronomic heritage and an unyielding pursuit of culinary innovation, Bite Buddy stands as a beacon of excellence in the realm of food delivery services. Rooted in the principles of transparency, integrity, and unwavering customer focus, our establishment strives to transcend mere sustenance, aiming instead to elevate every dining experience into a moment of culinary transcendence. Embark on a gastronomic odyssey with Bite Buddy, where every meal is an homage to the rich tapestry of global cuisine.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
