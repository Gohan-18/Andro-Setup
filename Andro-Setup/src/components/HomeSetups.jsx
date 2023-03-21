import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { getAllSetups } from '../../services/graphQl'
import { request, gql } from "graphql-request";
import { SetupState } from '../SetupContext';
// import { request, gql } from "graphql-request";
// import { SetupState } from "../src/SetupContext";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

// https://play.google.com/store/search?q=minimalkwgt&c=apps

const HomeSetups = () => {

  const { homeSetups, setHomeSetups } = SetupState();

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
      console.log(data)
      setHomeSetups(data);
  })
  .catch((error) => {
      console.log(error)
  })

  // console.log(data)
  // return data;
};

  useEffect(() => {
    getAllSetups();
  }, [])
  

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

  // const setups = getAllSetups()

  // setHomeSetups(setups)

  console.log(homeSetups)

  return (
    <>
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
    {/* <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap : 4, py: '50px' }} > */}
    <Grid container spacing={5} sx={{py: '50px'}} >
    {homeSetups?.map((item) => {

      const { node: { setupImage, title, id } } = item;
      // xs={12} sm={6} md={3}
    return (   
    // <Box key={id} sx={{width: '40%'}}  >
    <Grid item key={id} xs={12} sm={6} >
    <Card 
        sx={{
            height: '100%',
            width: '100%',
            position: 'relative',
            borderRadius: '10px', 
            background: 'none', 
            transition: '0.5s',
            '&:hover': {
            transform: {
                xs: 'scale(1.03,1.03)',
                md:'scale(1.03,1.03)'
            },
            backgroundColor: '#333533',
            }
            }} >
        <CardActionArea
            sx={{
            height:'100%', 
            width: '100%',
            display:'flex', 
            flexDirection:'column', 
            position: 'relative',
            }}
            >
            <CardMedia                 
            component='img' 
            image={setupImage?.url} 
            alt={title}
            sx={{
                // maxHeight: '300px',
                width:'100%', 
                height:'100%', 
                objectFit:'cover',
            }}
            />
            {/* <CardContent 
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
            </CardContent> */}

        </CardActionArea>
        </Card>
        {/* </Box> */}
        </Grid>

        )})}
      {/* </Box> */}
      </Grid>
    </Box>
    </>
  )
}

export default HomeSetups