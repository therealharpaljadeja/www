/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { getTokenUrl } from "frames.js";
import { zora } from "viem/chains";

const handleRequest = frames(async (ctx) => {
    return {
        image: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreigqkj4yeaxgaddlistfu3l57ydtx2f3k4rjtvuu4naq2xde7wcoca&w=1920&q=75",
        imageOptions: {
            aspectRatio: "1:1",
        },
        buttons: [
            <Button
                action="mint"
                target={getTokenUrl({
                    address: "0xf0ca21391e76ee5e8b6b253c064c7e3e20d8058e",
                    chain: zora,
                    tokenId: "1",
                })}
            >
                Mint
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
