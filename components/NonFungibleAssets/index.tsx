import React from "react";
import { Box, Card, CircularProgress } from "@mui/material";
import { Masonry } from "@mui/lab";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import { useAccount } from "wagmi";
const NonFungibleAssets = () => {
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  });
  const { isLoading, error, data } = useQuery(
    "accountPortfolio",
    () =>
      fetch(
        `https://api.covalenthq.com/v1/137/address/${
          accountData?.ens?.name ?? accountData?.address
        }/portfolio_v2/?nft=true&key=${
          process.env.NEXT_PUBLIC_COVALENT_API_KEY
        }`
      ).then((res) => res.json()),
    {
      enabled: !!accountData?.address,
    }
  );
  if (error)
    return (
      <div>
        <p>Couldn't load your portfolio</p>
      </div>
    );
  if (data)
    return (
      <Box>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
          {data.data.items.map((asset: any, i: number) => (
            <Card
              css={css`
                padding: 4px;
                min-height: 200px;
              `}
              key={i}
            >
              {asset.contract_name}
            </Card>
          ))}
        </Masonry>
      </Box>
    );
  return (
    <CircularProgress
      css={css`
        color: black;
      `}
    />
  );
};

export default NonFungibleAssets;
