import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TV52PZXK');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
        
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
        <meta property="twitter:domain" content="dramarinamaragno.com.br" />
        <meta property="twitter:url" content="http://www.dramarinamaragno.com.br/" />
        <meta name="twitter:title" content="MMOdontologia - Realçando a beleza que já existe em você." />
        <meta name="twitter:description" content="Realçando a beleza que já existe em você." />
        <meta name="twitter:image" content="http://www.dramarinamaragno.com.br/assets/logo.svg" />


        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/logo-icon.png" />
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TV52PZXK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
