export interface Asset {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  last_transferred_at: string;
  type: string;
  balance: string;
  balance_24h: null;
  quote_rate: number;
  quote_rate_24h: null;
  quote: number;
  quote_24h: null;
  nft_data: NftDatum[];
}

export interface NFTData {
  data: Data;
  error: boolean;
  error_message: null;
  error_code: null;
}

export interface Data {
  updated_at: string;
  items: Item[];
  pagination: null;
}

export interface Item {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  type: string;
  nft_data: NftDatum[];
}

export interface NftDatum {
  token_id: string;
  token_balance: string;
  token_url: string | null;
  supports_erc: string[];
  token_price_wei: null;
  token_quote_rate_eth: null;
  original_owner: string;
  external_data: ExternalData | null;
  owner: string;
  owner_address: string | null;
  burned: boolean | null;
}

export interface ExternalData {
  name: string;
  description: string;
  image: string;
  image_256: string;
  image_512: string;
  image_1024: string;
  animation_url: null;
  external_url: null;
  attributes: Attribute[];
  owner: null;
}

export interface Attribute {
  trait_type: string;
  value: string;
}
