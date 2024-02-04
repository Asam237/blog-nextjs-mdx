import localFont from "next/font/local";

/**
 * Euclide UI Display
 */
export const EuclidUiDisplay = localFont({
  src: [
    {
      path: "../fonts/EuclidTriangle-Regular.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/EuclidTriangle-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/EuclidTriangle-Bold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-euclid-ui-display",
  preload: true,
});

