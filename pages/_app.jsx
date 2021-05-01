/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
