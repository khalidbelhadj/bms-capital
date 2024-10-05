import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Subscribe from "@/components/subscribe";
import SheetNav from "@/components/sheet-nav";
import Dropdown from "@/components/dropdown";
import mainLogo from "@/../public/main-logo.webp";
import smallLogo from "@/../public/small-logo.jpg";
import Providers from "@/components/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BMS Capital",
  description:
    "Concentrated and Valued Holdings based in the Heart of Scotland",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col`}
      >
        <Toaster />
        <header className="h-20 bg-white z-10 px-10 lg:px-40 text-nowrap">
          <div className="max-w-screen-2xl h-full mx-auto flex justify-between items-center gap-2">
            <a className="w-9 h-9 block lg:hidden" href="/">
              <Image
                src={smallLogo}
                alt="logo"
                className="object-cover h-full"
              />
            </a>

            <a className="h-full w-[25rem] block max-lg:hidden" href="/">
              <Image
                priority
                src={mainLogo}
                alt="Main Logo"
                className="object-cover h-full"
              />
            </a>

            <div className="lg:hidden flex items-center h-full ml-auto">
              <SheetNav />
            </div>

            <nav className="flex-grow h-full max-lg:hidden">
              <ul className="flex gap-5 h-full items-center justify-end">
                <Dropdown title="Writeups" href="/writeups">
                  <a href="/writeups/monday-commentaries">
                    Monday Commentaries
                  </a>
                  <a href="/writeups/introductory-letter">
                    Introductory Letter
                  </a>
                </Dropdown>
                <li>
                  <a href="/investment-philosophy">Investment Philosophy</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                <Dropdown title="Policy" href="">
                  <a href="/policy/charity">Charity</a>
                  <a href="/policy/terms-and-conditions">
                    Terms and Conditions
                  </a>
                  <a href="/policy/privacy-policy">Privacy Policy</a>
                </Dropdown>
              </ul>
            </nav>
          </div>
        </header>

        <Providers>{children}</Providers>
        <footer className="mt-auto min-h-32 bg-white">
          <div className="max-w-screen-xl h-full mx-auto flex gap-10 items-center w-full p-5 max-sm:flex-col-reverse max-sm:gap-5 max-sm:items-start">
            <Subscribe />
            <div className="flex flex-grow items-end justify-end h-full">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/company/bmscapital"
                    target="_blank"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.37214 23.9997H0.396429V7.97649H5.37214V23.9997ZM2.88161 5.79078C1.29054 5.79078 0 4.47292 0 2.88185C1.13882e-08 2.1176 0.303597 1.38465 0.844003 0.844247C1.38441 0.303841 2.11736 0.000244141 2.88161 0.000244141C3.64586 0.000244141 4.3788 0.303841 4.91921 0.844247C5.45962 1.38465 5.76321 2.1176 5.76321 2.88185C5.76321 4.47292 4.47214 5.79078 2.88161 5.79078ZM23.9946 23.9997H19.0296V16.1997C19.0296 14.3408 18.9921 11.9569 16.4427 11.9569C13.8557 11.9569 13.4593 13.9765 13.4593 16.0658V23.9997H8.48893V7.97649H13.2611V10.1622H13.3307C13.995 8.90328 15.6177 7.57471 18.0386 7.57471C23.0743 7.57471 24 10.8908 24 15.1979V23.9997H23.9946Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://medium.com/@bmscapital" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                    >
                      <path
                        d="M6.76875 0.900848C3.03049 0.900848 0 4.0794 0 7.99999C0 11.9206 3.03071 15.0991 6.76875 15.0991C10.5068 15.0991 13.5375 11.9208 13.5375 7.99999C13.5375 4.07917 10.5072 0.900848 6.76875 0.900848ZM17.5781 1.31671C15.7089 1.31671 14.1939 4.30964 14.1939 8.00011C14.1939 11.6906 15.7092 14.6837 17.5784 14.6837C19.4475 14.6837 20.9628 11.6908 20.9628 8.00011H20.9625C20.9625 4.30858 19.4475 1.31671 17.5782 1.31671H17.5781ZM22.8096 2.01284C22.1524 2.01284 21.6195 4.69362 21.6195 8.00011C21.6195 11.3066 22.152 13.9874 22.8096 13.9874C23.4672 13.9874 24 11.3059 24 7.99999C24 4.69339 23.4669 2.01284 22.8097 2.01284H22.8096Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/BMS_Capital" target="_blank">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="text-neutral-400 text-xs">
                  © 2024 BMS Capital
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
