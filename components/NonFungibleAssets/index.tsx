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
import { Masonry } from "@mui/lab";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
type PropTypes = {
  address: string | null;
};
const NonFungibleAssets = ({ address }: PropTypes) => {
  const { error, data, isLoading } = useQuery(
    "accountPortfolio",
    () =>
      fetch(
        `https://api.covalenthq.com/v1/137/address/${address}/balances_v2/?nft=true&no-nft-fetch=true&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
      ).then(async (res) => {
        const query = await res.json();
        const assets = query.data.items.filter((x: any) =>
          x.supports_erc.includes("erc721")
        );
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
        `}
      >
        <AccordionSummary expandIcon={<CaretDown />}>
          <Typography>Your Assets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {!address && (
            <div>
              <p>Please add address</p>
            </div>
          )}
          {error && (
            <div>
              <p>Couldn't load your portfolio</p>
            </div>
          )}
          {data && (
            <Box>
              {data && (
                <Masonry columns={{ xs: 1, sm: 2, md: 4 }}>
                  {data.map((asset: any, i: number) => (
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
