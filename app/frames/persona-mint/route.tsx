/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { getTokenUrl } from "frames.js";
import { base } from "viem/chains";

const handleRequest = frames(async (ctx) => {
    let tokenId = 1;
    let imageUrl =
        "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreicx7sf5cmbinbad3i7cquypjfl2jgmeb7p642b7nu4rebv6dcci34&w=1920&q=75";
    let persona: any = ctx.searchParams["persona"];

    console.log(persona);

    switch (persona) {
        case "Futourist":
            tokenId = 1;
            imageUrl =
                "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreicx7sf5cmbinbad3i7cquypjfl2jgmeb7p642b7nu4rebv6dcci34&w=1920&q=75";
            break;
        case "Memelancholic":
            imageUrl =
                "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreibx3zihvrerxgdyjnqidcymnupigogbi2io5bx5g2bxasmejktmle&w=1920&q=75";
            tokenId = 3;
            break;
        case "Gigaheart":
            imageUrl =
                "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreighuh7wzicrqqirnab4tfiwxpjs7zkcxwlhqfjwtg5sufb2nigtke&w=1920&q=75";
            tokenId = 2;
            break;
        case "Vibe Seeker":
            tokenId = 4;
            imageUrl =
                "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreigqkj4yeaxgaddlistfu3l57ydtx2f3k4rjtvuu4naq2xde7wcoca&w=1920&q=75";
            break;
        default:
            tokenId = 4;
            break;
    }

    return {
        image: imageUrl,
        imageOptions: {
            aspectRatio: "1:1",
        },
        buttons: [
            <Button
                action="mint"
                target={getTokenUrl({
                    address: "0x6c407a6cc2d9c9d7304329ff80796890279695ab",
                    chain: base,
                    tokenId: tokenId.toString(),
                })}
            >
                Mint
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
