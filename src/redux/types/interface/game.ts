//typescript: interface for payload
export interface Game {
    board: SquareType[];
    player: boolean;
    history: History[];
}

export type SquareType = 'X' | 'O' | null;

export interface History {
    squares: SquareType[];
}
