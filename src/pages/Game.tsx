import React from 'react';
import Board from './Board';
import { Card, CardContent, CardHeader } from '@mui/material';

function Game() {
    return (
        <Card
            sx={{ minWidth: 275, maxWidth: 460 }}
            elevation={0}
            variant="outlined"
        >
            <CardContent>
                <Board />
            </CardContent>
        </Card>
    );
}

export default Game;
