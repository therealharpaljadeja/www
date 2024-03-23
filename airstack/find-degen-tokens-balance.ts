import { fetchQueryWithPagination, init } from "@airstack/node";
import { DocumentNode, gql } from "@apollo/client";
import { formatEther } from "viem";

init(process.env.AIRSTACK_API_KEY || "");

type EnumToValue<T extends Record<string, any>, U> = {
    [K in keyof T]: U;
  };

enum DEGEN_TOKENS {
    "Degen",
    "Base God",
    "Normie",
    "doginme",
    "Toshi"
}

type TokenResult = {
    amount: string,
    token: {
        name: DEGEN_TOKENS,
        logo: string[]
    }
}

type TokenBalance = TokenResult[];

type TokenBalances = {
    TokenBalance: TokenBalance
}

const query = gql`
query FindDegenTokenBalances($address: Identity) {
    TokenBalances(
      input: {filter: {owner:{_eq:$address}, tokenAddress: {_in: ["0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed","0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE", "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4", "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b", "0x7F12d13B34F5F4f0a9449c16Bcd42f0da47AF200"]}, tokenType: {_eq: ERC20}}, blockchain: base}
    ) {
      TokenBalance {
        amount
        token {
          name
          logo {
            small
          }
        }
      }
    }
  }
`;

export default async function findDegenTokenBalances(address: string) {

  let balances: any = {
    "Degen": '0',
    "Base God": '0',
    "Normie": '0',
    "doginme": '0',
    "Toshi": '0'
}

    try {
        let response = await fetchQueryWithPagination(gqlToString(query), {
            address
        });

        if (response) {
            let { data } = response;

            

            let tokenBalances = data.TokenBalances as TokenBalances;

            let tokenBalance = tokenBalances.TokenBalance;

            for(let i = 0; i < tokenBalance.length; i++) {
                let tokenDetail = tokenBalance[i];

                let { amount, token } = tokenDetail;
                
                balances[token.name] = formatEther(BigInt(amount));
            }

        }
    } catch (e) {
        console.error(e);
    }
    return balances;
}

export const gqlToString = (gqlQuery: DocumentNode): string =>
    gqlQuery.loc?.source.body || "";