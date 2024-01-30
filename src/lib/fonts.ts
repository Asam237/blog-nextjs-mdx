import localFont from "next/font/local";

/**
 * Poppins UI Display
 */
export const PoppinsUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Poppins-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-Bold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-poppins-ui-display",
  preload: true,
});

/**
 * Roboto
 */
export const RobotoUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Roboto-Light.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
  preload: false,
});
