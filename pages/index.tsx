import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import NonFungibleAssets from "../components/NonFungibleAssets";
import { css } from "@emotion/react";
import { useAccount } from "wagmi";
import { Networks } from "../constants";
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
      {accountData?.address &&
        Networks.map((chain, i) => (
          <NonFungibleAssets
            address={accountData.address}
            chain={chain}
            key={i}
          />
        ))}
      {!accountData && (
        <Typography
          variant="h3"
          css={css`
            text-align: center;
            font-weight: bold;
            margin-top: 18px;
            background: -webkit-linear-gradient(120deg, #ade200, #0b82c7);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Connect Wallet
        </Typography>
      )}
    </div>
  );
};

export default Home;
