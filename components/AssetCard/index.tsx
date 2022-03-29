import { Card, CircularProgress } from "@mui/material";
import { css } from "@emotion/react";
import { NftDatum, NFTData } from "../../types";
import { useQuery } from "react-query";
type PropTypes = {
  asset: NftDatum;
  contractAddress: string;
  chainId: number;
  contractName: string;
};
const AssetCard = ({
  asset,
  chainId,
  contractAddress,
  contractName,
}: PropTypes) => {
  const { data, isLoading } = useQuery(
    `assetInfo-${contractAddress}-${asset.token_id}-${chainId}`,
    () =>
      fetch(
        `https://api.covalenthq.com/v1/${chainId}/tokens/${contractAddress}/nft_metadata/${asset.token_id}/?format=JSON&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
      ).then(async (res) => {
        const query: NFTData = await res.json();
        const data = query.data.items[0].nft_data[0].external_data?.image;
        return data;
      })
  );
  return (
    <Card
      css={css`
        padding: 4px;
        min-height: 200px;
      `}
    >
      <div
        css={css`
          align-items: center;
          padding: 4px;
        `}
      >
        {data && (
          <img
            src={data}
            css={css`
              max-height: 300px;
              display: block;
              margin-left: auto;
              margin-right: auto;
            `}
          />
        )}
        {isLoading && (
          <CircularProgress
            css={css`
              color: black;
            `}
          />
        )}
      </div>
      <p
        css={css`
          text-align: center;
        `}
      >
        {contractName}
      </p>
    </Card>
  );
};

export default AssetCard;
