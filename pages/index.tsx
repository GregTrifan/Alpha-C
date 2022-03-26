import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useSigner } from "wagmi";
import Networks from "../components/Networks";
import { useNetworkStore } from "../store";
import { ethers } from "ethers";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alpha-C</title>
        <meta name="description" content="Project under work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography
        variant="h2"
        css={css`
          font-weight: bold;
          text-align: center;
        `}
      >
        🚧🚧 WIP 🚧🚧
      </Typography>
      <Networks />
    </div>
  );
};

export default Home;
