import React from 'react';
import {
    Box, Grid, Divider,
    Accordion, AccordionDetails, AccordionSummary,
    Typography,
    Card,
    CardMedia,
    CardActionArea,
    CardActions,
    CardContent,
    Button,
    Skeleton
} from '@mui/material';
import { getDetail, getComments } from '../../_actions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ExpandMore } from '@mui/icons-material';
export default function () {
    const {
        data, loading, coments = [], commentsLoading
    } = useSelector(({ detail }) => detail);
    const { id } = useParams()
    const disp = useDispatch()

    React.useEffect(function () {
        disp(getDetail(id))
        disp(getComments(id))
    }, [])
    return (
        <>

            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={1}>
                    <Grid md={12}>
                        <div style={{
                            paddingLeft: 50,
                            paddingRight: 50
                        }}>

                            <h3>{
                                loading ? <Skeleton height={50} width="100%" /> : data.title
                            }</h3>

                            <div>
                                <p>
                                    {
                                       loading ? <Skeleton height={50} width="100%" /> : data.body
                                    }
                                </p>
                            </div>
                            {/* <span> {`${coments.length} komentar`} </span> */}
                            <Divider />
                            <div style={{
                                paddingBottom: 50,
                                marginTop: 20
                            }}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        { commentsLoading ? <Skeleton height={50} width="100%" /> : <Typography>
                                            { `${coments.length} komentar`}
                                        </Typography>}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {
                                            coments.map(({
                                                email,
                                                name,
                                                body
                                            }, i) => (
                                                <>
                                                    <Card key={i} sx={{ maxWidth: "100%", marginBottom:1 }}>
                                                        <CardActionArea>
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    {name}
                                                                </Typography>
                                                                <Typography variant="subtitle1">
                                                                    {email}
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    {body}
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                    <Divider />
                                                </>
                                            ))
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}