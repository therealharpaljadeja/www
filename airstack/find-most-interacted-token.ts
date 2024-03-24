import { fetchQueryWithPagination, init } from "@airstack/node";
import { DocumentNode, gql } from "@apollo/client";

init(process.env.AIRSTACK_API_KEY || "");

const query = gql`
    query FindTokenTransfers($address: Identity!) {
        TokenTransfers(
            input: {
                filter: {
                    _or: { from: { _eq: $address }, to: { _eq: $address } }
                    tokenType: { _eq: ERC20 }
                }
                blockchain: base
            }
        ) {
            TokenTransfer {
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

export default async function findTokenInteractions(address: string) {
    let interactions: any = {};

    let maxInteractions = 0;
    let maxInteractionsTokenDetails = {} as { name: string; logo: string };

    try {
        let response = await fetchQueryWithPagination(gqlToString(query), {
            address,
        });

        if (response) {
            let { data } = response;

            let tokenTransfers = data.TokenTransfers;

            let tokenTransfer = tokenTransfers.TokenTransfer;

            for (let i = 0; i < tokenTransfer.length; i++) {
                let transferDetails = tokenTransfer[i];

                let { token } = transferDetails;

                if (interactions[token.name]) {
                    interactions[token.name].interaction += 1;
                    if (
                        interactions[token.name].interaction > maxInteractions
                    ) {
                        maxInteractions = interactions[token.name].interaction;
                        maxInteractionsTokenDetails = {
                            name: token.name,
                            logo: token.logo.small,
                        };
                    }
                } else
                    interactions = {
                        ...interactions,
                        [`${token.name}`]: {
                            interaction: 1,
                            logo: token.logo.small,
                        },
                    };
            }
        }
    } catch (e) {
        console.error(e);
    }
    return { maxInteractions, maxInteractionsTokenDetails };
}

export const gqlToString = (gqlQuery: DocumentNode): string =>
    gqlQuery.loc?.source.body || "";
