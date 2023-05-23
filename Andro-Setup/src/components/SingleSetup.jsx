import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SetupState } from "../SetupContext";
import { useNavigate, useParams } from "react-router-dom";

const SingleSetup = () => {
  const { singleSetup, setSingleSetup, homeSetups } = SetupState();
  const params = useParams();
  // console.log(params);
  const { setupid } = params;
  const navigate = useNavigate();
  // console.log(singleSetup);

  const {
    setupImage,
    title,
    id,
    setup_id,
    iconPack,
    launcher,
    uploadedDate,
    wallpaper,
    widgets,
  } = singleSetup;

  useEffect(() => {
    if (!title) navigate("/");
    window.scrollTo(0, 0);
    // {
    //   for(let setup of homeSetups) {
    //     console.log(setup?.node?.setup_id)
    //     if(setup?.node?.setup_id === setupid) {
    //       setSingleSetup(setup)
    //     }
    //     else {
    //       navigate('/')
    //     }
    //   }
    // }
  }, []);

  // console.log(homeSetups)

  return (
    <Box
      sx={{
        height: { sm: "100vh" },
        pt: "100px",
        display: "flex",
        alignItems: {
          xs: "center",
          sm: "start",
        },
        justifyContent: {
          xs: "start",
          sm: "space-between",
        },
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
          },
          my: "20px",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          px: { xs: "10px", sm: "30px" },
          py: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={setupImage?.url}
          alt={title}
          sx={{
            width: "100%",
            // height: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            backgroundColor: "#f8f9fa",
            borderRadius: {
              xs: "10px",
              md: "20px",
            },
            margin: "20px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          flexDirection: "column",
          width: { xs: "100%", lg: "50%" },
          my: { sm: "50px" },
          px: { xs: "10px", md: "30px" },
          mb: { xs: "50px", sm: "0px" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              md: "30px",
            },
            fontWeight: 600,
            color: "#D05270",
            mb: "10px",
            borderBottom: "4px solid #D05270",
            pr: "15px",
          }}
        >
          {title}{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 600,
              color: "#1d3557",
            }}
          >
            Launcher :
          </Typography>
          <a
            target="_blank"
            href={`https://play.google.com/store/search?q=${launcher}&c=apps`}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "20px",
                },
                fontWeight: 500,
                color: "#457b9d",
                textAlign: "center",
              }}
            >
              {" "}
              {launcher}
            </Typography>
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 600,
              color: "#1d3557",
            }}
          >
            Icon Pack :
          </Typography>
          <a
            target="_blank"
            href={`https://play.google.com/store/search?q=${iconPack}&c=apps`}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "20px",
                },
                fontWeight: 500,
                color: "#457b9d",
              }}
            >
              {" "}
              {iconPack}
            </Typography>
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 600,
              color: "#1d3557",
            }}
          >
            Date :
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 500,
              color: "#457b9d",
            }}
          >
            {" "}
            {uploadedDate}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 600,
              color: "#1d3557",
            }}
          >
            Widget(s) :
          </Typography>
          {widgets?.map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "20px",
                },
                fontWeight: 500,
                color: "#457b9d",
                textTransform: "capitalize",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        {wallpaper?.length && (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              alignItems: "center",
              pt: "30px",
            }}
          >
            <a href={wallpaper} download>
              <Button variant="contained" size="small">
                Download Wallpaper
              </Button>
            </a>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SingleSetup;
