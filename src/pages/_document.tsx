import {EuclidUiDisplay} from "@/lib/fonts";
import cn from "clsx";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class Blog extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body
          className={cn(
            EuclidUiDisplay.variable,
            EuclidUiDisplay.className
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
