import { fetchQueryWithPagination, init } from "@airstack/node";
import { DocumentNode, gql } from "@apollo/client";

init(process.env.AIRSTACK_API_KEY || "");

// Define types for the token transfer
interface TokenTransfer {
    token: {
      lastTransferTimestamp: string; // Assuming ISO 8601 format, adjust if necessary
      name: string;
    };
  }
  
  // Define the return type for the last used token function
  interface LastUsedToken {
    name: string;
    timeSinceLastUsed: number;
  }

  
const query = gql`
    query FindTokenTransfers($address: Identity!) {
        TokenTransfers(
            input: {blockchain: base, filter: {from: {_eq: "$address"}, to: {_eq: "$address"}}}
          ) {
            TokenTransfer {
              token {
                lastTransferTimestamp
                name
              }
            }
          }
    }
`;

export default async function FindLastUsedToken(address: string): Promise<LastUsedToken> {
    let longestUnusedTime = 0;
    let lastUsedToken: LastUsedToken = { name: "", timeSinceLastUsed: 0 };

    try {
        const response = await fetchQueryWithPagination(gqlToString(query), { address });

        if (response && response.data.TokenTransfers.TokenTransfer.length) {
            const currentTimestamp = Date.now(); // Current timestamp in milliseconds

            response.data.TokenTransfers.TokenTransfer.forEach((transfer: TokenTransfer) => {
                const { lastTransferTimestamp, name } = transfer.token;
                const timeSinceLastUsed = (currentTimestamp - new Date(lastTransferTimestamp).getTime()) / (1000 * 60 * 60); // Convert milliseconds to hours
                lastUsedToken = { name, timeSinceLastUsed };
            });
        }
    } catch (e) {
        console.error(e);
    }

    return lastUsedToken;
}


export const gqlToString = (gqlQuery: DocumentNode): string =>
    gqlQuery.loc?.source.body || "";
