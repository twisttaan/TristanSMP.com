import "tailwindcss/tailwind.css";
import "../styles/blog.css";
import Image from "next/image";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8863904909693060"
      />

      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="bg-zinc-800 text-white font-thin">
        {/* Header */}
        <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <Image
                  src="/images/TLogo.png"
                  alt="Me"
                  className="h-4 rounded-full"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
          <ul className="font-montserrat items-center hidden md:flex">
            <li className="mx-3 ">
              <Link href="/blog">
                <a className="growing-underline">Blog</a>
              </Link>
            </li>
            <li className="growing-underline mx-3">
              <Link href="/markets">
                <a>Markets</a>
              </Link>
            </li>
            <li className="growing-underline mx-3">
              <Link href="/stats">
                <a>Player Stats</a>
              </Link>
            </li>

            <li className="growing-underline mx-3">
              <Link href="/donate">
                <a>Donate</a>
              </Link>
            </li>
            <li className="growing-underline mx-3">
              <Link href="/photos">
                <a>Photos</a>
              </Link>
            </li>
            <li className="growing-underline mx-3">
              <Link href="/info">
                <a>Docs</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
