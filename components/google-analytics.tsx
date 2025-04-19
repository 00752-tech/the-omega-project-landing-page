"use client"
import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            /* PASTE YOUR GOOGLE TAG MANAGER CODE HERE */
            /* It typically looks like:
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
            */
          `,
        }}
      />

      {/* Google Analytics (GA4) */}
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            /* PASTE YOUR GOOGLE ANALYTICS CODE HERE */
            /* It typically looks like:
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
            */
          `,
        }}
      />

      {/* Google Search Console Verification - Add to layout.tsx metadata */}
      {/* 
        export const metadata = {
          ...
          verification: {
            google: "YOUR-GOOGLE-VERIFICATION-CODE",
          },
        }
      */}
    </>
  )
}
