import { CaretDown } from "phosphor-react";
import {
  Box,
  Card,
  CircularProgress,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AssetCard from "../AssetCard";
import { Masonry } from "@mui/lab";
import { Asset } from "../../types";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
type PropTypes = {
  address: string | null;
  chain: {
    name: string;
    chainId: number;
  };
};
const NonFungibleAssets = ({ address, chain }: PropTypes) => {
  const { error, data, isLoading } = useQuery(
    `accountPortfolio-${chain.chainId}`,
    () =>
      fetch(
        `https://api.covalenthq.com/v1/${chain.chainId}/address/${address}/balances_v2/?nft=true&no-nft-fetch=true&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
      ).then(async (res) => {
        const query = await res.json();
        const assets = query.data.items.filter((x: any) => {
          try {
            return (
              x.supports_erc.includes("erc721") ||
              x.supports_erc.includes("erc1155")
            );
          } catch {
            return false;
          }
        });
        return assets;
      }),
    {
      enabled: !!address,
    }
  );
  return (
    <div>
      <Accordion
        css={css`
          background-color: #dddddd;
          margin-top: 4px;
          margin-bottom: 6px;
        `}
      >
        <AccordionSummary expandIcon={<CaretDown />}>
          <Typography>{chain.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {!address && (
            <div>
              <p>Please add address</p>
            </div>
          )}
          {error && (
            <div>
              <p>No Items avalaible/ Couldn't load your portfolio</p>
            </div>
          )}
          {data && (
            <Box>
              {data && (
                <Masonry columns={{ xs: 1, sm: 2, md: 4 }}>
                  {data.map((asset: Asset) => {
                    return asset.nft_data.map((item, j) => (
                      <div key={j}>
                        <AssetCard
                          contractAddress={asset.contract_address}
                          contractName={asset.contract_name}
                          chainId={chain.chainId}
                          asset={item}
                        />
                      </div>
                    ));
                  })}
                </Masonry>
              )}
            </Box>
          )}
          {isLoading && (
            <CircularProgress
              css={css`
                color: black;
              `}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NonFungibleAssets;
