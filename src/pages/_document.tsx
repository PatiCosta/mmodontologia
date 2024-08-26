import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="Realçando a beleza que já existe em você." />
        <meta name="keywords" content="Prótese Dentária, Endodontia, Implantodontia, Cirurgia oral menor, Ortodontia" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="http://www.dramarinamaragno.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MMOdontologia - Realçando a beleza que já existe em você." />
        <meta property="og:description" content="Realçando a beleza que já existe em você." />
        <meta property="og:image" content="http://www.dramarinamaragno.com.br/assets/logo.svg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="clubedopassaporte.com" />
        <meta property="twitter:url" content="http://www.dramarinamaragno.com.br//" />
        <meta name="twitter:title" content="MMOdontologia - Realçando a beleza que já existe em você." />
        <meta name="twitter:description" content="Realçando a beleza que já existe em você." />
        <meta name="twitter:image" content="http://www.dramarinamaragno.com.br/assets/logo.svg" />


        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/logo-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
