import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { MetaTags, Header, Footer } from "@components/simple";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <MetaTags />
        </Head>
        <body>
          <Header />
          <div id="main">
            <div className="background"></div>
            <main className="container py-1">
              <Main />
            </main>
          </div>
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
