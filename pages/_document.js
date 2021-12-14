import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between flex-column">
            <a href="/">
              <img className="navbar-brand" src="/iStoreLogo.svg" alt="" />
            </a>
          </nav>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
