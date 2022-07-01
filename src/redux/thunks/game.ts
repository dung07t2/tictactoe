import { Dispatch } from 'redux';
import { localStorageCache } from '../../localStorage/localStorageCacheHandler';
import { resetGame, updateGame } from '../actions/game';
import { UpdateGameType } from '../types/game';
import { SquareType, History } from '../types/interface/game';

export const attemptClick =
    (
        i: number,
        squares: SquareType[],
        xIsNext: boolean,
        newHistory: History[],
        isReset?: boolean
    ) =>
    async (dispatch: Dispatch<UpdateGameType>) => {
        const squaresClone = [...squares];
        if (squares[i] !== null) {
            return;
        }
        squaresClone[i] = xIsNext ? 'X' : 'O';
        let params = {
            board: squaresClone,
            player: xIsNext,
            history: newHistory.concat([
                {
                    squares: squaresClone,
                },
            ]),
        };
        dispatch(updateGame(params));
        await localStorageCache.store('HISTORY', params.history);
    };

export const resetClick = () => async (dispatch: Dispatch<UpdateGameType>) => {
    let params = {
        board: new Array(9).fill(null),
        player: true,
        history: [
            {
                squares: Array(9).fill(null),
            },
        ],
    };
    dispatch(resetGame(params));
};

export const restoreGame =
    (squares: SquareType[], xIsNext: boolean, oldHistory: History[]) =>
    async (dispatch: Dispatch<UpdateGameType>) => {
        let params = {
            board: squares,
            player: xIsNext,
            history: oldHistory,
        };
        dispatch(updateGame(params));
    };
