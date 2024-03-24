import { fetchQueryWithPagination, init } from "@airstack/node";
import { DocumentNode, gql } from "@apollo/client";

init(process.env.AIRSTACK_API_KEY || "");

// Define types for the token transfer
interface TokenTransfer {
    blockTimestamp: string; // Assuming ISO 8601 format, adjust if necessary
    token: {
        name: string;
        logo: {
            small: string;
        };
    };
}

// Define the return type for the last used token function
interface LastUsedToken {
    name: string;
    timeSinceLastUsed: number;
    logo: string;
}

const query = gql`
    query LastUsedToken($address: Identity) {
        TokenTransfers(
            input: {
                filter: {
                    _or: { from: { _eq: $address }, to: { _eq: $address } }
                    tokenType: { _eq: ERC20 }
                }
                blockchain: base
                order: { blockTimestamp: ASC }
                limit: 100
            }
        ) {
            TokenTransfer {
                blockTimestamp
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

export default async function FindLastUsedToken(
    address: string
): Promise<LastUsedToken> {
    let lastUsedToken: LastUsedToken = {
        name: "",
        logo: "",
        timeSinceLastUsed: Number.MAX_SAFE_INTEGER,
    };

    // For every token the earliest transfer timestamp
    let timestampForTokens: any = {};

    try {
        const response = await fetchQueryWithPagination(gqlToString(query), {
            address,
        });

        if (response && response.data.TokenTransfers.TokenTransfer.length) {
            const currentTimestamp = Date.now(); // Current timestamp in milliseconds

            response.data.TokenTransfers.TokenTransfer.forEach(
                (transfer: TokenTransfer) => {
                    const { blockTimestamp, token } = transfer;
                    const { name, logo } = token;

                    timestampForTokens[name] = {
                        name,
                        logo: logo.small,
                        blockTimestamp,
                    };
                }
            );
        }

        // At this point latest timestamp for every token is in the object

        let lowestTimestampKey = null;
        let lowestTimestamp = Infinity; // Start with highest possible value

        for (const key in timestampForTokens) {
            if (timestampForTokens.hasOwnProperty(key)) {
                const { blockTimestamp } = timestampForTokens[key];
                if (new Date(blockTimestamp).getTime() < lowestTimestamp) {
                    lowestTimestamp = blockTimestamp;
                    lowestTimestampKey = key;
                }
            }
        }

        if (lowestTimestampKey) {
            let { name, logo, blockTimestamp } =
                timestampForTokens[lowestTimestampKey];
            lastUsedToken = {
                name,
                logo,
                timeSinceLastUsed:
                    Math.abs(Date.now() - new Date(blockTimestamp).getTime()) /
                    (1000 * 60 * 60),
            };
        }
    } catch (e) {
        console.error(e);
    }
    return lastUsedToken;
}

export const gqlToString = (gqlQuery: DocumentNode): string =>
    gqlQuery.loc?.source.body || "";
