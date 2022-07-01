import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

function Square(props: any) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper
                elevation={0}
                variant="outlined"
                square
                onClick={props.onClick}
            >
                <Typography variant="h1" align="center">
                    {props.value}
                </Typography>
            </Paper>
        </Box>
    );
}

export default Square;
