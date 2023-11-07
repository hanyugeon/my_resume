import localFont from "next/font/local";

export const Pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const Catamaran = localFont({
  src: [
    {
      path: "./Catamaran-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Catamaran-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-catamaran",
});
