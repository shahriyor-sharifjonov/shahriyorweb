import '../styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://cdn-edge.kwork.ru/files/avatar/large/11/10139797-3.jpg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta name="robots" content="index,follow,noyaca,noodp" />
        <meta name="description" content="Shahriyor Sharifjonov's official website-portfolio. Full stack developer with 2+ years of experience" />
        <meta name="keywords" content="Shahriyor Sharifjonov, Shahriyorweb, Freelancer, Fullstack developer, Shakhriyor Sharifjonov, shahriyor web, web developing" />
        <meta name="application-name" content="Shahriyor Sharifjonov" />
        <meta name="mailru-domain" content="xlty9dlZL067pM4A" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shahriyor Sharifjonov - Fullstack developer" />
        <meta property="og:description" content="Shahriyor Sharifjonov's official website-portfolio. Full stack developer with 2+ years of experience" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:url" content="https://www.shahriyorweb.com" />
        <meta property="og:site_name" content="Shahriyor Sharifjonov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="yandex-metrika" type="text/javascript" >
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        var z = null;m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(90159099, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });`}
      </Script>
      <Script id="schema-navigation" type="application/ld+json">
        {`
          {
            "@context":"http://schema.org",
            "@type":"ItemList",
            "itemListElement":[
              {
                "@type":"SiteNavigationElement",
                "position":1,
                "name": "Home",
                "url":"https://www.shahriyorweb.com/"
              },
              {
                "@type":"SiteNavigationElement",
                "position":2,
                "name": "About",
                "url":"https://www.shahriyorweb.com/about/"
              },
              {
                "@type":"SiteNavigationElement",
                "position":3,
                "name": "Contact",
                "url":"https://www.shahriyorweb.com/contacts/"
              }
            ]
          }`
        }
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp