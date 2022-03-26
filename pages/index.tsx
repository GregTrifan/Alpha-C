import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
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
    </div>
  );
};

export default Home;
