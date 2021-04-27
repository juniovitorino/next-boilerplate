import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import 'styles/sass/critical.scss'
import 'styles/sass/main.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Meu título</title>
        <link rel="shortcut icon" href="/images/shortcut" />
        <link rel="apple-touch-icon" href="/images/shortcut" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
