
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
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-roboto bg-gray-50 text-gray-900 selection:bg-blue-600 selection:text-white overflow-y-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}