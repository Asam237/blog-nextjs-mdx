import { PoppinsUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class Blog extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body
          className={cn(
            RobotoUiDisplay.variable,
            PoppinsUiDisplay.variable,
            PoppinsUiDisplay.className
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
