import { Game } from '../types/interface/game';
import { RESET_GAME, UpdateGameType, UPDATE_GAME } from '../types/game';

export const updateGame = (game: Game): UpdateGameType => ({
    type: UPDATE_GAME,
    payload: game,
});

export const resetGame = (game: Game): UpdateGameType => ({
    type: RESET_GAME,
    payload: game,
});
