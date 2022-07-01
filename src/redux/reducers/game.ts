import {
    UPDATE_GAME,
    RESET_GAME,
    GameStateType,
    UpdateGameType,
} from '../types/game';

const initialState: GameStateType = {
    board: new Array(9).fill(null),
    player: true,
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
};

export const gameReducer = (
    state = initialState,
    action: UpdateGameType
): GameStateType => {
    switch (action.type) {
        case UPDATE_GAME:
            return {
                ...state,
                board: action.payload.board,
                player: action.payload.player ? false : true,
                history: action.payload.history,
            };
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
};
