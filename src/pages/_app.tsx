import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
