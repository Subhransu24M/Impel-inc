"use client";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/aos/dist/aos.css";

import { React, useEffect } from 'react'
import AOS from 'aos';

// import { useEffect } from "react";
// import BootstrapPopper from "@/bootstrapcomponents/BootstrapPopper";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])


  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      </body>
    </html>
  );
}
