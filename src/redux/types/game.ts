import { Game, SquareType, History } from './interface/game';

export const UPDATE_GAME = 'UPDATE_GAME';
export const RESET_GAME = 'RESET_GAME';

//typescript: interface for redux's state
interface GameStateTypeAction {
    board: SquareType[];
    player: boolean;
    history: History[];
}

export type GameStateType = GameStateTypeAction;

//typescript: interface for redux's action
interface UpdateGameActionType {
    type: typeof UPDATE_GAME | typeof RESET_GAME;
    payload: Game;
}

export type UpdateGameType = UpdateGameActionType;
