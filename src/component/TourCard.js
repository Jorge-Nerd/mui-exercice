import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme= createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:'body2',
                    },
                    style:{
                        fontSize:11,
                    },
                },
                {
                    props:{
                        variant:'body3',
                    },
                    style:{
                        fontSize:9,
                    },
                },
            ],
        },
    },
});

const TourCard = () => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
        <ThemeProvider theme={theme}>

        <Paper elevation={3}>
        <img
          className="img"
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse in to the Falls
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 Hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop='1.5rem'
          >
            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1}>
            (655 reviews)
            </Typography>
          </Box>
          <Typography variant="h6" component="h3" marginTop={0}>
              From C $147
            </Typography>
        </Box>
      </Paper>
        </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
