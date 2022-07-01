import Home from '../src/pages/index';
import { render, screen } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { gameReducer } from '../src/redux/reducers/game';
import { Provider } from 'react-redux';

let store;
describe('Home', () => {
    beforeEach(() => {
        store = createTestStore();
    });

    it('renders a reset button', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        const heading = screen.getByRole('button', {
            name: 'Reset',
        });

        expect(heading).toBeInTheDocument();
    });
});

function createTestStore(): any {
    const store = createStore(
        combineReducers({
            game: gameReducer,
        })
    );
    return store;
}
