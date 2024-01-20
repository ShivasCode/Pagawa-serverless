"use client";

import { Amplify } from "aws-amplify";

import "./globals.css";
import localFont from "next/font/local";
import amplifyconfig from "../amplifyconfiguration.json";

Amplify.configure(amplifyconfig, {
  ssr: true,
});
const myFont = localFont({ src: "../Poppins/Poppins-Regular.ttf" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFont.className} m-0`} style={{ margin: 0 + "px" }}>
        {children}
      </body>
    </html>
  );
}
