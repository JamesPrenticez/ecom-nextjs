
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-sans bg-primaryBackground selection:bg-primary-link selection:text-white overflow-y-scroll">

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}