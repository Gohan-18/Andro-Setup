import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { getAllSetups } from '../../services/graphQl'
import { request, gql } from "graphql-request";
import { SetupState } from "../SetupContext";
import { useNavigate } from "react-router-dom";
// import { request, gql } from "graphql-request";
// import { SetupState } from "../src/SetupContext";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

// https://play.google.com/store/search?q=minimalkwgt&c=apps

const HomeSetups = () => {
  const limitedSetup = [];
  const { homeSetups, setHomeSetups, toggleShowAll, setToggleShowAll, singleSetup, setSingleSetup } = SetupState();
  console.log(singleSetup)
  // const [ limitedSetups, setLimitedSetups ] = useState([]);
  // const [toggleShowAll, setToggleShowAll] = useState(false);
  const navigate = useNavigate();

  const getAllSetups = async () => {
    const query = gql`
      query MyQuery {
        setups_Connection {
          edges {
            node {
              iconPack
              id
              launcher
              setup_id
              title
              uploadedDate
              wallpaper
              widgets
              setupImage {
                url
              }
            }
          }
        }
      }
    `;

    await request(graphqlAPI, query)
      .then((result) => {
        const data = result.setups_Connection.edges;
        // console.log(data)
        setHomeSetups(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(data)
    // return data;
  };

  // useEffect(() => {
  //   getAllSetups();
  // }, []);

  if (!homeSetups.length) {
    getAllSetups();
  }

  // useEffect(() => {
  //   const fetchSetups = async () => {
  //     const { products } = await request(
  //       'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master',
  //       `
  //       query MyQuery {
  //       setups_Connection {
  //         edges {
  //           node {
  //             iconPack
  //             id
  //             launcher
  //             setup_id
  //             title
  //             uploadedDate
  //             wallpaper
  //             widgets
  //           }
  //         }
  //       }
  //     }
  //   `);

  //     setHomeSetups(products);
  //   };

  //   fetchSetups();
  // }, []);

  // homeSetups?.forEach((element, index ) => {
  //   limitedSetup.push(element);
  // });

  if (homeSetups) {
    for (let i = 0; i < 4; i++) {
      limitedSetup.push(homeSetups[i]);
    }
  }

  console.log(limitedSetup);

  return (
    <>
      {!homeSetups.length ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            py: "50px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            py: "50px",
          }}
        >
          <Grid container spacing={5} sx={{ py: "50px" }}>
            {!toggleShowAll
              ? limitedSetup?.map((item) => {
                  const {
                    node: { setupImage, title, id, setup_id, iconPack, launcher, uploadedDate, wallpaper, widgets},
                  } = item;
                  return (
                    <Grid item key={id} xs={12} sm={6}>
                      <Card
                        onClick={() => {
                          setSingleSetup({setupImage, title, id, setup_id, iconPack, launcher, uploadedDate, wallpaper, widgets})
                          navigate(`/Setup/${setup_id}`)
                        }}
                        sx={{
                          height: "100%",
                          width: "100%",
                          position: "relative",
                          borderRadius: "10px",
                          background: "none",
                          transition: "0.5s",
                          "&:hover": {
                            transform: {
                              xs: "scale(1.03,1.03)",
                              md: "scale(1.03,1.03)",
                            },
                            backgroundColor: "#333533",
                          },
                        }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={setupImage?.url}
                            alt={title}
                            sx={{
                              // maxHeight: '300px',
                              // width: "400px",
                              // height: "400px",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              backgroundColor: "#f8f9fa",
                            }}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })
              : homeSetups?.map((item) => {
                  const {
                    node: { setupImage, title, id, setup_id },
                  } = item;
                  return (
                    <Grid item key={id} xs={12} sm={6}>
                      <Card
                        onClick={() => navigate(`/Setup/${setup_id}`)}
                        sx={{
                          height: "100%",
                          width: "100%",
                          position: "relative",
                          borderRadius: "10px",
                          background: "none",
                          transition: "0.5s",
                          "&:hover": {
                            transform: {
                              xs: "scale(1.03,1.03)",
                              md: "scale(1.03,1.03)",
                            },
                            backgroundColor: "#333533",
                          },
                        }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={setupImage?.url}
                            alt={title}
                            sx={{
                              // maxHeight: '300px',
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
          </Grid>

          <Button
            onClick={() => setToggleShowAll(true)}
            variant="outlined"
            fullWidth
            sx={{ py: "20px", display: toggleShowAll ? "none" : "flex" }}
          >
            Show All
          </Button>
        </Box>
      )}
    </>
  );
};

export default HomeSetups;

{
  /* <CardContent 
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                justifyContent: 'center', 
                width: '100%'
            }} >
            <Typography 
                variant='h5' 
                component='h2' 
                gutterBottom 
                sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                fontSize: '14px', 
                fontWeight: '500'
            }}>
            {snippet.title}
            </Typography>
            <Typography  
                gutterBottom 
                paragraph
                color='text.secondary'
                sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                fontSize: '12px', 
                fontWeight: '500'
            }}>
                {snippet.channelTitle}
            </Typography>
            <Typography  
                gutterBottom 
                paragraph
                color='text.secondary'
                sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                fontSize: '10px', 
                fontWeight: '500'
            }}>
                Published at: {snippet.publishedAt.slice(0,10)}
            </Typography>
            </CardContent> */
}
