import React, { useEffect, useState } from 'react';
import Square from './Square';
import { attemptClick, resetClick, restoreGame } from '../redux/thunks/game';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../redux/store';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@mui/material';
import { localStorageCache } from '../localStorage/localStorageCacheHandler';

const HISTORY = 'HISTORY';

function Board() {
    const dispatch = useDispatch();
    const squares = useSelector((state: AppState) => state.game.board);
    const xIsNext = useSelector((state: AppState) => state.game.player);
    const history = useSelector((state: AppState) => state.game.history);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [isWinner, setIsWinner] = useState(false);
    const [status, setStatus] = useState('');

    const handleClick = (i: number) => {
        if (!isWinner) {
            const newHistory = history.slice(0, stepNumber + 1);
            dispatch(attemptClick(i, squares, xIsNext, newHistory));
            setStepNumber(newHistory.length);
        }
    };

    const resetHandler = () => {
        dispatch(resetClick());
        setIsWinner(false);
        setStepNumber(0);
        localStorageCache.remove(HISTORY);
    };

    useEffect(() => {
        async function getHistory() {
            const historyStore = await localStorageCache.retrieve(HISTORY);
            if (historyStore <= 1) return;
            console.log(historyStore);

            historyStore.map((step: any, move: any) => {
                if (move == historyStore.length - 1) {
                    step.squares.map((value: any, i: any) => {
                        if (value !== null) {
                            dispatch(
                                restoreGame(
                                    step.squares,
                                    value === 'X',
                                    historyStore
                                )
                            );
                            setStepNumber(step.squares.length);
                        }
                    });
                }
            });
        }
        getHistory();
    }, []);

    useEffect(() => {
        const winner = calculateWinner(squares as string[]);
        if (winner) {
            setStatus('Winner: ' + winner);
            setIsWinner(true);
        } else {
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
        }
    }, [squares, xIsNext]);

    const renderSquare = (i: number) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => {
                    handleClick(i);
                }}
            />
        );
    };

    const jumpTo = (step: any, move: any): void => {
        setStepNumber(move);
        step.squares.map((value: any, i: any) => {
            if (value !== null) {
                dispatch(restoreGame(step.squares, value === 'X', history));
            }
        });
    };

    let isStepLeft = true;
    const moves = history.map((step, move) => {
        isStepLeft = step.squares.some((square) => square === null);
        const desc = move ? 'Go to step #' + move : null;
        return (
            <p key={move}>
                <button onClick={() => jumpTo(step, move)}>{desc}</button>
            </p>
        );
    });

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Typography variant="h6" align="center">
                    {status}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {renderSquare(0)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(1)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(2)}
            </Grid>

            <Grid item xs={4}>
                {renderSquare(3)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(4)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(5)}
            </Grid>

            <Grid item xs={4}>
                {renderSquare(6)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(7)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(8)}
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" align="center">
                    <Button onClick={resetHandler}>Reset</Button>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" align="center">
                    {moves}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Board;

function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
