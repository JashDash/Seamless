import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';


export default function DashboardComp() {
    return (
        <Box
            sx={{
                st: 1,
                padding: 2,
                width: "100%",
                height: 500,
                // backgroundColor: 'primary.dark',
            }}>
            <Typography variant="h5" color="primary" >
                Dashboard
            </Typography>
            <Stack direction="row" spacing={2} >
                <Card sx={{ maxWidth: 345, height: 200, width: 200 }} align='centre'>
                    
                    <CardHeader
                        avatar={
                            <DirectionsRunIcon fontSize='large' color = 'primary'/>
                        }
                    />
                    <CardContent>
                        <Typography variant="h3" color="primary">
                        459
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        RUNS
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
  }