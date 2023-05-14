import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import { Container, Grid } from '@mui/material';
import React from 'react';

function SkeletonLoading() {

    const skeletonArray = [1,2,3,4,5,6] 

return (
    // <Container maxWidth='lg'>
    <Grid container spacing={3} sx={{width: '100vw'}} >
        {skeletonArray.map((item) => (
            <Grid item key={item} xs={12} sm={4} >
            <Card >
                <Skeleton sx={{ height: 300 }} animation="wave" variant="rectangular" />
            </Card>
            </Grid>
        ))}
        
    </Grid>
    // </Container>

    
);
}

export default SkeletonLoading;
