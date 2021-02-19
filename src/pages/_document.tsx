import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import flush from "styled-jsx/server";

export default class RootDocument extends Document {
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" /> */}
          <meta name="description" content="My First Static Website" />
          <meta name="keywords" content="nextjs,static,website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
