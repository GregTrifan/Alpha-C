import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import NonFungibleAssets from "../../components/NonFungibleAssets";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Networks } from "../../constants";
const Home: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  if (address?.toString().match(/^0x[a-fA-F0-9]{40}$/))
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
        {Networks.map((chain, i) => (
          <NonFungibleAssets
            address={address.toString()}
            chain={chain}
            key={i}
          />
        ))}
      </div>
    );
  return (
    <div
      css={css`
        padding-left: 12px;
        padding-right: 12px;
      `}
    >
      <Typography
        variant="h1"
        css={css`
          text-align: center;
          margin-top: 18px;
          background: -webkit-linear-gradient(120deg, #ade200, #0b82c7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        Address invalid
      </Typography>
    </div>
  );
};

export default Home;
