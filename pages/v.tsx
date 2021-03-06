import type { NextPage } from "next";
import Head from "next/head";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Tooltip } from "@mui/material";

const Home: NextPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 360,
      origin: {
        x: 0.5,
        y: 0.5
      }
    });
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>tsmp</title>
        <meta name="title" content="You should join TSMP.." />
        <meta
          name="description"
          content="TSMP is a better SMP that includes very cool enjoyable stuff unlike this server, we even have national praise dream day!"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tristansmp.com/v" />
        <meta property="og:title" content="You should join TSMP.." />
        <meta
          property="og:description"
          content="TSMP is a better SMP that includes very cool enjoyable stuff unlike this server, we even have national praise dream day!"
        />
        <meta
          property="og:image"
          content={
            "https://tristansmp.com/_next/image?url=%2Fimages%2Fsignin.png&w=1920&q=75"
          }
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tristansmp.com/v" />
        <meta property="twitter:title" content="You should join TSMP.." />
        <meta
          property="twitter:description"
          content="tsmp, a smp for everyone."
        />
        <meta property="twitter:image" content={""} />
      </Head>
      <div className="text-white">
        {/* Main */}
        <section className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
          <div className="md:flex-1 md:mr-10">
            <h1 className="font-pt-serif text-5xl font-bold mb-7">
              TristanSMP
            </h1>
            <p className="font-pt-serif font-normal mb-7">
              {"A Minecraft server for everyone."}
            </p>
            <div className="font-montserrat">
              <Link href="/join">
                <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                  Join!
                </button>
              </Link>
              <Link href="/donate">
                <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
                  Donate
                </button>
              </Link>
            </div>
          </div>
          <Tooltip title="Photo of TSMP Spawn taken by Gamez Plays#1140">
            <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
              <div className="relative">
                <Link href="/photos">
                  <Image
                    src="/images/signin.png"
                    alt="TSMP Spawn"
                    className="absolute -top-16 -left-10 rounded-lg cursor-pointer"
                    width={1920}
                    height={1080}
                  />
                </Link>
              </div>
            </div>
          </Tooltip>
        </section>
      </div>
    </>
  );
};

export default Home;
