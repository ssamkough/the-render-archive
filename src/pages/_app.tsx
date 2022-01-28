import type { AppProps } from 'next/app';
import '../styles/globals.css';

const _app = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Component {...pageProps} />
);

export default _app;
