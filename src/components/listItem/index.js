import React from 'react';
import { 
    Typography, 
    Card, 
    CardMedia, 
    CardActionArea, 
    CardActions, 
    Button, 
    CardContent,
    Divider
} from '@mui/material';

export default function ({
    data = [{
        title: "Lizard",
        body:` Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica`
    }],
    field = {
        body: "body",
        title: "title",
        media: "media"
    },
    withImage = false,
    withActions = false,
    actions = []

}) {


    return (
        <>
        {
            data.map( (v, i) => (
                <>
                <Card key={i} sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        { withImage && <CardMedia
                            component="img"
                            height="240"
                            image={v[field.media]}
                            alt="green iguana"
                        />}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {v[field.title]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               {v[field.body]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {
                        withActions && (
                            <CardActions>
                                {
                                    (actions || []).map(({
                                        name = "",
                                        onclick = (e) => null
                                    }, j)=>{

                                        return(
                                            <Button onClick={()=> onclick(v)} key={j} size="small" color="primary">
                                                {name}
                                            </Button>
                                        )
                                    })
                                }
                                
                            </CardActions>
                        )
                    }
                </Card>
                <Divider />
                </>
            ))
        }
        </>
    )
}