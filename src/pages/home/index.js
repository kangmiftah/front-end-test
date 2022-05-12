import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
// import Grid from '@mui/material/Grid';
import { ListItem } from '../../components'
import { Box, Grid } from '@mui/material';
import { test, getData } from '../../_actions'

export default function () {
    const disp = useDispatch();
    const home = useSelector(({ home }) => home);
    const { data, loading } = home 
    useEffect(function(){
        disp(getData())
    },[])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid>

                    <ListItem
                        isLoading={loading}
                        data={data}
                        field={{
                            body:"body",
                            title:"title"
                        }}
                        withActions={true}
                        actions={[
                            {
                                name:"Read Post"
                            }
                        ]}
                    />
                </Grid>
            </Box>
        </>
    )
}