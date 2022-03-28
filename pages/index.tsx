import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import NonFungibleAssets from "../components/NonFungibleAssets";
import { css } from "@emotion/react";
import { useAccount } from "wagmi";
const Home: NextPage = () => {
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  });
  return (
    <div
      css={css`
        padding-left: 12px;
        padding-right: 12px;
      `}
    >
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
      {accountData?.address && (
        <NonFungibleAssets address={accountData?.address} />
      )}
    </div>
  );
};

export default Home;
