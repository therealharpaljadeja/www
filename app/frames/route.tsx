/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
    return {
        image: (
            <div tw="flex items-center justify-center">
                <h2>Warpcast & Wallet Wrapped!</h2>
            </div>
        ),
        buttons: [
            <Button
                action="post"
                target={{
                    pathname: "/degen-balance",
                }}
            >
                Wrap Me!
            </Button>,
            // <Button
            //     action="post"
            //     target={{
            //         pathname: "/next",
            //     }}
            // >
            //     Next frame
            // </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
